export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <section className="border-b border-gray-200 dark:border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">S-C Ultra</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Why is the g loading so high?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The composite effect means that the more tests you composite, the more the g loading goes up (goes up in relation to the individual g loadings of the tests). Theoretically, you could take an infinite amount of IQ tests and as you composite them, the g loading would approach 1 (this isn't the case in reality however). Now this, combine the good quality and comprehensive nature of the actual tests, means the resulting g loading is high. Remember, SC-ULTRA is around 4.5 hours of testing time while professional tests of similar g loading take only a fraction of the time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">If quantitative reasoning is apart of Fluid Reasoning in CHC theory, then why is it its own index?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  S-C ULTRA does it because the Indexer does it. The Indexer does it because it draws inspiration from SB-V and WISC-V. Why do those tests do it? Probably because they have formed their own theories on g based on but not exactly CHC theory. Personally I think RQ is different enough from RG and I to warrant a different index. Not only is there a slight loading on gq but since SC-ULTRA uses SMART, its not culture fair like RAPM or CAIT FW.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Why was the Compositator removed?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Because the creator of the Compositator has improved on his past work and made an improved derivative, the Indexer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Why has the FSIQ g loading been decreasing?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  New iterations of the testing model prioritizes correlation with g, not FSIQ.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Potential future improvements:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Validation and addition of the PAT</li>
                  <li>Validation of CAIT Symbol Search & Digit Span</li>
                  <li>Better eCBT and RAPM set II norms</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg">
              <p className="text-gray-900 dark:text-gray-100 font-semibold mb-2">
                For a more general FAQ on IQ, check out the CognitiveMetrics wiki:
              </p>
              <a 
                href="https://cognitivemetrics.com/wiki/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                Psychometrics & IQ Wiki
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}