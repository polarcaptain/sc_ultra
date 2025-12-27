# SC Ultra - IQ Test Platform

A modern, sleek Next.js application for conducting intelligence assessments.

## Features

- 🎨 Sleek, modern UI with gradient designs
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Interactive test interface with timer
- 📊 Real-time progress tracking
- 💨 Optimized for Vercel deployment

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── test/
│   │   └── page.tsx    # Test interface
│   └── globals.css     # Global styles
├── public/             # Static assets
└── package.json
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment platform
