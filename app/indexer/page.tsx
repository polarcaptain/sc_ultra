'use client'

import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface IndexResult {
  index: string
  score: number
  ci: string
}

interface FactorResult {
  factor: string
  score: number
  ci: string
}

export default function IndexerPage() {
  const [vr, setVr] = useState('')
  const [mr, setMr] = useState('')
  const [fw, setFw] = useState('')
  const [qt, setQt] = useState('')
  const [bd, setBd] = useState('')
  const [vp, setVp] = useState('')
  const [ds, setDs] = useState('')
  const [bt, setBt] = useState('')
  const [ss, setSs] = useState('')
  const [cd, setCd] = useState('')
  
  const [indexResults, setIndexResults] = useState<IndexResult[]>([])
  const [factorResults, setFactorResults] = useState<FactorResult[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
    checkDarkMode()
    // Watch for changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    return () => observer.disconnect()
  }, [])

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedVr = localStorage.getItem('vci_vrSS')
    const savedMr = localStorage.getItem('mr_mrSS')
    const savedFw = localStorage.getItem('fw_fwSS')
    const savedQt = localStorage.getItem('qri_qtSS')
    const savedBd = localStorage.getItem('vsi_bdSS')
    const savedVp = localStorage.getItem('vsi_vpSS')
    const savedDs = localStorage.getItem('ds_dsSS')
    const savedBt = localStorage.getItem('bt_btSS')
    const savedSs = localStorage.getItem('ss_scaledScore')
    const savedCd = localStorage.getItem('cd_cdSS')

    setVr(savedVr || '14')
    setMr(savedMr || '11')
    setFw(savedFw || '10')
    setQt(savedQt || '12')
    setBd(savedBd || '11')
    setVp(savedVp || '11')
    setDs(savedDs || '10')
    setBt(savedBt || '10')
    setSs(savedSs || '10')
    setCd(savedCd || '10')
  }, [])

  const calculateRange = (score: number, r: number): string => {
    const lower_bound = Math.round(100 + (score - 100) * r - (15 * Math.pow(1 - r, 0.5)) * 1.96)
    const upper_bound = Math.round(100 + (score - 100) * r + (15 * Math.pow(1 - r, 0.5)) * 1.96)
    return `${lower_bound} - ${upper_bound}`
  }

  const handleCalculate = () => {
    // Parse values (sliders always have values, so no need to check for empty)
    const vrVal = parseInt(vr)
    const mrVal = parseInt(mr)
    const fwVal = parseInt(fw)
    const qtVal = parseInt(qt)
    const bdVal = parseInt(bd)
    const vpVal = parseInt(vp)
    const dsVal = parseInt(ds)
    const btVal = parseInt(bt)
    const ssVal = parseInt(ss)
    const cdVal = parseInt(cd)

    // Validate inputs
    const values = [
      { val: vrVal, name: 'VR', max: 22, min: 4 },
      { val: mrVal, name: 'MR', max: 19, min: 2 },
      { val: fwVal, name: 'FW', max: 22, min: 1 },
      { val: qtVal, name: 'QT', max: 24, min: 2 },
      { val: bdVal, name: 'BD', max: 22, min: 3 },
      { val: vpVal, name: 'VP', max: 23, min: 2 },
      { val: dsVal, name: 'DS', max: 22, min: 1 },
      { val: btVal, name: 'BT', max: 22, min: 1 },
      { val: ssVal, name: 'SS', max: 19, min: 1 },
      { val: cdVal, name: 'CD', max: 19, min: 1 },
    ]

    // Check if values are valid
    for (const item of values) {
      if (isNaN(item.val)) {
        alert(`Please enter a valid number for ${item.name}`)
        return
      }
      if (item.val > item.max || item.val < item.min) {
        alert(`Please enter a valid input for ${item.name}`)
        return
      }
    }

    // Calculate indexes
    const vciScore = Math.round((vrVal * 5) + 50)
    const friScore = Math.round(((mrVal + fwVal) * 2.887) + 42.26)
    const qriScore = Math.round((qtVal * 5) + 50)
    const vsiScore = Math.round(((bdVal + vpVal) * 2.782) + 44.36)
    const wmiScore = Math.round(((dsVal + btVal) * 2.911) + 41.78)
    const psiScore = Math.round(((ssVal + cdVal) * 2.757) + 44.86)
    const fsiqScore = Math.round(((2 * vrVal + mrVal + fwVal + 2 * qtVal + bdVal + vpVal + dsVal + btVal + ssVal + cdVal) * 0.566) + 32.08)
    const cfiScore = Math.round(((mrVal + fwVal + bdVal + vpVal + dsVal + btVal + ssVal + cdVal) * 0.915) + 26.8)
    const gaiScore = Math.round(((2 * vrVal + mrVal + fwVal + 2 * qtVal + bdVal + vpVal) * 0.776) + 37.92)
    const cpiScore = Math.round(((dsVal + btVal + ssVal + cdVal) * 1.679) + 32.84)

    const newIndexResults: IndexResult[] = [
      { index: 'VCI', score: vciScore, ci: calculateRange(vciScore, 0.92) },
      { index: 'FRI', score: friScore, ci: calculateRange(friScore, 0.887) },
      { index: 'QRI', score: qriScore, ci: calculateRange(qriScore, 0.91) },
      { index: 'VSI', score: vsiScore, ci: calculateRange(vsiScore, 0.898) },
      { index: 'WMI', score: wmiScore, ci: calculateRange(wmiScore, 0.929) },
      { index: 'PSI', score: psiScore, ci: calculateRange(psiScore, 0.9) },
      { index: 'FSIQ', score: fsiqScore, ci: calculateRange(fsiqScore, 0.976) },
      { index: 'CFI', score: cfiScore, ci: calculateRange(cfiScore, 0.959) },
      { index: 'GAI', score: gaiScore, ci: calculateRange(gaiScore, 0.967) },
      { index: 'CPI', score: cpiScore, ci: calculateRange(cpiScore, 0.939) },
    ]
    setIndexResults(newIndexResults)

    // Calculate factors
    const g = 2.019 * vrVal + 0.636 * mrVal + 0.346 * fwVal + 1.193 * qtVal + 
              0.131 * bdVal + 0.426 * vpVal + 0.482 * dsVal + 0.215 * btVal + 
              0.189 * ssVal + 0.285 * cdVal + 40.77
    const gc = 3.723 * vrVal + 0.271 * mrVal + 0.148 * fwVal + 0.508 * qtVal + 
               0.056 * bdVal + 0.181 * vpVal + 0.206 * dsVal + 0.092 * btVal + 
               0.08 * ssVal + 0.121 * cdVal + 46.14
    const gf = 1.477 * vrVal + 0.909 * mrVal + 0.495 * fwVal + 1.705 * qtVal + 
               0.096 * bdVal + 0.312 * vpVal + 0.353 * dsVal + 0.157 * btVal + 
               0.138 * ssVal + 0.208 * cdVal + 41.49
    const gv = 0.46 * vrVal + 0.145 * mrVal + 0.079 * fwVal + 0.272 * qtVal + 
               0.99 * bdVal + 3.217 * vpVal + 0.11 * dsVal + 0.049 * btVal + 
               0.043 * ssVal + 0.065 * cdVal + 45.7
    const gwm = 1.062 * vrVal + 0.335 * mrVal + 0.182 * fwVal + 0.627 * qtVal + 
                0.069 * bdVal + 0.224 * vpVal + 2.057 * dsVal + 0.918 * btVal + 
                0.099 * ssVal + 0.15 * cdVal + 42.78
    const gs = 0.462 * vrVal + 0.145 * mrVal + 0.079 * fwVal + 0.273 * qtVal + 
               0.03 * bdVal + 0.097 * vpVal + 0.11 * dsVal + 0.049 * btVal + 
               1.684 * ssVal + 2.541 * cdVal + 45.29

    const newFactorResults: FactorResult[] = [
      { factor: 'ĝ', score: Math.round(g), ci: `${Math.round(g - 29.4 * Math.pow(1 - Math.pow(0.955, 2), 0.5))} - ${Math.round(g + 29.4 * Math.pow(1 - Math.pow(0.955, 2), 0.5))}` },
      { factor: 'Ĝc', score: Math.round(gc), ci: `${Math.round(gc - 29.4 * Math.pow(1 - Math.pow(0.965, 2), 0.5))} - ${Math.round(gc + 29.4 * Math.pow(1 - Math.pow(0.965, 2), 0.5))}` },
      { factor: 'Ĝf', score: Math.round(gf), ci: `${Math.round(gf - 29.4 * Math.pow(1 - Math.pow(0.953, 2), 0.5))} - ${Math.round(gf + 29.4 * Math.pow(1 - Math.pow(0.953, 2), 0.5))}` },
      { factor: 'Ĝv', score: Math.round(gv), ci: `${Math.round(gv - 29.4 * Math.pow(1 - Math.pow(0.922, 2), 0.5))} - ${Math.round(gv + 29.4 * Math.pow(1 - Math.pow(0.922, 2), 0.5))}` },
      { factor: 'Ĝwm', score: Math.round(gwm), ci: `${Math.round(gwm - 29.4 * Math.pow(1 - Math.pow(0.897, 2), 0.5))} - ${Math.round(gwm + 29.4 * Math.pow(1 - Math.pow(0.897, 2), 0.5))}` },
      { factor: 'Ĝs', score: Math.round(gs), ci: `${Math.round(gs - 29.4 * Math.pow(1 - Math.pow(0.907, 2), 0.5))} - ${Math.round(gs + 29.4 * Math.pow(1 - Math.pow(0.907, 2), 0.5))}` },
    ]
    setFactorResults(newFactorResults)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          S-C ULTRA IQ Indexer
        </h1>

        {/* Input Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Enter SS Scores</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-6 border-r border-gray-300 dark:border-gray-700 pr-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">VR</span>
                <input
                  type="range"
                  min="4"
                  max="22"
                  value={vr || '14'}
                  onChange={(e) => setVr(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{vr || '14'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">FW</span>
                <input
                  type="range"
                  min="1"
                  max="22"
                  value={fw || '10'}
                  onChange={(e) => setFw(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{fw || '10'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">BD</span>
                <input
                  type="range"
                  min="3"
                  max="22"
                  value={bd || '11'}
                  onChange={(e) => setBd(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{bd || '11'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">DS</span>
                <input
                  type="range"
                  min="1"
                  max="22"
                  value={ds || '10'}
                  onChange={(e) => setDs(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{ds || '10'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">SS</span>
                <input
                  type="range"
                  min="1"
                  max="19"
                  value={ss || '10'}
                  onChange={(e) => setSs(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{ss || '10'}</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">MR</span>
                <input
                  type="range"
                  min="2"
                  max="19"
                  value={mr || '11'}
                  onChange={(e) => setMr(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{mr || '11'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">QT</span>
                <input
                  type="range"
                  min="2"
                  max="24"
                  value={qt || '12'}
                  onChange={(e) => setQt(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{qt || '12'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">VP</span>
                <input
                  type="range"
                  min="2"
                  max="23"
                  value={vp || '11'}
                  onChange={(e) => setVp(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{vp || '11'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">BT</span>
                <input
                  type="range"
                  min="1"
                  max="22"
                  value={bt || '10'}
                  onChange={(e) => setBt(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{bt || '10'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8">CD</span>
                <input
                  type="range"
                  min="1"
                  max="19"
                  value={cd || '10'}
                  onChange={(e) => setCd(e.target.value)}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">{cd || '10'}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
          >
            Calculate Scores
          </button>
        </section>

        {/* Results Section */}
        {indexResults.length > 0 && (
          <>
            {/* Charts Section */}
            <section className="mb-8 grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Cognitive Profile</h3>
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart
                    data={indexResults.map((r, i) => ({
                      name: r.index,
                      score: r.score,
                      color: i < 6 ? '#3b82f6' : '#1e40af'
                    }))}
                    margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      tick={{ fill: isDarkMode ? '#f3f4f6' : '#111827', fontSize: 12 }}
                      interval={0}
                    />
                    <YAxis
                      domain={[40, 175]}
                      ticks={[40, 55, 70, 85, 100, 115, 130, 145, 160, 175]}
                      tick={{ fill: isDarkMode ? '#f3f4f6' : '#111827', fontSize: 12 }}
                      label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: isDarkMode ? '#f3f4f6' : '#111827' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        color: isDarkMode ? '#f3f4f6' : '#111827'
                      }}
                      cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    />
                    <Bar
                      dataKey="score"
                      radius={[8, 8, 0, 0]}
                      animationDuration={800}
                    >
                      {indexResults.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index < 6 ? '#3b82f6' : '#1e40af'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Latent Profile</h3>
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart
                    data={factorResults.map((r, i) => ({
                      name: r.factor,
                      score: r.score,
                      color: i === 0 ? '#dc2626' : '#16a34a'
                    }))}
                    margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      tick={{ fill: isDarkMode ? '#f3f4f6' : '#111827', fontSize: 12 }}
                      interval={0}
                    />
                    <YAxis
                      domain={[40, 175]}
                      ticks={[40, 55, 70, 85, 100, 115, 130, 145, 160, 175]}
                      tick={{ fill: isDarkMode ? '#f3f4f6' : '#111827', fontSize: 12 }}
                      label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: isDarkMode ? '#f3f4f6' : '#111827' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        color: isDarkMode ? '#f3f4f6' : '#111827'
                      }}
                      cursor={{ fill: 'rgba(22, 163, 74, 0.1)' }}
                    />
                    <Bar
                      dataKey="score"
                      radius={[8, 8, 0, 0]}
                      animationDuration={800}
                    >
                      {factorResults.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#dc2626' : '#16a34a'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Index Results */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Index Results</h2>
                  <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700">
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Index</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Score</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">CI</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {indexResults.map((result, index) => (
                          <tr key={index} className={`transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${index < 6 ? 'bg-blue-50/50 dark:bg-blue-900/10' : 'bg-white dark:bg-gray-800'}`}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-100">{result.index}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{result.score}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{result.ci}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Latent Factor Results */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Latent Factor Results</h2>
                  <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700">
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Factor</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Score</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">CI</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {factorResults.map((result, index) => (
                          <tr key={index} className={`transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${index === 0 ? 'bg-red-50/50 dark:bg-red-900/10' : 'bg-green-50/50 dark:bg-green-900/10'}`}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-100">{result.factor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{result.score}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{result.ci}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
