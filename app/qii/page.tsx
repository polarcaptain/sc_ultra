'use client'

import { useState, useEffect } from 'react'

export default function QRIPage() {
  const [deviationScore, setDeviationScore] = useState('')
  const [qtSS, setQtSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedDeviationScore = localStorage.getItem('qri_deviationScore')
    const savedQtSS = localStorage.getItem('qri_qtSS')

    if (savedDeviationScore) setDeviationScore(savedDeviationScore)
    if (savedQtSS) setQtSS(parseInt(savedQtSS))
  }, [])

  const calculateScore = () => {
    const input = parseFloat(deviationScore)

    if (isNaN(input)) {
      alert("Enter a valid input.")
      return
    }

    // Calculate: 5 * round((deviationScore * 15 + 100) / 5)
    let calculated = 5 * Math.round((input * 15 + 100) / 5)
    
    // Clamp between 60 and 170
    if (calculated > 170) {
      calculated = 170
    } else if (calculated < 60) {
      calculated = 60
    }

    // Calculate SS: round((calculated - 50) / 5)
    const ssResult = Math.round((calculated - 50) / 5)

    setQtSS(ssResult)

    // Save to localStorage
    localStorage.setItem('qri_deviationScore', deviationScore)
    localStorage.setItem('qri_qtSS', ssResult.toString())
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateScore()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="material-symbols-outlined mr-3 text-3xl">calculate</span>
          Quantitative Reasoning Index
        </h1>

        {/* Note Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 pl-6 py-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Note:</strong> If you have taken the 1980's SAT-M section, you can use your score instead of doing SMART, just know the maximum score for the 1980's SAT-M is lower than SMART and is subject to the ceiling effect.
            </p>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The SAT-M: Advanced Rendition Test (SMART) is a 120 minute timed test that spans 75 questions. It is divided into two sections; The first section being easier and the second one being more challenging. Instructions are given in the test and you are allowed to go back and check your answers as long as there is still time left. Correct answers are given 1 point and incorrect answers subtract 0.25 points from your score. Pencils and paper are allowed, however calculators are not. It is advised to use all the time given to you. Your score will be returned in a deviation form, which should be entered below.
          </p>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>120 minutes</li>
            <li>75 questions</li>
            <li>Pencil and paper allowed</li>
            <li>Incorrect answers penalized</li>
          </ul>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the test below:</p>
          <a 
            href="https://cognitivemetrics.com/test/SMART?rct=scultra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors">
            SMART
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your Deviation Score Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Deviation Score
              </label>
              <input
                type="number"
                value={deviationScore}
                onChange={(e) => setDeviationScore(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter deviation score"
              />
            </div>

            <button
              onClick={calculateScore}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate QT SS
            </button>

            {qtSS !== null && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">QT SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {qtSS}
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your QT SS score, this is important for later
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
