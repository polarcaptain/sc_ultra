'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BTPage() {
  const [forwardScore, setForwardScore] = useState('')
  const [backwardScore, setBackwardScore] = useState('')
  const [age, setAge] = useState('')
  const [btSS, setBtSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedForwardScore = localStorage.getItem('bt_forwardScore')
    const savedBackwardScore = localStorage.getItem('bt_backwardScore')
    const savedAge = localStorage.getItem('bt_age')
    const savedBtSS = localStorage.getItem('bt_btSS')

    if (savedForwardScore) setForwardScore(savedForwardScore)
    if (savedBackwardScore) setBackwardScore(savedBackwardScore)
    if (savedAge) setAge(savedAge)
    if (savedBtSS) setBtSS(parseInt(savedBtSS))
  }, [])

  const age_22 = [
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 2],
    [8, 4],
    [9, 6],
    [10, 8],
    [11, 9],
    [12, 11],
    [13, 13],
    [14, 15],
    [15, 16],
    [16, 18],
    [17, 20],
    [18, 22]
  ]

  const age_58 = [
    [2, 1],
    [3, 1],
    [4, 3],
    [5, 4],
    [6, 5],
    [7, 7],
    [8, 8],
    [9, 10],
    [10, 11],
    [11, 13],
    [12, 14],
    [13, 15],
    [14, 17],
    [15, 19],
    [16, 20],
    [17, 21],
    [18, 22]
  ]

  const calculateScore = () => {
    const forward = parseFloat(forwardScore)
    const backward = parseFloat(backwardScore)
    const ageValue = parseFloat(age)

    if (isNaN(forward) || isNaN(backward) || isNaN(ageValue)) {
      alert("Enter a valid input.")
      return
    }

    // Determine which age table to use
    let sstable = []
    if (Math.abs(ageValue - 22) < Math.abs(ageValue - 58)) {
      sstable = age_22
    } else {
      sstable = age_58
    }

    // Calculate total score (forward + backward)
    const totalScore = Math.round(forward) + Math.round(backward)

    // Find the SS score from the table
    let result = null
    for (const entry of sstable) {
      if (entry[0] === totalScore) {
        result = entry[1]
        break
      }
    }

    if (result === null) {
      alert("Please enter a valid input.")
      return
    }

    setBtSS(result)

    // Save to localStorage
    localStorage.setItem('bt_forwardScore', forwardScore)
    localStorage.setItem('bt_backwardScore', backwardScore)
    localStorage.setItem('bt_age', age)
    localStorage.setItem('bt_btSS', result.toString())
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
          href="/wmi"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span>
          Back to WMI
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          eCorsi Block Tapping
        </h1>

        {/* Overview Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            First you will take eCorsi Block Tapping Forward and then eCorsi Block Tapping Backward. Remember to note your span score for both tests. After taking both tests enter your scores below and save your BT SS score.
          </p>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the tests below:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.psytoolkit.org/experiment-library/experiment_corsi.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              eCorsi Block Tapping Forward
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
            <a 
              href="https://www.psytoolkit.org/experiment-library/experiment_backward_corsi.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              eCorsi Block Tapping Backward
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your Scores Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Forward Score
                </label>
                <input
                  type="number"
                  value={forwardScore}
                  onChange={(e) => setForwardScore(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter forward score"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Backward Score
                </label>
                <input
                  type="number"
                  value={backwardScore}
                  onChange={(e) => setBackwardScore(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter backward score"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter age"
                />
              </div>
            </div>

            <button
              onClick={calculateScore}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate BT SS
            </button>

            {btSS !== null && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">BT SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {btSS}
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your BT SS score, this is important for later
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

