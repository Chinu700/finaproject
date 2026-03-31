import React from 'react';

export default function LanguageUpdatePage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      <h1 className="text-xl font-bold text-gray-800">Language Update</h1>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* VPA ID */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">VPA ID</label>
            <input 
              type="text" 
              value="3456789pabaitra@cbin" 
              readOnly
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none"
            />
          </div>

          {/* Device Serial Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Device Serial Number</label>
            <input 
              type="text" 
              value="9003567823456" 
              readOnly
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none"
            />
          </div>

          {/* Current Language */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Current Language</label>
            <input 
              type="text" 
              value="Odia" 
              readOnly
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none"
            />
          </div>

          {/* Language Update */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Language Update</label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option value="" disabled selected>Select Language Update</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="bengali">Bengali</option>
                <option value="telugu">Telugu</option>
                <option value="marathi">Marathi</option>
                <option value="tamil">Tamil</option>
                <option value="urdu">Urdu</option>
                <option value="gujarati">Gujarati</option>
                <option value="kannada">Kannada</option>
                <option value="malayalam">Malayalam</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-end gap-6">
          <button className="text-[#F1535A] hover:text-red-600 text-sm font-medium px-4 py-2 transition-colors">
            Cancel
          </button>
          <button className="bg-[#1964C4] hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-md shadow-sm transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
