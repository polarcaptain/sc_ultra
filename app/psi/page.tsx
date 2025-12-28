import Link from 'next/link'

export default function PSIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="material-symbols-outlined mr-3 text-3xl">rocket_launch</span>
          Processing Speed Index
        </h1>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              CAIT Symbol Search (SS) is a test that lasts several minutes. It gives the examinee 2 symbols, and asks the examinee to review 5 other symbols. If one of the 2 given symbols is among the 5 other symbols, then the examinee should click that symbol, if not, then the examinee should click "no". Wrong answers subtract 1 point from your total score.
            </p>
            <p>
              Coding (CD) is a test that consists of 135 empty boxes with a number inscribed in a box above. Each number has a matching symbol which is shown on the very top of the Coding form. The goal of the Coding test is for the examinee to write the corresponding symbol in the empty boxes based on the given number above the box. The examinee has 120 seconds to fill in as many boxes as possible. Once the 120 seconds have passed the examinee should stop immediately. Each box that is filled with the correct symbol is awarded 1 point with the entire test having a maximum of 135 points. Symbols do not need to be perfectly drawn but should be identifiable. Do not include the sample problems in your score. You will need a pencil, a stopwatch, and the coding form (provided in the Test section). A proctor is preferred but not necessary. You should study the example image at the top of the coding document to further understand the rules. You should also fill out the "demo" and "sample" sections of the coding form as practice. Do not study the number-symbol relationships, this is a test of motor skills and reaction, not of memorization. Do not study the actual testing form except the "demo" and "sample". NO PEEKING.
            </p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold mb-2">SS</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Lasts several minutes</li>
                <li>Age adjusted</li>
                <li>Incorrect answers penalized</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">CD</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Lasts 120 seconds</li>
                <li>135 items</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tests Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Test</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">Take the tests below:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/psi/SS"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Symbol Search (SS)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
            <Link 
              href="/psi/CD"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Coding (CD)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Note Section */}
        <section className="mb-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Please save your SS and CD SS scores, this is important for later
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
