'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DSPage() {
  const [dsSS, setDsSS] = useState('')

  // Load saved value from localStorage on component mount
  useEffect(() => {
    const savedDsSS = localStorage.getItem('ds_dsSS')
    if (savedDsSS) setDsSS(savedDsSS)
  }, [])

  const handleSave = () => {
    if (!dsSS) {
      alert("Please enter a DS SS score.")
      return
    }
    // Save to localStorage
    localStorage.setItem('ds_dsSS', dsSS)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
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
          CAIT Digit Span (DS)
        </h1>

        {/* Overview Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            CAIT Digit Span (DS) is a test that lasts several minutes and covers 3 different sections in the test. The first one is "forwards", where they say a sequence of numbers and you type in that sequence in the order you heard it (Them: "312" You: "312"). The next section is called "backwards", where they say a sequence of numbers and you type in the sequence except in the opposite order you heard it (Them: "312" You: "213"). The last section is called "sequencing", where they once again say a sequence of numbers and you type in the sequence in order of smallest number to biggest number (Them: "312" You: "123"). The test is age adjusted so remember to input your age.
          </p>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the test below:</p>
          <a 
            href="https://cognitivemetrics.com/test/CAIT_DS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            CAIT Digit Span (DS)
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Entry Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter the Scaled Score received at the bottom when you finish the test:</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                DS SS Score
              </label>
              <input
                type="number"
                value={dsSS}
                onChange={(e) => setDsSS(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter DS SS score"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Save DS SS Score
            </button>

            {dsSS && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">DS SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {dsSS}
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your DS SS score, this is important for later
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

