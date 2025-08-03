import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, BarChart3, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ReplyAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop Writing 
            <span className="text-blue-600"> Generic Replies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate smart, contextual Twitter replies that get engagement. 
            Save hours daily while growing your following with AI-powered responses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link href="/dashboard">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              See Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 5 free replies daily
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to grow on Twitter
            </h2>
            <p className="text-xl text-gray-600">
              Smart replies, analytics, and discovery in one powerful tool
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Replies</h3>
              <p className="text-gray-600">
                Generate contextual, engaging replies in multiple tones. 
                Professional, casual, funny - we&apos;ve got you covered.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                Track which replies get the most engagement. 
                Optimize your strategy with data-driven insights.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Hours Daily</h3>
              <p className="text-gray-600">
                No more staring at tweets wondering what to reply. 
                Get suggestions instantly and focus on what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to 10x your Twitter engagement?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of creators already growing with ReplyAI
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
            <Link href="/dashboard">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 ReplyAI. Built with ❤️ for Twitter creators.</p>
        </div>
      </footer>
    </div>
  )
}