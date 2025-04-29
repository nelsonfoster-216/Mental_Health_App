import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../navbar/Navbar';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const CrashOutCycle = () => {
  const [currentState, setCurrentState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cycleLogs, setCycleLogs] = useState([]);
  const [intensity, setIntensity] = useState(5); // Default intensity (1-10)
  const [notes, setNotes] = useState('');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  
  const username = localStorage.getItem('tokenUser') || 'demo-user';
  
  useEffect(() => {
    // Load data from localStorage instead of API
    const savedLogs = localStorage.getItem(`cycleLogs-${username}`);
    if (savedLogs) {
      setCycleLogs(JSON.parse(savedLogs));
    }
  }, [username]);

  const openStateModal = (state) => {
    setCurrentState(state);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    const newLog = {
      id: Date.now().toString(), // Simple unique ID
      username,
      state: currentState,
      intensity,
      notes,
      timestamp: new Date().toISOString()
    };
    
    // Update state and localStorage
    const updatedLogs = [...cycleLogs, newLog];
    setCycleLogs(updatedLogs);
    localStorage.setItem(`cycleLogs-${username}`, JSON.stringify(updatedLogs));
    
    // Reset form
    setIsModalOpen(false);
    setNotes('');
    setIntensity(5);
  };

  const handleReset = () => {
    // Clear all logs
    setCycleLogs([]);
    localStorage.removeItem(`cycleLogs-${username}`);
    setIsResetModalOpen(false);
  };

  // Calculate stats for the chart
  const crashOutCount = cycleLogs.filter(log => log.state === 'CRASH OUT').length;
  const lockInCount = cycleLogs.filter(log => log.state === 'LOCK IN').length;
  
  // Calculate percentages and KOI index
  const totalEntries = crashOutCount + lockInCount;
  const crashOutPercentage = totalEntries > 0 ? Math.round((crashOutCount / totalEntries) * 100) : 0;
  const lockInPercentage = totalEntries > 0 ? Math.round((lockInCount / totalEntries) * 100) : 0;
  const koiIndex = totalEntries > 0 ? Math.round(crashOutPercentage / 10) : 0;
  
  const chartData = {
    labels: [`CRASH OUT (${crashOutPercentage}%)`, `LOCK IN (${lockInPercentage}%)`],
    datasets: [
      {
        data: [crashOutCount, lockInCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384DD', '#36A2EBDD'],
        borderWidth: 1,
      },
    ],
  };

  // Get recent logs (last 5)
  const recentLogs = [...cycleLogs].sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  ).slice(0, 5);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 mt-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg border border-gray-400" style={{ maxWidth: '840px', marginTop: '100px' }}>
        <h1 className="text-3xl font-bold text-center mb-8">KOI Cycle Tracker</h1>
        
        {/* Instructions Box */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">How to Navigate Your Mental Rollercoaster</h3>
          <p className="text-gray-700 mb-3">
            Welcome to your personal KOI (Krash Out Index) Cycle Tracker! This magical tool helps you document your oscillation between two critical mental states:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-red-50 p-3 rounded-md">
              <h4 className="font-bold text-red-700">CRASH OUT MODE:</h4>
              <p className="text-gray-700">When you're experiencing:</p>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                <li>Doomscrolling until 3 AM</li>
                <li>Advanced couch-rot syndrome</li>
                <li>Saying "just one more episode" (15 times)</li>
                <li>Forgetting what day it is</li>
                <li>Using pizza boxes as temporary furniture</li>
                <li>Acting impulsively without considering consequences</li>
                <li>Getting irate with the guy at chipotle for running out of guac</li>
                <li>Screaming into the night</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <h4 className="font-bold text-blue-700">LOCK IN MODE:</h4>
              <p className="text-gray-700">When you're experiencing:</p>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                <li>Waking up before your alarm (and liking it)</li>
                <li>Meditation that doesn't end in a nap</li>
                <li>To-do lists that actually get done</li>
                <li>Meal prep that isn't just microwave burritos</li>
                <li>Journaling profound thoughts (not just grocery lists)</li>
                <li>Responding to emails without first scrolling social media for an hour</li>
                <li>Remembering to call your mom before she texts 'Are you alive?'</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 italic">
            <span className="font-semibold">How to use:</span> Click on either CRASH OUT or LOCK IN button depending on your current state, rate the intensity (1-10), add optional notes about what triggered it, and click Save. Use Reset Data when you want a fresh start. Your entries will appear in the Recent Logs section!
          </p>
        </div>
        
        {/* Reset Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsResetModalOpen(true)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Data
          </button>
        </div>
        
        {/* Cycle Visual */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 bg-gray-100 rounded-full border-4 border-gray-300 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ 
              background: 'conic-gradient(#FF6384 0%, #36A2EB 50%, #FF6384 100%)',
              clipPath: 'circle(50% at 50% 50%)'
            }}></div>
            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 font-bold">
              <button 
                onClick={() => openStateModal('CRASH OUT')}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                CRASH OUT
              </button>
            </div>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 font-bold">
              <button 
                onClick={() => openStateModal('LOCK IN')}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                LOCK IN
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats/Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Your Cycle Stats</h2>
            <div className="w-full h-64">
              <Doughnut 
                data={chartData} 
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        font: {
                          size: 14
                        },
                        padding: 20
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          const label = context.label || '';
                          const value = context.raw || 0;
                          const percentage = totalEntries > 0 ? Math.round((value / totalEntries) * 100) : 0;
                          return `${label}: ${value} entries (${percentage}%)`;
                        }
                      }
                    }
                  }
                }} 
              />
            </div>
            {totalEntries > 0 && (
              <div className="mt-4 p-4 rounded-lg text-center border" style={{
                backgroundColor: crashOutPercentage <= 30 ? '#F0F9FF' : 
                                 crashOutPercentage <= 50 ? '#F3F4F6' : 
                                 `rgba(255, ${Math.max(220, 255 - (crashOutPercentage - 50) * 3)}, ${Math.max(220, 255 - (crashOutPercentage - 50) * 3)}, 0.2)`,
                borderColor: crashOutPercentage <= 30 ? '#93C5FD' : 
                            crashOutPercentage <= 50 ? '#D1D5DB' : 
                            `rgb(252, ${Math.max(165, 225 - (crashOutPercentage - 50) * 2)}, ${Math.max(165, 225 - (crashOutPercentage - 50) * 2)})`
              }}>
                <h3 className="text-lg font-semibold mb-2">Your KOI Index</h3>
                <div className="flex items-center justify-center">
                  <div 
                    className={`w-20 h-20 rounded-full flex items-center justify-center`}
                    style={{ 
                      backgroundColor: crashOutPercentage <= 30 ? '#DBEAFE' : 
                                      crashOutPercentage <= 50 ? '#E6F0FF' : 
                                      `rgba(255, ${Math.max(200, 255 - (crashOutPercentage - 50) * 5)}, ${Math.max(200, 255 - (crashOutPercentage - 50) * 5)}, 0.3)`,
                      borderWidth: '4px',
                      borderStyle: 'solid',
                      borderColor: crashOutPercentage <= 30 ? '#60A5FA' : 
                                  crashOutPercentage <= 50 ? '#3B82F6' : 
                                  `rgb(239, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)}, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)})`
                    }}
                  >
                    <p className="text-3xl font-bold" style={{ 
                      color: crashOutPercentage <= 30 ? '#2563EB' : 
                             crashOutPercentage <= 50 ? '#3B82F6' : 
                             `rgb(239, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)}, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)})`
                    }}>{koiIndex}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">
                  <span className="font-medium">Crash Out Rate: </span>
                  <span style={{ 
                    color: crashOutPercentage <= 30 ? '#2563EB' : 
                           crashOutPercentage <= 50 ? '#3B82F6' : 
                           `rgb(239, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)}, ${Math.max(68, 230 - (crashOutPercentage - 50) * 4)})`,
                    fontWeight: 'bold'
                  }}>{crashOutPercentage}%</span>
                </p>
                <p className="text-sm mt-2 italic" style={{ 
                  color: crashOutPercentage <= 30 ? '#4B5563' : 
                         crashOutPercentage <= 50 ? '#4B5563' : 
                         `rgb(220, ${Math.max(20, 100 - (crashOutPercentage - 50))}, ${Math.max(20, 100 - (crashOutPercentage - 50))})`
                }}>
                  {koiIndex > 7 ? 'High Crash Out tendency. Consider focusing on self-care.' : 
                   koiIndex > 3 ? 'Moderate balance between states.' : 
                   'Strong Lock In tendency. Great job maintaining focus!'}
                </p>
              </div>
            )}
          </div>
          
          {/* Recent Log */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Recent Logs</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {recentLogs.length > 0 ? (
                recentLogs.map((log, index) => (
                  <div key={index} className={`p-3 rounded-lg ${log.state === 'CRASH OUT' ? 'bg-red-100' : 'bg-blue-100'}`}>
                    <div className="font-semibold">{log.state} - Intensity: {log.intensity}/10</div>
                    <div className="text-sm text-gray-600">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                    {log.notes && <div className="mt-1 text-sm">{log.notes}</div>}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No logs yet. Start tracking your cycle!</p>
              )}
            </div>
          </div>
        </div>
        
        {/* State Selection Modal */}
        <Transition appear show={isModalOpen} as={React.Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Log your {currentState} state
                    </Dialog.Title>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Intensity (1-10)
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={intensity}
                        onChange={(e) => setIntensity(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1</span>
                        <span>5</span>
                        <span>10</span>
                      </div>
                      <div className="text-center mt-1">
                        Current: {intensity}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notes (optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        rows="3"
                        placeholder="How are you feeling? What triggered this state?"
                      ></textarea>
                    </div>
                    
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Reset Confirmation Modal */}
        <Transition appear show={isResetModalOpen} as={React.Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsResetModalOpen(false)}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Reset KOI Cycle Data
                    </Dialog.Title>
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to reset all your KOI Cycle data? This action cannot be undone.
                      </p>
                    </div>
                    
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
                        onClick={() => setIsResetModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default CrashOutCycle; 