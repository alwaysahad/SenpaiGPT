const input = document.querySelector('#input')
const chatContainer = document.querySelector('#chat-container')
const askBtn = document.querySelector('#ask')

const threadId = Date.now().toString(36) + Math.random().toString(36).substring(2, 8)


input?.addEventListener('keyup', handleEnter)
askBtn?.addEventListener('click', handleAsk)

const loading = document.createElement('div')
loading.className = `my-6 animate-pulse`
loading.textContent = 'Thinking...'

async function generate(text) {
    
    const msg = document.createElement('div')
    msg.className = `my-6 bg-gray-700 p-3 rounded-xl ml-auto max-w-fit`
    msg.textContent = text
    chatContainer.appendChild(msg)
    input.value = ''

    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    chatContainer.appendChild(loading)
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    const assistantMessage = await callServer(text)
    
    const assistantMsgElem = document.createElement('div')
    assistantMsgElem.className = `max-w-fit`
    assistantMsgElem.textContent = assistantMessage
    
    loading.remove()
    
    chatContainer.appendChild(assistantMsgElem)
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function callServer(inputText) {
    const response = await fetch('/chat', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ threadId: threadId, message: inputText })
    })
    if (!response.ok) {
        throw new Error("Error generating the response")
    }

    const result = await response.json()
    return result.message
}

async function handleAsk(e) {
    const text = input.value.trim()
        if (!text) {
            return;
        }
        
       await generate(text)
}


async function handleEnter(e) {
    if (e.key === 'Enter') {
        const text = input.value.trim()
        if (!text) {
            return;
        }

       await generate(text)

    }
}