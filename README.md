# 💖 Find My Date – AI-Powered Dating Platform

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

## 📖 Overview

**Find My Date** is a modern, intelligent dating web application designed to move beyond superficial swiping and foster authentic, meaningful connections. Built with the latest web technologies (Next.js 15 App Router, React 19, and TypeScript), this platform leverages the power of **Google Gemini AI** to provide deep compatibility analysis and personalized conversation starters.

Whether it's finding the perfect match based on nuanced personality traits or helping users break the ice with context-aware opening lines, this project showcases how AI can be seamlessly integrated into consumer applications to enhance user experience and engagement.

## ✨ Key Features

*   **🤖 AI Smart Matching:** Utilizes the Google Gemini API to analyze user profiles, interests, and personality traits, generating highly compatible match suggestions with detailed reasoning on *why* two users are a good fit.
*   **💬 AI Dating Assistant (Wingman):** Solves the "cold start" problem in online dating by generating contextual, personalized icebreakers based on a match's profile, helping users initiate engaging conversations effortlessly.
*   **⚡ High-Performance Architecture:** Built on the Next.js 15 App Router, ensuring lightning-fast load times, optimal SEO, and robust type safety across the entire codebase with TypeScript.
*   **🎨 Premium UI/UX:** Features a beautifully crafted, mobile-first interface using **Tailwind CSS**. Incorporates fluid, interactive animations and page transitions powered by **Framer Motion**.
*   **📱 Fully Responsive:** Carefully designed to provide a native-app-like experience across all devices, from large desktop monitors to mobile screens.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://motion.dev/) (`motion/react`)
*   **AI Integration:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 How to Run Locally

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.17 or higher recommended)
*   npm, yarn, pnpm, or bun
*   A **Google Gemini API Key** (Get one for free at [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/find-my-date.git
cd find-my-date
2. Install dependencies
code
Bash
npm install
# or
yarn install
# or
pnpm install
3. Set up environment variables
Create a .env.local file in the root directory of the project:
code
Bash
touch .env.local
Add your Google Gemini API key to the .env.local file:
code
Env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
(Note: Never commit your .env.local file to version control. It is already included in .gitignore by default.)
4. Run the development server
code
Bash
npm run dev
# or
yarn dev
# or
pnpm dev
5. Open the app
Open http://localhost:3000 in your browser to see the application running.
📁 Project Structure
/app: Contains the Next.js App Router pages, layouts, and global CSS.
/components: Reusable React components (UI elements, layout wrappers, etc.).
/public: Static assets like images and icons.
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
📝 License
This project is MIT licensed.
code
Code
***
