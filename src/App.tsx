import React, { useState } from 'react';

function App() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', credentials);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-[396px] text-center">
        {/* Facebook Logo */}
        <h1 className="text-[#1877f2] text-6xl font-bold mb-4">facebook</h1>

        {/* Login Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl mb-4">Log in to Facebook</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Email address or phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1877f2]"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1877f2]"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            
            <button 
              type="submit"
              className="w-full bg-[#1877f2] text-white py-3 px-4 rounded-lg font-bold text-xl hover:bg-[#166fe5]"
            >
              Log in
            </button>
          </form>
          
          <div className="mt-4 mb-4">
            <a href="#" className="text-[#1877f2] hover:underline text-sm">
              Forgotten account?
            </a>
            {" · "}
            <a href="#" className="text-[#1877f2] hover:underline text-sm">
              Sign up for Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[980px] mt-8 text-center">
        <div className="flex flex-wrap justify-center gap-x-4 text-xs text-gray-600 mb-2">
          <a href="#" className="hover:underline">English (UK)</a>
          <a href="#" className="hover:underline">ਪੰਜਾਬੀ</a>
          <a href="#" className="hover:underline">हिन्दी</a>
          <a href="#" className="hover:underline">اردو</a>
          <a href="#" className="hover:underline">मराठी</a>
          <a href="#" className="hover:underline">ગુજરાતી</a>
          <a href="#" className="hover:underline">বাংলা</a>
          <a href="#" className="hover:underline">தமிழ்</a>
          <a href="#" className="hover:underline">తెలుగు</a>
          <a href="#" className="hover:underline">ಕನ್ನಡ</a>
          <a href="#" className="hover:underline">മലയാളം</a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-4 text-xs text-gray-600">
          <a href="#" className="hover:underline">Sign Up</a>
          <a href="#" className="hover:underline">Log in</a>
          <a href="#" className="hover:underline">Messenger</a>
          <a href="#" className="hover:underline">Facebook Lite</a>
          <a href="#" className="hover:underline">Video</a>
          <a href="#" className="hover:underline">Places</a>
          <a href="#" className="hover:underline">Games</a>
          <a href="#" className="hover:underline">Marketplace</a>
          <a href="#" className="hover:underline">Meta Pay</a>
          <a href="#" className="hover:underline">Meta Store</a>
          <a href="#" className="hover:underline">Meta Quest</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Threads</a>
          <a href="#" className="hover:underline">Fundraisers</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Privacy Centre</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </div>
  );
}

export default App;