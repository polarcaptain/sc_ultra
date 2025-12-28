'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MRPage() {
  const [rawScore, setRawScore] = useState('')
  const [mrSS, setMrSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedRawScore = localStorage.getItem('mr_rawScore')
    const savedMrSS = localStorage.getItem('mr_mrSS')

    if (savedRawScore) setRawScore(savedRawScore)
    if (savedMrSS) setMrSS(parseInt(savedMrSS))
  }, [])

  const sstable = [
    [1, 2],
    [2, 3],
    [3, 3],
    [4, 4],
    [5, 4],
    [6, 5],
    [7, 5],
    [8, 6],
    [9, 6],
    [10, 6],
    [11, 7],
    [12, 7],
    [13, 8],
    [14, 8],
    [15, 9],
    [16, 9],
    [17, 10],
    [18, 10],
    [19, 11],
    [20, 11],
    [21, 12],
    [22, 12],
    [23, 13],
    [24, 13],
    [25, 14],
    [26, 14],
    [27, 15],
    [28, 15],
    [29, 16],
    [30, 16],
    [31, 16],
    [32, 17],
    [33, 17],
    [34, 18],
    [35, 18],
    [36, 19]
  ]

  const calculateScore = () => {
    const input = parseFloat(rawScore)

    if (isNaN(input)) {
      alert("Enter a valid input.")
      return
    }

    let clampedInput = input
    if (input > 36) {
      clampedInput = 36
    } else if (input < 1) {
      clampedInput = 1
    }

    let result = 1
    for (const entry of sstable) {
      if (entry[0] === clampedInput) {
        result = entry[1]
        break
      }
    }

    setMrSS(result)

    // Save to localStorage
    localStorage.setItem('mr_rawScore', rawScore)
    localStorage.setItem('mr_mrSS', result.toString())
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateScore()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <Link 
          href="/fri"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span>
          Back to FRI
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          RAPM Set II
        </h1>

        {/* Overview Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Time limit: 40 minutes</li>
            <li>Correct answer = 1 point</li>
            <li>Scoring at the end of RAPM set II pdf</li>
          </ul>
        </section>

        {/* Materials Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Materials</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Pencil</li>
            <li>Paper</li>
            <li>Timer</li>
            <li>RAPM Set II pdf</li>
          </ul>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Take the test below:
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            RAPM Set II
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your Raw Score Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Raw Score
              </label>
              <input
                type="number"
                value={rawScore}
                onChange={(e) => setRawScore(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter raw score"
              />
            </div>

            <button
              onClick={calculateScore}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate MR SS
            </button>

            {mrSS !== null && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">MR SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {mrSS}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
