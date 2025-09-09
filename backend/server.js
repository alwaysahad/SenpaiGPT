import express from 'express'
import cors from 'cors'
import generate from './chatBot.js'
import path from 'path'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../frontend')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
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