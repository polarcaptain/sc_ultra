export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Testing Concepts</h1>
        
        <div className="space-y-8">
          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">G factor</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In psychology, general intelligence is known simply as "g factor" (colloquially called "g"). G factor was a concept Charles Spearman pioneered by observing the performance of students across different subjects and concluding there must be an unobservable factor influencing the correlations between their performances. He would go on to develop many theories on the g factor. And throughout the years, decades and centuries, more theories and concepts would be formed. Today, the g factor is a well researched topic and the many contributions to the topic allow us to understand many things about intelligence.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">IQ</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Intelligence Quotient (IQ) is a scale based on statistics that represents the degree of giftedness a person has in relation to the g factor.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">g Loading</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              g loading is the effect of g factor on a given variable. It runs on a scale from 0-1. If that variable is a test then a g loading that is close to 1 means the test is a good measure of g factor. A test with g loading of 0.7 or above signifies a strong relation with g factor and is considered a good IQ test.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Normal distribution and standard deviation</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In statistics, normal distribution (colloquially called "bell curve") is a type of distribution that describes the probability of certain factors. The important part of normal distribution is that the mean is in the middle of the distribution and the standard deviation is the amount of variance present going a certain distance from the mean. The normal distribution can be in terms of percentile which is why IQ is derived from it. IQ generally has a mean of 100 and a standard deviation of 15.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Norms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The table that can convert a test's raw score into IQ is what is called norms. Since IQ is naturally a normal distribution, if you have a normative sample take an IQ test, there will naturally be a standard deviation. The norms use this standard deviation along with the normative sample's mean score and create norms.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Composite Score</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A composite score is simply the combined score of two different IQ tests.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Scaled Score</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Scaled score (ss) is a distribution with a different standard deviation and mean than IQ. It is used to make scoring tests easier.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Cronbach's Alpha</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cronbach's alphas is the measure of internal consistency and how closely related the items of a test or form are. Cronbach's alpha goes on a scale from 0-1 and anything above 0.7 is considered solid.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Indexes</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Index is the term used to describe a comprehensive IQ test's subscore which measures a specific aspect of intelligence.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">WAIS-IV</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Wechsler Adult Intelligence Scale 4th edition is the most modern of the Wechsler Adult IQ tests. The current edition was released in 2008. It has four indexes: VCI, PRI, WMI, and PSI. It is one of the best IQ and psychometric tests for adults and it boats a g loading of 0.92.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">SB-V</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Stanford-Binet Intelligence Scale 5th edition is the most modern of the Stanford-Binet IQ tests. The current edition was released in 2003. It has five indexes: FR, KN, QR, VS, and WM. Those indexes split into verbal and nonverbal subindexes. It boasts a g loading of 0.96.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">VCI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Verbal Comprehension Index measures an examinee's verbal reasoning system, word knowledge acquisition, information retrieval, ability to reason and solve verbal problems, and communication of knowledge.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">FRI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Fluid Reasoning Index measures an examinee's ability to detect the underlying conceptual relationship among visual objects and use reasoning to identify and apply rules, use inductive and quantitative reasoning, broad visual intelligence, simultaneous processing, and abstract thinking.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">QRI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Quantitative Intelligence index/Quantitative Reasoning Index measures an examinee's capacity to perform mental math operations and to understand quantitative and abstract relationships.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">VSI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Visual Spatial Index measures an examinee's capacity to apply spatial reasoning and analyze visual details.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">WMI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Working Memory Index measures an examinee's ability to identify visual and auditory information, maintain it in temporary storage, and resequence it for use in problem solving.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">PSI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Processing Speed Index measures an examinee's ability to rapidly identify visual information, to make quick and accurate decisions, and to rapidly implement those decisions.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">CPI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cognitive Proficiency Index is a composite of WMI and PSI and it indicates the extent of cognitive efficiency for manipulating and rapidly processing information.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">GAI</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              General Ability Index is a composite of non CPI indexes that provides an estimate of general intelligence that is less impacted by working memory and processing speed, relative to the FSIQ.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">FSIQ</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full Scale Intelligence Quotient is a composite of all indexes and is the best representation of the g factor for most individuals because it draws from many facets of intelligence.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Practice Effect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The practice effect (colloquially called "praffe") is when the score of an examinee is erroneously inflated due to taking the same test twice. The effect decreases the longer you wait to take the same test again
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Carry Over Effect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The carry over effect occurs when you take a test with similar properties or test items as another, therefore you have exposure to certain practicing or pre registered reasonings that the normative sample of another test did not. This can erroneously inflate the score of an examinee.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">The Ceiling Effect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The ceiling effect is when the max score on a test is lower than ideal and as a result, it cannot properly distinguish between people who score close to the max score.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">The Composite Effect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The composite effect is when you composite two scores together, and the resulting score is higher than the two scores that were composited. The reason behind this is because of statistics. If IQ represents a percentile, or the chance of getting a score in a given population, then getting two high scores should result in an even higher score (percentile/chance) than the individual chances. It's like flipping a coin, if you flip a coin the chances of getting heads is 50% but flip two coins and all of a sudden it's more rare (25%).
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Culture Fair</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A term used to describe tests that are not restructured by cultural or language barriers. Meaning anyone with rudimentary understanding of the English language can take it successfully and accurately.
            </p>
          </section>

          <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">g Score</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The most statistically accurate derivation of the g factor. A latent score estimate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">References</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <a href="https://en.wikipedia.org/wiki/G_factor_(psychometrics)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://en.wikipedia.org/wiki/G_factor_(psychometrics)
                </a>
              </li>
              <li>
                <a href="https://ouzhang.me/slides/g-loading/G_loading_slides.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://ouzhang.me/slides/g-loading/G_loading_slides.pdf
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Normal_distribution" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://en.wikipedia.org/wiki/Normal_distribution
                </a>
              </li>
              <li>
                <a href="https://stats.oarc.ucla.edu/spss/faq/what-does-cronbachs-alpha-mean/#:~:text=Cronbach's%20alpha%20is%20a%20measure,that%20the%20measure%20is%20unidimensional" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://stats.oarc.ucla.edu/spss/faq/what-does-cronbachs-alpha-mean/#:~:text=Cronbach's%20alpha%20is%20a%20measure,that%20the%20measure%20is%20unidimensional
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Wechsler_Adult_Intelligence_Scale" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://en.wikipedia.org/wiki/Wechsler_Adult_Intelligence_Scale
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/cognitiveTesting/comments/146fmpr/comprehensive_online_resources_list/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://www.reddit.com/r/cognitiveTesting/comments/146fmpr/comprehensive_online_resources_list/
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Stanford%E2%80%93Binet_Intelligence_Scales" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://en.wikipedia.org/wiki/Stanford%E2%80%93Binet_Intelligence_Scales
                </a>
              </li>
              <li>
                <a href="https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/wisc-v/wisc-v-interpretive-report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/wisc-v/wisc-v-interpretive-report.pdf
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}