

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# 🎯 GenAI Instructors — Hitesh Choudhary & Piyush Garg Chatbots

This project is a **Next.js 14** web application that uses the **OpenAI API** to create two chatbot personas trained from **YouTube transcripts**:

- **Hitesh Choudhary** — Founder of Chai Aur Code  
- **Piyush Garg** — Full Stack & MERN Developer  

Users can select a chatbot from the home page and start chatting in the **authentic tone and style** of that person.

---

## 🚀 Features
- Two unique chatbots with distinct personalities.
- Transcript-based context to mimic tone and knowledge.
- Modern, mobile-friendly chat UI.
- API routes in **Next.js App Router** for backend logic.
- Hindi content automatically transliterated to English phonetics.

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14 (App Router)** — React framework for UI & routing
- **Tailwind CSS** — Styling
- **React Hooks** — State management (`useState`, `useRouter`)
- **Responsive UI** — Works across mobile and desktop

### **Backend**
- **Next.js API Routes** — For handling chat requests
- **OpenAI Node SDK** — LLM integration
- **Node.js FS & Path** — Reading transcript files

---

## 📦 Dependencies

| Dependency | Purpose |
|------------|---------|
| `next` | React framework |
| `react` / `react-dom` | Core UI rendering |
| `tailwindcss` | Styling |
| `openai` | OpenAI API SDK |
| `@indic-transliteration/sanscript` | Transliterate Hindi → English phonetics |
| `fs` / `path` | File system for transcript reading |

Install all dependencies:
```bash
npm install next react react-dom tailwindcss openai @indic-transliteration/sanscript


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
