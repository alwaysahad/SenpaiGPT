import express, { json } from 'express'
import cors from 'cors'
import generate from './chatBot.js'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to SenpaiGPT!')
})

app.post('/chat', async (req, res) => {
    const { message, threadId } = req.body;

    // Check if the message is empty or only contains whitespace
    if (!message || !threadId) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const result = await generate(message, threadId);
        res.json({
            message: result
        });
    } catch (error) {
        // Log the error for debugging and send a generic error response to the client
        console.error("Error generating response:", error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})