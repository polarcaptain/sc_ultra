'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

// Sample questions - in a real app, these would come from an API
const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What number comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "If all roses are flowers, and some flowers fade quickly, then:",
    options: [
      "All roses fade quickly",
      "Some roses may fade quickly",
      "No roses fade quickly",
      "Roses are not flowers"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which word does not belong: Apple, Banana, Carrot, Orange",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "If BOOK is coded as 2151511, how would PAGE be coded?",
    options: ["161175", "161165", "161155", "171165"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Complete the analogy: Ocean is to Water as Desert is to:",
    options: ["Sand", "Cactus", "Heat", "Oasis"],
    correctAnswer: 0
  }
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(sampleQuestions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes

  // Timer effect
  useEffect(() => {
    if (showResults) return
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [showResults])

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    answers.forEach((answer, index) => {
      if (answer === sampleQuestions[index].correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / sampleQuestions.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Test Complete!
            </h1>
            <div className="text-6xl font-bold text-gray-800 mb-2">{score}</div>
            <div className="text-xl text-gray-600 mb-8">Your Score</div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                  <div className="text-2xl font-bold text-green-600">
                    {answers.filter((answer, index) => answer === sampleQuestions[index].correctAnswer).length}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Questions</div>
                  <div className="text-2xl font-bold text-gray-800">{sampleQuestions.length}</div>
                </div>
              </div>
            </div>

            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const question = sampleQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SC Ultra Test
            </h1>
            <div className="text-lg font-semibold text-gray-700">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    answers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-400'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg text-gray-800">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }`}
          >
            Previous
          </button>

          {currentQuestion === sampleQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
