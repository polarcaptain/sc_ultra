import Link from 'next/link'

export default function WMIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="material-symbols-outlined mr-3 text-3xl">history</span>
          Working Memory Index
        </h1>

        {/* Instructions Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Instructions</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              CAIT Digit Span (DS) is a test that lasts several minutes and covers 3 different sections in the test. The first one is "forwards", where they say a sequence of numbers and you type in that sequence in the order you heard it (Them: "312" You: "312"). The next section is called "backwards", where they say a sequence of numbers and you type in the sequence except in the opposite order you heard it (Them: "312" You: "213"). The last section is called "sequencing", where they once again say a sequence of numbers and you type in the sequence in order of smallest number to biggest number (Them: "312" You: "123"). The test is age adjusted so remember to input your age.
            </p>
            <p>
              eCorsi Block Tapping (CBT) is a test that lasts several minutes. There are two portions of the test, Forward and Backward. There are 9 blocks which will light up in a sequence. If you are taking the Forward section, you will click the blocks in order. If you are in the backwards section, you will click the blocks in reverse order. If you get the sequence correct the test will add another item to the sequence. The tests go for as long as you don't fail a certain level twice.
            </p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold mb-2">DS</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Several minutes</li>
                <li>3 sections</li>
                <li>Age adjusted</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">CBT</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Several minutes</li>
                <li>2 sections</li>
                <li>2 tries each level</li>
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
              href="/wmi/DS"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Digit Span (DS)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
            <Link 
              href="/wmi/BT"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              eCorsi Block Tapping (BT)
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Note Section */}
        <section className="mb-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Please save your DS and BT SS scores, this is important for later
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
