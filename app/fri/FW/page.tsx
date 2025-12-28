'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FWPage() {
  const [iqScore, setIqScore] = useState('')
  const [fwSS, setFwSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedIqScore = localStorage.getItem('fw_iqScore')
    const savedFwSS = localStorage.getItem('fw_fwSS')

    if (savedIqScore) setIqScore(savedIqScore)
    if (savedFwSS) setFwSS(parseInt(savedFwSS))
  }, [])

  const calculateScore = () => {
    const input = parseFloat(iqScore)

    if (isNaN(input)) {
      alert("Enter a valid input.")
      return
    }

    // Convert IQ to SS: divide by 5, subtract 10, round to nearest digit
    const ssResult = Math.round((input / 5) - 10)

    setFwSS(ssResult)

    // Save to localStorage
    localStorage.setItem('fw_iqScore', iqScore)
    localStorage.setItem('fw_fwSS', ssResult.toString())
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
          Figure Weights (FW)
        </h1>

        {/* Overview Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Time limit: 12 minutes</li>
            <li>26 items</li>
            <li>Taken from CAIT Figure Weights Subtest</li>
            <li>Automatically scored and given an IQ score at the end</li>
          </ul>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Take the test below:
          </p>
          <a 
            href="https://cognitivemetrics.com/test/CAITFW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            CAIT Figure Weights (FW)
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your IQ Score Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                IQ Score
              </label>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Enter the IQ score returned by the test. It will be converted to SS by dividing by 5, then subtracting 10, and rounding to the nearest digit.
              </p>
              <input
                type="number"
                value={iqScore}
                onChange={(e) => setIqScore(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter IQ score"
              />
            </div>

            <button
              onClick={calculateScore}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate FW SS
            </button>

            {fwSS !== null && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FW SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {fwSS}
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
