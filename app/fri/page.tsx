import Link from 'next/link'

export default function FRIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="material-symbols-outlined mr-3 text-3xl">tactic</span>
          Fluid Reasoning Index
        </h1>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The CAIT Figure Weights (FW) is a test that lasts 12 minutes and has 26 questions. The premise of the test is to assign shapes certain values by observing the relationships between all the shapes. In the end there will be a scale with one side complete and the other side missing. The goal is to pick the answer with an equivalent value as the complete side of the scale. To convert it from the IQ score you get at the end to SS, divide the IQ by 5, then subtract 10.
            </p>
            <p>
              The Raven Advanced Progressive Matrices set II (RAPM) is a 40 minute, 36 question timed test. The premise of the test is to pick one of the answers based on your observations of different patterns of the given picture. There are no instructions to each question because it is a test of abstract reasoning. Before you begin the test, get a blank piece of paper and write numbers 1 through 36. Use this paper to keep track of your answers.
            </p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold mb-2">FW</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>12 minutes</li>
                <li>26 questions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">RAPM</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>40 minutes</li>
                <li>36 questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tests Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Tests</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the tests below:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/fri/FW"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Figure Weights (FW)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
            <Link 
              href="/fri/MR"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Raven's Advanced Progressive Matrices (MR)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Note Section */}
        <section className="mb-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Please save your FW and MR SS scores, this is important for later
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
