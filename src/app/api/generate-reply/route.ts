import { NextRequest, NextResponse } from 'next/server'
import { generateReplies } from '../../lib/openai'

export async function POST(request: NextRequest) {
  try {
    const { tweetText, tone } = await request.json()

    if (!tweetText || typeof tweetText !== 'string') {
      return NextResponse.json(
        { error: 'Tweet text is required' },
        { status: 400 }
      )
    }

    if (tweetText.length > 1000) {
      return NextResponse.json(
        { error: 'Tweet text is too long' },
        { status: 400 }
      )
    }

    const replies = await generateReplies(tweetText, tone || 'neutral')

    return NextResponse.json({ replies })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate replies' },
      { status: 500 }
    )
  }
}