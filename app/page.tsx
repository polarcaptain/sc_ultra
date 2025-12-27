import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SC Ultra
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Advanced Intelligence Assessment
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Challenge your cognitive abilities with our comprehensive IQ test. 
            Experience a sophisticated evaluation designed to measure your intelligence accurately.
          </p>
          
          <Link 
            href="/test"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Begin Test
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Accurate Assessment</h3>
            <p className="text-gray-600">
              Scientifically designed questions that provide reliable intelligence measurements.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Results</h3>
            <p className="text-gray-600">
              Get your IQ score and detailed analysis immediately after completing the test.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Detailed Insights</h3>
            <p className="text-gray-600">
              Receive comprehensive feedback on your performance across different cognitive domains.
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="max-w-3xl mx-auto mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Test Instructions</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span>The test consists of multiple-choice questions designed to assess various cognitive abilities.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span>You will have a set amount of time to complete the assessment. Please answer to the best of your ability.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span>Read each question carefully before selecting your answer. There are no trick questions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <span>Your results will be displayed immediately upon completion of the test.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
