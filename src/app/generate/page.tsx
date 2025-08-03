'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GeneratePage() {
  const [tweetText, setTweetText] = useState('')
  const [replies, setReplies] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [usageCount, setUsageCount] = useState(0)
  const [showPaywall, setShowPaywall] = useState(false)

  // Check usage count on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const count = parseInt(localStorage.getItem('replyai_usage') || '0')
      setUsageCount(count)
      // Temporarily disable paywall for development
      // if (count >= 5) {
      //   setShowPaywall(true)
      // }
    }
  }, [])

  const handleGenerate = async () => {
    // Temporarily disabled paywall - building user base first
     //if (usageCount >= 5) {
      //setShowPaywall(true)
       //return
     //}

    if (!tweetText.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/generate-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tweetText })
      })

      const data = await response.json()
      setReplies(data.replies)
      
      // Update usage count for future analytics (keep tracking)
      const newCount = usageCount + 1
      setUsageCount(newCount)
      localStorage.setItem('replyai_usage', newCount.toString())
      
    } catch (error) {
      console.error('Error generating replies:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = async () => {
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Error creating checkout:', error)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Could add a toast notification here
  }

  if (showPaywall) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              You've used all 5 free replies!
            </h2>
            <p className="text-gray-600">
              Unlock unlimited AI-powered replies and grow your Twitter following
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Pro Plan - $9.99/month</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Unlimited AI replies</li>
              <li>✓ Multiple tone options</li>
              <li>✓ Reply analytics (coming soon)</li>
              <li>✓ Priority support</li>
            </ul>
          </div>

          <Button 
            onClick={handleUpgrade}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            Upgrade to Pro
          </Button>
          
          <p className="text-xs text-gray-500 mt-4">
            Cancel anytime. No questions asked.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Generate Smart Twitter Replies
          </h1>
          <p className="text-gray-600">
            Paste any tweet and get AI-powered replies that drive engagement
          </p>
          <div className="mt-4 text-sm text-blue-600">
            🚀 Free beta - unlimited replies while we improve the product!
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paste the tweet you want to reply to:
          </label>
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="Paste the tweet text here..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <Button
            onClick={handleGenerate}
            disabled={loading || !tweetText.trim()}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
          >
            {loading ? 'Generating...' : 'Generate Replies'}
          </Button>
        </div>

        {/* Results Section */}
        {replies.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Generated Replies:
            </h3>
            <div className="space-y-3">
              {replies.map((reply, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <p className="text-gray-800 mb-3">{reply}</p>
                  <Button
                    onClick={() => copyToClipboard(reply)}
                    variant="outline"
                    size="sm"
                  >
                    Copy Reply
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}