![logo](https://github.com/mukul-771/CodeV/blob/main/client/src/assets/final_logo-removebg-preview.png)

# CoDeV

A real-time collaborative code editor that allows users to work together seamlessly. Participants can join a shared space using a unique room ID and collaborate on coding projects simultaneously.


## 🔮 Features

- 🌐 Real-time Code Collaboration: Edit code simultaneously with others across multiple files.
- 📂 File Management: Create, open, modify, save, delete, and organize files and directories.
- 📦 Download Codebase: Get the entire project as a zip file for offline use.
- 🆔 Unique Room Creation: Generate and join collaborative coding rooms using unique IDs.
- 🌎 Multilingual Support: Work with a variety of programming languages.
- 🎨 Syntax Highlighting: Automatic detection and color-coding of code syntax for different file types.
- 🚀 Code Execution: Run your code within the environment to see results immediately.
- 🔄 Instant Synchronization: Real-time updates for changes made across files and folders.
- 📢 User Notifications: Alerts for when users join or leave the collaboration session.
- 🧑‍🤝‍🧑 Presence Indicators: View who’s currently active, including their online/offline status.
- 💬 Group Chat: Communicate with collaborators in real-time while coding.
- ✏️ Real-time Editing Tooltip: See which users are actively editing the code.
- 💡 Code Suggestions: Get language-specific auto-suggestions as you type.
- 🔠 Customizable Text Appearance: Adjust font size and choose different font families.
- 🎨 Theme Options: Select from various themes to personalize your coding interface.

## Tech Framework

- React
- TypeScript
- React Router
- Tailwind CSS
- Node.js
- Express.js
- Socket.io
- Git
- GitHub

## Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page to fork the repository.
2. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/CodeV.git
    ```
3. **Set .env file:**
   In the client and server directories, swap .env.example for .env and set up the environment variables.:

    Frontend:

    ```bash
    VITE_BACKEND_URL=<your_server_url>
    ```

    Backend:

    ```bash
    PORT=3000
    ```

4. **Install dependencies:**
   Head to the frontend and backend folders individually and execute:
    ```bash
     npm install
    ```
5. **Start the frontend and backend servers:**  
   Frontend (Client-side):
    ```bash
    cd client
    npm run dev
    ```
   Backend (Server-side):
    ```bash
    cd server
    npm run dev
    ```
6. **Access the application:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:5173/
    ```

7. **Check if the Server is Running:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:3000/
    ```    

