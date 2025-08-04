import React from 'react'

const EmailSignupForm: React.FC = () => {
  return (
    <form action="https://formsubmit.co/adarshjamwal6@gmail.com" method="POST">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Join Waitlist
      </button>
    </form>
  )
}

export default EmailSignupForm