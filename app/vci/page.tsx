'use client'

import { useState, useEffect } from 'react'

export default function VCIPage() {
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')
  const [satScore, setSatScore] = useState<number | null>(null)
  const [vciIQ, setVciIQ] = useState<number | null>(null)
  const [vrSS, setVrSS] = useState<number | null>(null)

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedCorrect = localStorage.getItem('vci_correct')
    const savedIncorrect = localStorage.getItem('vci_incorrect')
    const savedSatScore = localStorage.getItem('vci_satScore')
    const savedVciIQ = localStorage.getItem('vci_vciIQ')
    const savedVrSS = localStorage.getItem('vci_vrSS')

    if (savedCorrect) setCorrect(savedCorrect)
    if (savedIncorrect) setIncorrect(savedIncorrect)
    if (savedSatScore) setSatScore(parseInt(savedSatScore))
    if (savedVciIQ) setVciIQ(parseInt(savedVciIQ))
    if (savedVrSS) setVrSS(parseInt(savedVrSS))
  }, [])

  const scoringTableV = [[800, 85], [790, 84], [780, 83], [770, 82], [760, 81], [750, 80], [740, 79], [730, 78], [730, 77], [720, 76], [710, 75], [700, 74], [690, 73], [680, 72], [680, 71], [670, 70], [660, 69], [660, 68], [650, 67], [640, 66], [640, 65], [630, 64], [620, 63], [620, 62], [610, 61], [600, 60], [600, 59], [590, 58], [580, 57], [580, 56], [570, 55], [560, 54], [560, 53], [550, 52], [540, 51], [540, 50], [530, 49], [520, 48], [520, 47], [510, 46], [500, 45], [500, 44], [490, 43], [480, 42], [480, 41], [470, 40], [460, 39], [460, 38], [450, 37], [440, 36], [440, 35], [430, 34], [420, 33], [420, 32], [410, 31], [400, 30], [400, 29], [390, 28], [380, 27], [380, 26], [370, 25], [360, 24], [360, 23], [350, 22], [340, 21], [340, 20], [330, 19], [320, 18], [320, 17], [310, 16], [310, 15], [300, 14], [290, 13], [290, 12], [280, 11], [270, 10], [270, 9], [260, 8], [250, 7], [250, 6], [240, 5], [230, 4], [230, 3], [220, 2], [210, 1], [210, 0], [200, -1]]
  
  const norms = [[800, 159], [790, 156], [780, 154], [770, 152], [760, 150], [750, 148], [740, 146], [730, 144], [720, 142], [710, 141], [700, 140], [690, 139], [680, 138], [670, 137], [660, 135], [650, 134], [640, 133], [630, 132], [620, 130], [610, 129], [600, 127], [590, 126], [580, 124], [570, 123], [560, 122], [550, 121], [540, 120], [530, 119], [520, 118], [510, 117], [500, 116], [490, 114], [480, 113], [470, 112], [460, 111], [450, 110], [440, 109], [430, 108], [420, 107], [410, 106], [400, 105], [390, 103], [380, 102], [370, 101], [360, 100], [350, 99], [340, 97], [330, 96], [320, 95], [310, 93], [300, 92], [290, 91], [280, 89], [270, 87], [260, 85], [250, 83], [240, 81], [230, 79], [220, 77], [210, 75], [200, 72]]

  const calculateScore = () => {
    const inputc = parseFloat(correct)
    const inputw = parseFloat(incorrect)

    if (isNaN(inputc) || isNaN(inputw)) {
      alert("Please enter raw scores before calculating.")
      return
    }

    const rawScore = Math.round(inputc - (0.25 * inputw))
    
    // Find SAT-V scaled score from raw score
    let satVScore = null
    for (const entry of scoringTableV) {
      if (rawScore === entry[1]) {
        satVScore = entry[0]
        break
      }
    }

    if (satVScore === null) {
      alert("Please enter a valid raw score")
      return
    }

    // Find VCI IQ score from SAT-V scaled score
    let vciIQScore = 0
    for (const entry of norms) {
      if (satVScore === entry[0]) {
        vciIQScore = entry[1]
        break
      }
    }

    // Calculate VR SS
    let checkout = 5 * Math.round(vciIQScore / 5)
    if (checkout > 160) {
      checkout = 160
    }
    const vrSSScore = Math.round((checkout - 50) / 5)

    setSatScore(satVScore)
    setVciIQ(vciIQScore)
    setVrSS(vrSSScore)

    // Save to localStorage
    localStorage.setItem('vci_correct', correct)
    localStorage.setItem('vci_incorrect', incorrect)
    localStorage.setItem('vci_satScore', satVScore.toString())
    localStorage.setItem('vci_vciIQ', vciIQScore.toString())
    localStorage.setItem('vci_vrSS', vrSSScore.toString())
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
          <span className="material-symbols-outlined mr-3 text-3xl">dictionary</span>
          Verbal Comprehension Index
        </h1>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The following test is the OLD SAT (1980), you will only need to take the Verbal sections, skip the Math sections. The OLD SAT is a timed test. There are 2 Verbal sections (section 1 & 3), each lasting 30 minutes (1 hour total). Once 30 minutes has passed you should stop taking the section you are on immediately. Between sections you can take a break, 10 minutes MAX. If you choose to take a break, you are not allowed to seek help about anything regarding the test. You are allowed paper and pencil. It is suggested to print out the scantron so you can keep track of your answers; However, you don't need to print the whole test, you can simply read the questions in PDF form.
          </p>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>1 hour total timed</li>
            <li>Only take Verbal sections, Skip Math</li>
            <li>2 Verbal sections, 30 minutes each</li>
            <li>Pencil and paper allowed</li>
          </ul>
        </section>

        {/* Scoring Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Scoring</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The answer key is at the end of the Test PDF. Count the number you got correct and incorrect, then enter it below. Ignore unanswered questions.
          </p>
        </section>

        {/* Test Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the test below:</p>
          <a 
            href="https://drive.google.com/file/d/1P1LG5xOHvJeqRxBHQBAly57xbtKmH424/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            Old SAT Verbal (VR)
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </section>

        {/* Score Calculator Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Enter Your Raw Score Here</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  # of Correct Answers
                </label>
                <input
                  type="number"
                  value={correct}
                  onChange={(e) => setCorrect(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  # of Incorrect Answers
                </label>
                <input
                  type="number"
                  value={incorrect}
                  onChange={(e) => setIncorrect(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number"
                />
              </div>
            </div>

            <button
              onClick={calculateScore}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Calculate Scores
            </button>

            {(satScore !== null || vciIQ !== null || vrSS !== null) && (
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">SAT-V Scaled Score</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {satScore !== null ? satScore : '—'}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">VCI IQ Score</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {vciIQ !== null ? vciIQ : '—'}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">VR SS</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {vrSS !== null ? vrSS : '—'}
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Please save your VR SS score, this is important for later
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