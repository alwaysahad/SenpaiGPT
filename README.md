# SenpaiGPT

SenpaiGPT is a simple AI-powered chatbot application that uses the Groq SDK for language model interactions and Tavily for web search capabilities. It includes a backend server built with Express.js and a basic frontend chat interface.

## Features
- Real-time chat with an AI assistant
- Web search integration for up-to-date information
- Thread-based conversation persistence using NodeCache
- CLI version for terminal-based interaction

## Prerequisites
- Node.js (v14 or higher recommended)
- API keys for:
  - Groq (GROQ_API_KEY)
  - Tavily (TAVILY_API_KEY)

## Installation
1. Clone the repository:
   ```
   git clone git@github.com:alwaysahad/SenpaiGPT.git
   cd SenpaiGPT
   ```

2. Install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and add your API keys:
   ```
   GROQ_API_KEY=your_groq_api_key
   TAVILY_API_KEY=your_tavily_api_key
   ```

## Running the Application

### Backend Server and Frontend
1. Start the server:
   ```
   cd backend
   npm start
   ```
   The server will run on http://localhost:3001

2. Open the frontend:
   - Navigate to `frontend/index.html` and open it in a web browser.
   - You can now interact with the chatbot through the web interface.

### CLI Version
For a terminal-based chat:
```
cd backend
node app.js
```
Type your messages and press Enter. Type 'bye' to exit.

## Project Structure
- `backend/`
  - `server.js`: Express server handling chat requests
  - `chatBot.js`: Core logic for generating responses using Groq and Tavily
  - `app.js`: CLI version of the chatbot
- `frontend/`
  - `index.html`: Chat UI
  - `script.js`: Client-side logic for sending messages and displaying responses

## Dependencies
- @tavily/core: For web search
- cors: Cross-origin resource sharing
- express: Web server framework
- groq-sdk: Groq API integration
- node-cache: For caching conversation threads

For any issues or contributions, please open an issue or pull request on the repository.
