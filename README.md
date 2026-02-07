# 🐾 Name My Pet

An AI-powered pet name generator built with Next.js and the Vercel AI SDK. Enter your pet's animal type and get three creative, unique name suggestions instantly!

## ✨ Features

- 🤖 AI-generated pet names using Vercel AI SDK
- 🎨 Clean, modern UI built with Tailwind CSS
- ⚡ Fast and responsive Next.js architecture
- 📱 Mobile-friendly design
- 🔢 Rate limiting (10 generations per session)

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **AI Integration:** Vercel AI SDK with OpenAI provider
- **Model:** OpenAI o4-mini

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd pet-name-generator
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:

```env
AI_GATEWAY_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

1. Enter your pet's animal type (e.g., "cat", "dog", "hamster", "parrot")
2. Click the "Submit" button
3. Wait a moment while AI generates three unique names
4. Get inspired and choose the perfect name for your pet!

## 🏗️ Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts      # API endpoint for name generation
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Main page component
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── .env                      # Environment variables (create this)
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## 🔧 Configuration

The AI SDK settings can be adjusted in [app/api/generate/route.ts](app/api/generate/route.ts):

- **model:** Currently using `openai/o4-mini` (via AI SDK provider syntax)
- **temperature:** Set to 0.8 for creative variety
- **prompt:** Customizable to generate different styles of names

The Vercel AI SDK provides a unified interface for multiple AI providers. To switch providers, simply update the model string (e.g., `anthropic/claude-3-5-sonnet` or `google/gemini-pro`).

## 📝 API Endpoints

### POST `/api/generate`

Generates pet names based on animal type.

**Request Body:**

```json
{
  "animal": "cat"
}
```

**Response:**

```json
{
  "result": "1. Whiskers\n2. Luna\n3. Shadow"
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- AI SDK by [Vercel](https://sdk.vercel.ai/)

---

Made with ❤️ for pet lovers everywhere!
