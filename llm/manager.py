from pydantic import BaseModel
from pymongo import MongoClient
import ollama


client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
db = client["your_database_name"]  # Replace with your database name
collection = db["your_collection_name"]  # Replace with your collection name

class QueryRequest(BaseModel):
    query: str

def translate_query(user_query: str):
    """
    Translate natural language query into MongoDB query using an LLM managed by Ollama.
    """
    try:
        response = ollama.generate(model="phi-3", prompt=user_query)
        translated_query = response.strip()
        mongo_query = eval(translated_query)  # WARNING: eval() is risky; consider using a safer parser
    except Exception as e:
        raise HTTPException(status_code=400, detail="Failed to translate query using the LLM.")
    
    return mongo_query

def execute_query(query: dict):
    """
    Execute the translated MongoDB query.
    """
    try:
        results = collection.find(query)
        return list(results)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {e}")

@app.post("/retrieve")
async def retrieve_info(request: QueryRequest):
    """
    Endpoint to retrieve information from the MongoDB database based on user query.
    """
    user_query = request.query
    mongo_query = translate_query(user_query)
    results = execute_query(mongo_query)
    return {"results": results}
