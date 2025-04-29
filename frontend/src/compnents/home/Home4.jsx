import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home4 = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('tokenUser');
  
  const handleExploreClick = () => {
    if (user) {
      navigate(`/${user}/crashoutcycle`);
    } else {
      navigate('/demo/crashoutcycle');
    }
  };
  
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The KOI Cycle: Understanding Your Mental States</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <div className="relative w-56 h-56 mx-auto bg-gray-100 rounded-full border-4 border-gray-300 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full" style={{ 
                  background: 'conic-gradient(#FF6384 0%, #36A2EB 50%, #FF6384 100%)',
                  clipPath: 'circle(50% at 50% 50%)'
                }}></div>
                
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 font-bold">
                  <div className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                    CRASH OUT
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 font-bold">
                  <div className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                    LOCK IN
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">What is the KOI Cycle?</h3>
              <p className="text-gray-700 mb-2">
                The KOI (Krash Out Index) Cycle represents the natural oscillation between two mental states that many people experience:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-gray-700">
                <li><strong>CRASH OUT</strong>: A state of mental exhaustion, overwhelm, or burnout where focus and productivity become difficult, and the likelihood of acting impulsively without considering the consequences becomes high.</li>
                <li><strong>LOCK IN</strong>: A state of heightened focus, productivity, and mental clarity where tasks flow more easily. In this state, motivation is intrinsic, energy levels are balanced, and there's a natural resistance to impulsive or short-term gratification seeking behaviors.</li>
              </ul>
              <p className="text-gray-700 mb-3">
                Understanding and tracking your position in this cycle can help you manage your mental health, plan your activities accordingly, and develop strategies to navigate between these states more effectively.
              </p>
              <button 
                onClick={handleExploreClick}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Your KOI Cycle
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-600">When You CRASH OUT</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Take time for rest and recovery</li>
                <li>Reduce your commitments and expectations</li>
                <li>Focus on gentle self-care activities</li>
                <li>Notice without judgment what triggered this state</li>
                <li>Remember it's a temporary part of your cycle</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">When You LOCK IN</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Tackle your most challenging or important tasks</li>
                <li>Set clear boundaries to protect this productive state</li>
                <li>Take advantage of your focus while respecting your limits</li>
                <li>Notice what helps you maintain this state</li>
                <li>Be present with the experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4; 