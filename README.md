# Twitter Reply Assistant

An AI-powered Twitter reply generator that creates contextual and engaging responses using OpenAI's API. Built with Next.js, TypeScript, Prisma, and Stripe for payments.

## Features

- 🤖 **AI-Powered Replies**: Generate contextual Twitter replies using OpenAI
- 🔐 **User Authentication**: Secure user management and session handling
- 📊 **Usage Tracking**: Monitor API usage and implement rate limiting
- 💳 **Payment Integration**: Stripe integration for premium features
- 🎨 **Modern UI**: Clean, responsive interface built with Next.js
- 🗄️ **Database**: Prisma ORM with PostgreSQL for data persistence
- 🔧 **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: OpenAI API
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- OpenAI API key
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/twitter-reply-assistant.git
   cd twitter-reply-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/twitter_reply_assistant"
   
   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"
   
   # NextAuth
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Stripe
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
   
   # Twitter API (optional)
   TWITTER_CLIENT_ID="your-twitter-client-id"
   TWITTER_CLIENT_SECRET="your-twitter-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Sign up/Login**: Create an account or sign in
2. **Generate Replies**: Paste a tweet and select your preferred tone
3. **Get AI Responses**: Receive contextual, engaging replies
4. **Copy & Use**: Copy the generated replies to use on Twitter

## Project Structure

```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── generate-reply/ # Reply generation API
│   │   └── create-checkout/ # Stripe payment endpoints
│   ├── generate/           # Reply generation page
│   ├── dashboard/          # User dashboard
│   ├── lib/               # Utility functions and configurations
│   └── types/             # TypeScript type definitions
├── components/            # Reusable UI components
└── prisma/               # Database schema and migrations
```

## API Endpoints

- `POST /api/generate-reply` - Generate AI-powered replies
- `POST /api/create-checkout` - Create Stripe checkout session
- `GET /api/auth/*` - Authentication routes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

## Roadmap

- [ ] Twitter API integration for direct posting
- [ ] Reply templates and customization
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced tone customization
