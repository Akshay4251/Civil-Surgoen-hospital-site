import React, { useState, useRef, useEffect } from 'react'
import { chatbotResponses } from '../data/responses'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to Government Hospital Sindhudurg. How can I help you today?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (input) => {
    const lowercaseInput = input.toLowerCase()
    
    for (const [key, response] of Object.entries(chatbotResponses)) {
      const keywords = key.split('|')
      for (const keyword of keywords) {
        if (lowercaseInput.includes(keyword)) {
          return response
        }
      }
    }
    
    return "I'm sorry, I didn't understand that. You can ask me about appointments, visiting hours, emergency services, departments, or general hospital information."
  }

  const handleSend = () => {
    if (inputValue.trim() === '') return

    // Add user message
    const userMessage = { type: 'user', text: inputValue }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = findResponse(inputValue)
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const quickActions = [
    'Book Appointment',
    'Emergency',
    'Visiting Hours',
    'Departments'
  ]

  const handleQuickAction = (action) => {
    setInputValue(action)
    handleSend()
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-hospital-green-500 text-white rounded-full p-4 shadow-lg hover:bg-hospital-green-600 transition-all duration-300 z-50"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-hospital-green-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Hospital Assistant</h3>
            <p className="text-sm opacity-90">We're here to help!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 chat-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-hospital-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs bg-hospital-green-100 text-hospital-green-600 px-3 py-1 rounded-full hover:bg-hospital-green-200 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-hospital-green-500"
              />
              <button
                onClick={handleSend}
                className="bg-hospital-green-500 text-white p-2 rounded-full hover:bg-hospital-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot