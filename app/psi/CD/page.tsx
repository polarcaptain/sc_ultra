'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CDPage() {
  const [rawScore, setRawScore] = useState('')
  const [age, setAge] = useState('')
  const [cdSS, setCdSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedRawScore = localStorage.getItem('cd_rawScore')
    const savedAge = localStorage.getItem('cd_age')
    const savedCdSS = localStorage.getItem('cd_cdSS')

    if (savedRawScore) setRawScore(savedRawScore)
    if (savedAge) setAge(savedAge)
    if (savedCdSS) setCdSS(parseInt(savedCdSS))
  }, [])

  const age_16 = [
    [1, 22],
    [2, 27],
    [3, 33],
    [4, 39],
    [5, 46],
    [6, 52],
    [7, 58],
    [8, 64],
    [9, 70],
    [10, 75],
    [11, 80],
    [12, 86],
    [13, 91],
    [14, 95],
    [15, 100],
    [16, 104],
    [17, 107],
    [18, 110],
    [19, 135]
  ]

  const age_30 = [
    [1, 22],
    [2, 27],
    [3, 33],
    [4, 39],
    [5, 46],
    [6, 52],
    [7, 57],
    [8, 63],
    [9, 69],
    [10, 74],
    [11, 80],
    [12, 85],
    [13, 90],
    [14, 94],
    [15, 99],
    [16, 103],
    [17, 106],
    [18, 109],
    [19, 135]
  ]

  const age_35 = [
    [1, 21],
    [2, 26],
    [3, 32],
    [4, 38],
    [5, 44],
    [6, 50],
    [7, 56],
    [8, 61],
    [9, 67],
    [10, 72],
    [11, 78],
    [12, 83],
    [13, 88],
    [14, 92],
    [15, 96],
    [16, 100],
    [17, 104],
    [18, 107],
    [19, 135]
  ]

  const age_45 = [
    [1, 18],
    [2, 23],
    [3, 29],
    [4, 35],
    [5, 41],
    [6, 46],
    [7, 51],
    [8, 56],
    [9, 62],
    [10, 67],
    [11, 72],
    [12, 78],
    [13, 83],
    [14, 88],
    [15, 92],
    [16, 97],
    [17, 101],
    [18, 104],
    [19, 135]
  ]

  const age_55 = [
    [1, 15],
    [2, 20],
    [3, 25],
    [4, 30],
    [5, 35],
    [6, 41],
    [7, 46],
    [8, 52],
    [9, 56],
    [10, 62],
    [11, 67],
    [12, 71],
    [13, 78],
    [14, 83],
    [15, 88],
    [16, 92],
    [17, 97],
    [18, 101],
    [19, 135]
  ]

  const age_65 = [
    [1, 12],
    [2, 16],
    [3, 20],
    [4, 25],
    [5, 30],
    [6, 35],
    [7, 41],
    [8, 46],
    [9, 51],
    [10, 56],
    [11, 62],
    [12, 66],
    [13, 72],
    [14, 78],
    [15, 83],
    [16, 87],
    [17, 92],
    [18, 97],
    [19, 135]
  ]

  const calculateScore = () => {
    const raw = parseFloat(rawScore)
    const ageValue = parseFloat(age)

    if (isNaN(raw) || isNaN(ageValue)) {
      alert("Enter a valid input.")
      return
    }

    // Determine which age table to use
    let sstable = []
    if (ageValue < 30) {
      sstable = age_16
    } else if (ageValue < 35) {
      sstable = age_30
    } else if (ageValue < 45) {
      sstable = age_35
    } else if (ageValue < 55) {
      sstable = age_45
    } else if (ageValue < 65) {
      sstable = age_55
    } else {
      sstable = age_65
    }

    // Find the SS score: first entry where raw <= x[1]
    let result = null
    for (const entry of sstable) {
      if (raw <= entry[1]) {
        result = entry[0]
        break
      }
    }

    if (result === null) {
      alert("Please enter a valid input.")
      return
    }

    setCdSS(result)

    // Save to localStorage
    localStorage.setItem('cd_rawScore', rawScore)
    localStorage.setItem('cd_age', age)
    localStorage.setItem('cd_cdSS', result.toString())
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
          href="/psi"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span>
          Back to PSI
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Coding
        </h1>

        {/* Overview Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Overview</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
            <li>Time limit: 120 seconds</li>
            <li>Correct answer = 1 point ; Incorrect answer = 0 points ; 135 points MAX</li>
            <li>Do not include sample problems in score</li>
            <li>Answers do not need to be perfect but should be identifiable</li>
          </ul>
          <div className="mt-4">
            <Image
              src="/coding-example.jpg"
              alt="Coding example acceptable answers"
              width={800}
              height={600}
              className="w-full h-auto max-w-[650px]"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
            *Note: all of the figures above are acceptable answers
          </p>
        </section>

        {/* Materials Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Materials</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Pencil</li>
            <li>Timer</li>
            <li>Coding form (pg.2)</li>
            <li>Proctor (optional)</li>
          </ul>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Print out the Coding Form linked below to begin the test (No Peeking).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            After you have taken the test, count up how many you got correct then enter it below along with your age.
          </p>
          <a 
            href="https://drive.google.com/file/d/1RQjkQn2nxPhvsgawhfU4epdH6WLPEJK8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            Coding Form
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your Scores Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Raw Score
                </label>
                <input
                  type="number"
                  value={rawScore}
                  onChange={(e) => setRawScore(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter raw score"
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
              Calculate CD SS
            </button>

            {cdSS !== null && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">CD SS Score</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {cdSS}
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your CD SS score, this is important for later
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
