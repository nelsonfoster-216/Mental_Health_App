import React from 'react';

const MentalHealthResources = () => {
  return (
    <section className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Mental Health Support Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Crisis Support</h3>
              <ul className="space-y-3">
                <li>
                  <strong>988 Suicide & Crisis Lifeline:</strong>
                  <div><a href="tel:988" className="text-blue-600 hover:underline">Dial 988</a></div>
                  <div className="text-sm text-gray-600">Call or text 988 for 24/7 support</div>
                </li>
                <li>
                  <strong>Crisis Text Line:</strong>
                  <div>Text <span className="font-medium">HOME</span> to <span className="font-medium">741741</span></div>
                  <div className="text-sm text-gray-600">Available 24/7 for any type of crisis</div>
                </li>
                <li>
                  <strong>SAMHSA's National Helpline:</strong>
                  <div><a href="tel:1-800-662-4357" className="text-blue-600 hover:underline">1-800-662-HELP (4357)</a></div>
                  <div className="text-sm text-gray-600">Treatment referral service (24/7)</div>
                </li>
                <li>
                  <strong>Veterans Crisis Line:</strong>
                  <div>Dial <a href="tel:988" className="text-blue-600 hover:underline">988</a> then press 1, or text <span className="font-medium">838255</span></div>
                  <div className="text-sm text-gray-600">Support for veterans and their loved ones</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Find Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://findtreatment.samhsa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    SAMHSA Treatment Locator
                  </a>
                  <div className="text-sm text-gray-600">Find treatment facilities near you</div>
                </li>
                <li>
                  <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Psychology Today Therapist Directory
                  </a>
                  <div className="text-sm text-gray-600">Search for therapists by specialty and location</div>
                </li>
                <li>
                  <a href="https://www.nami.org/findsupport" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    NAMI Support Groups
                  </a>
                  <div className="text-sm text-gray-600">Free peer-led support groups nationwide</div>
                </li>
                <li>
                  <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    988 Lifeline Resources
                  </a>
                  <div className="text-sm text-gray-600">Additional resources for various concerns</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Digital Mental Health Tools</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.headspace.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Headspace
                  </a>
                  <div className="text-sm text-gray-600">Meditation and mindfulness app</div>
                </li>
                <li>
                  <a href="https://www.calm.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Calm
                  </a>
                  <div className="text-sm text-gray-600">Sleep, meditation and relaxation app</div>
                </li>
                <li>
                  <a href="https://www.woebot.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Woebot
                  </a>
                  <div className="text-sm text-gray-600">AI-based cognitive behavioral therapy chatbot</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Educational Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.nimh.nih.gov/health" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    National Institute of Mental Health
                  </a>
                  <div className="text-sm text-gray-600">Evidence-based information on mental health</div>
                </li>
                <li>
                  <a href="https://www.nami.org/Learn-More" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    NAMI Learning Center
                  </a>
                  <div className="text-sm text-gray-600">Education on mental health conditions</div>
                </li>
                <li>
                  <a href="https://mhanational.org/mental-health-resources" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    Mental Health America
                  </a>
                  <div className="text-sm text-gray-600">Screening tools and resources</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
            <p className="font-medium">Remember: Seeking help is a sign of strength, not weakness. If you're struggling, please reach out using one of these resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResources; 