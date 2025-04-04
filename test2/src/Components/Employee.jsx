import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const EmployeePerformanceDashboard = () => {
  const performanceData = [
    { month: 'Jan', score: 3.8 },
    { month: 'Feb', score: 4.0 },
    { month: 'Mar', score: 4.2 },
    { month: 'Apr', score: 4.3 },
    { month: 'May', score: 4.2 },
  ];

  const feedbackData = [
    {
      id: 1,
      name: "John Smith",
      role: "Team Lead",
      date: "Mar 15, 2024",
      content: "Great work on the client presentation. Your attention to detail really made a difference.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Emily Johnson",
      role: "Department Manager",
      date: "Mar 10, 2024",
      content: "Your leadership during the project rollout was exemplary. Continue developing this skill.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Product Manager",
      date: "Mar 5, 2024",
      content: "Your customer interactions have improved significantly. Keep focusing on building relationships.",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const goalData = [
    { id: 1, name: "Increase sales by 20%", current: 10, target: 20, progress: 50 },
    { id: 2, name: "Complete leadership training", current: 1, target: 1, progress: 100 },
    { id: 3, name: "Improve customer satisfaction", current: 1, target: 2, progress: 50 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-800">Performance Dashboard</h1>
            <div className="flex items-center">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input type="text" className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>
              <div className="ml-4 relative">
                <button className="flex items-center text-gray-700 focus:outline-none">
                  <img className="h-8 w-8 rounded-full object-cover" src="/api/placeholder/32/32" alt="User profile" />
                  <span className="ml-2">Alex Morgan</span>
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Rating Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Overall Rating</h3>
              <div className="flex items-center">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray="84, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">4.2</div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold">4.2</div>
                  <div className="text-green-600 text-sm font-medium">Satisfactory</div>
                </div>
              </div>
            </div>

            {/* Goals Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Goals</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold">3 / 5</div>
                <div className="ml-4">
                  <div className="text-amber-500 text-sm font-medium">In Progress</div>
                  <div className="text-gray-500 text-xs">2 goals remaining</div>
                </div>
              </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Feedback</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold">12</div>
                <div className="ml-4">
                  <div className="text-blue-600 text-sm font-medium">Received</div>
                  <div className="text-gray-500 text-xs">+3 from last month</div>
                </div>
              </div>
            </div>

            {/* Reviews Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Reviews</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold">2 / 3</div>
                <div className="ml-4">
                  <div className="text-green-600 text-sm font-medium">Completed</div>
                  <div className="text-gray-500 text-xs">1 pending review</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trend */}
          <div className="bg-white rounded-xl shadow mb-8 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Goals Section */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Goals</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {goalData.map(goal => (
                  <div key={goal.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{goal.name}</span>
                      <span className="text-sm text-gray-600">{goal.current}/{goal.target}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Recent Feedback</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {feedbackData.map(feedback => (
                  <div key={feedback.id} className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <img 
                      src={feedback.avatar} 
                      alt={feedback.name} 
                      className="w-10 h-10 rounded-full mr-4" 
                    />
                    <div>
                      <div className="flex items-baseline">
                        <h4 className="font-medium">{feedback.name}</h4>
                        <span className="ml-2 text-xs text-gray-500">{feedback.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{feedback.role}</p>
                      <p className="text-sm mt-2">{feedback.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl shadow mt-8 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Summary</h3>
            <p className="text-gray-600">
              You have been performing well in your current role. Your overall rating of 4.2 shows consistent improvement 
              over the past quarter. You've successfully completed your leadership training goal and are making good progress 
              on sales targets. Keep focusing on improving customer satisfaction as this area still has room for growth.
              Your managers have provided positive feedback on your presentation skills and teamwork.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeePerformanceDashboard;