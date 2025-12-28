'use client'

import { useState, useEffect } from 'react'

export default function VSIPage() {
  const [vpIQ, setVpIQ] = useState('')
  const [bdIQ, setBdIQ] = useState('')
  const [vpSS, setVpSS] = useState<number | null>(null)
  const [bdSS, setBdSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedVpIQ = localStorage.getItem('vsi_vpIQ')
    const savedBdIQ = localStorage.getItem('vsi_bdIQ')
    const savedVpSS = localStorage.getItem('vsi_vpSS')
    const savedBdSS = localStorage.getItem('vsi_bdSS')

    if (savedVpIQ) setVpIQ(savedVpIQ)
    if (savedBdIQ) setBdIQ(savedBdIQ)
    if (savedVpSS) setVpSS(parseInt(savedVpSS))
    if (savedBdSS) setBdSS(parseInt(savedBdSS))
  }, [])

  const calculateScores = () => {
    const vpInput = parseFloat(vpIQ)
    const bdInput = parseFloat(bdIQ)

    let vpSSResult = null
    let bdSSResult = null

    if (!isNaN(vpInput)) {
      // Convert VP IQ to SS: divide by 5, subtract 10, round to nearest digit
      vpSSResult = Math.round((vpInput / 5) - 10)
      setVpSS(vpSSResult)
    }

    if (!isNaN(bdInput)) {
      // Convert BD IQ to SS: divide by 5, subtract 10, round to nearest digit
      bdSSResult = Math.round((bdInput / 5) - 10)
      setBdSS(bdSSResult)
    }

    // Save to localStorage
    localStorage.setItem('vsi_vpIQ', vpIQ)
    localStorage.setItem('vsi_bdIQ', bdIQ)
    if (vpSSResult !== null) {
      localStorage.setItem('vsi_vpSS', vpSSResult.toString())
    }
    if (bdSSResult !== null) {
      localStorage.setItem('vsi_bdSS', bdSSResult.toString())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateScores()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="material-symbols-outlined mr-3 text-3xl">deployed_code</span>
          Visual Spatial Index
        </h1>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              CAIT Visual Puzzles (VP) is a test that lasts 13 minutes and 31 questions. The questions will ask you to select 3 of the given shapes that make a given complete figure. The several shapes are able to be rotated to complete the figure. To convert it from the IQ score you get at the end to SS, divide the IQ by 5, then subtract 10.
            </p>
            <p>
              CAIT Block Design (BD) is a test that lasts 9 minutes and 26 questions. The questions will ask you to choose an assortment of blocks that when together, make the given complete figure. The given figure may be in a rotated state. To convert it from the IQ score you get at the end to SS, divide the IQ by 5, then subtract 10.
            </p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold mb-2">VP</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>13 minutes</li>
                <li>31 questions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">BD</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>9 minutes</li>
                <li>26 questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tests Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the tests below:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://cognitivemetrics.com/test/CAITVP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Visual Puzzles (VP)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
            <a 
              href="https://cognitivemetrics.com/test/CAITBD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Block Design (BD)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your IQ Scores Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  VP IQ Score
                </label>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Enter the IQ score returned by the Visual Puzzles test to convert it to SS.
                </p>
                <input
                  type="number"
                  value={vpIQ}
                  onChange={(e) => setVpIQ(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter VP IQ score"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  BD IQ Score
                </label>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Enter the IQ score returned by the Block Design test to convert it to SS.
                </p>
                <input
                  type="number"
                  value={bdIQ}
                  onChange={(e) => setBdIQ(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter BD IQ score"
                />
              </div>
            </div>

            <button
              onClick={calculateScores}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate SS Scores
            </button>

            {(vpSS !== null || bdSS !== null) && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  {vpSS !== null && (
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">VP SS Score</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {vpSS}
                      </div>
                    </div>
                  )}
                  {bdSS !== null && (
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">BD SS Score</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {bdSS}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your VP and BD SS score, this is important for later
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
