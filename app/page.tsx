import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Welcome to the <span className="whitespace-nowrap">S-C Ultra</span>
        </h1>

        {/* Description Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            S-C ULTRA is a test guide that seeks to produce an accurate estimate of IQ across several different facets of <strong>g</strong> (general intelligence). This is accomplished by using several tests to obtain scores across all relevant facets of g factor (Gc, Gf, Gq, Gv, Gsm, Gs, etc) and using the most comprehensive and free test choices out there.
          </p>
        </section>

        {/* How to take S-C ULTRA Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            How to take S-C ULTRA
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            On the left sidebar, you will find pages that guide you through taking tests to satisfy six major CHC indices (Verbal Comprehension Index, Fluid Reasoning Index, Visual Spatial Index, Quantitative Reasoning Index, Working Memory Index, and Processing Speed Index). After taking all the tests on each page, you can index your scores on the IQ indexer page at the top of the sidebar.
          </p>
        </section>

        {/* Test Guidelines Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            Test Guidelines
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>It is suggested to first read the Test Concepts before beginning the test portion of the document.</li>
            <li>If you are in an environment that is distracting, if you are tired, or if you are experiencing extraneous circumstances that may hinder your cognitive performance, it is strongly suggested you refrain from taking any IQ test until you are in a situation where you can perform at your best. The reason is because an examinee's score may be lower than it should be or an examinee may feel distraught knowing their score could have (but not necessarily) been higher.</li>
            <li>If you have taken one or more of the tests in S-C ULTRA you should use your previous score and not take the test again (remember norms may have been updated since your first test take). The reason being the practice effect can increase your score beyond what it should be.</li>
            <li>The minimum age for S-C ULTRA is 16 and the maximum is 91. Although even then, ideally your age would be among the young adult category.</li>
            <li>The S-C ULTRA's comprehensive nature means it's long (about 4.5 hours of test time). Therefore it is not expected that an examinee finishes every test in one or even several days.</li>
            <li>Once you begin one of the tests in S-C ULTRA you must finish it and cannot pause or leave the test.</li>
            <li>Before taking a test, you should take time to understand the instructions thoroughly and move to a proper environment. You should not be practicing for the test, you shouldn't study the actual testing contents, or trying to gain any sort of edge on the test.</li>
            <li>Note the maximum possible score is <strong>FSIQ:175, GAI:176, CPI:159, CFI: 174</strong></li>
          </ol>
        </section>

        {/* Additional Notes Section */}
        <section className="mb-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 pl-6 py-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Additional Notes
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This form is not a substitute for a professional test and should not be considered as relevant for psychological evaluation purposes. This form is not made by psychologists, psychometricians, statisticians, or any relevant professional. The validity of this test is not assured.
          </p>
        </section>

        {/* Non-native English Speakers Note */}
        <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Note to non-native English speakers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For non-native English speakers, since English isn't your first language, the VCI and QRI section cannot adequately examine your abilities. Therefore, complete every section in S-C ULTRA except VCI and QRI. At the end there will be a special scoring spreadsheet that calculates your S-C ULTRA: Culture Fair Composite (CFI). If you still wish to take the VCI and QRI sections, just know the resulting score isn't accurate to an extent.
          </p>
        </section>

        {/* Test Structure Section with Image */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            Test Structure
          </h2>
          <div className="mt-4">
            <Image
              src="/test-structure.jpg"
              alt="S-C Ultra Test Structure"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Acknowledgements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
            Acknowledgements
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>u/ParticleTyphoon</strong> (Publisher, Editor, everything else)</li>
            <li><strong>u/alainece</strong> (Editor)</li>
            <li><strong>u/BubblyClub2196</strong> (S-C ULTRA: Indexer, Big-ass "g" estimator, testing structure, CAIT factor analysis, 1980 SAT norms, vault of knowledge)</li>
            <li><strong>u/EqusB</strong> (CAIT, 1980 SAT release)</li>
            <li><strong>u/soapyarm</strong> (SMART)</li>
            <li><strong>u/TrulyBalancedTree</strong> (eCorsi Block Tapping release)</li>
            <li><strong>u/PolarCaptain</strong> (CAIT factor analysis, automation)</li>
          </ul>
        </section>
      </div>
    </main>
  )
}