# AI Bridge

AI Bridge is a Chrome Extension that enables seamless conversation transfer between AI assistants such as ChatGPT, Claude, and Gemini. It extracts chat context from one platform, formats it into a structured prompt, and transfers it to another AI assistant, eliminating the need for manual copy-pasting.

## Features

* Transfer conversations from ChatGPT to Gemini
* Transfer conversations from ChatGPT to Claude
* Extract and format chat history automatically
* Store conversation context locally using Chrome Storage
* Auto-insert transferred context into supported AI platforms
* Lightweight and privacy-friendly (all processing happens locally)

## Project Motivation

Modern users frequently switch between different AI assistants to compare responses, access unique capabilities, or continue ongoing projects. AI Bridge simplifies this workflow by allowing conversations to move seamlessly across platforms.

## Tech Stack

* JavaScript
* Chrome Extension Manifest V3
* Chrome Storage API
* Content Scripts
* Background Service Workers

## Project Structure

```bash
ai-bridge-extension/
│
├── manifest.json
├── popup.html
├── popup.js
├── background.js
│
├── content/
│   ├── chatgpt.js
│   ├── claude.js
│   └── gemini.js
│
└── icons/
```

## How It Works

1. User opens a ChatGPT conversation.
2. AI Bridge extracts the conversation using content scripts.
3. Conversation data is formatted and stored locally.
4. The selected target platform (Claude or Gemini) opens automatically.
5. AI Bridge retrieves the stored conversation and inserts it into the destination AI assistant.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/ai-bridge.git
cd ai-bridge
```

### Load Extension in Chrome

1. Open Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load Unpacked**.
5. Select the project folder.
6. The AI Bridge extension will appear in your browser toolbar.

## Usage

1. Open a ChatGPT conversation.
2. Click the AI Bridge extension icon.
3. Select the destination AI assistant.
4. AI Bridge transfers the conversation context automatically.
5. Continue the discussion on the target platform.

## Current Features

* ChatGPT → Gemini transfer
* ChatGPT → Claude transfer
* Local conversation storage
* Automatic context formatting

## Future Enhancements

* Claude → ChatGPT transfer
* Gemini → ChatGPT transfer
* Cross-platform memory synchronization
* Conversation summarization using LLMs
* Export conversations as Markdown, JSON, and PDF
* AI workspace for side-by-side model comparison
* Cloud sync and user authentication

## Privacy

AI Bridge stores conversation data locally within the browser using Chrome Storage. No conversation data is transmitted to external servers.

## Author

**Prakash Singh**

* GitHub: https://github.com/singhprakash2324
* LinkedIn: https://linkedin.com/in/singprakash2324

## License

This project is licensed under the MIT License.
