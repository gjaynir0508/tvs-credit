from langchain_ollama import ChatOllama
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage


def chat(prompt="You are a helpful assistant!",
         model="llama3.1:8b") -> None:

    model = ChatOllama(model=model, temperature=0)
    content = [
        SystemMessage(
            content=prompt
        )
    ]
    while True:
        inp = input("user: ")
        if inp == "bye":
            break
        else:
            content.append(HumanMessage(content=inp))
            response_stream = model.stream(content)
            print("llm: ", end="")
            final_response = ""
            for chunk in response_stream:
                print(chunk.content, end="", flush=True)
                final_response += chunk.content
            print()
            content.append(AIMessage(content=final_response))
