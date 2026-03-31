import React from 'react';
import { QrCode as QRIcon } from 'lucide-react';

export default function QRDetailsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      <h1 className="text-xl font-bold text-gray-800">QR Details</h1>

      {/* Top Controls Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-8">
        <label className="text-sm font-medium text-gray-700 block mb-4">Select The Type of QR</label>
        
        <div className="flex items-center gap-6 mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="qr_type" value="static" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700 font-medium">Static</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="qr_type" value="dynamic" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700 font-medium">Dynamic</span>
          </label>
        </div>

        <p className="text-sm text-gray-500 mb-5">Enter an amount to instantly generate your dynamic QR code</p>

        <div className="flex flex-col gap-2 max-w-md">
          <label className="text-sm font-medium text-gray-700">Amount to be collected</label>
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              defaultValue="1500"
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
            />
            <button className="bg-[#1964C4] hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md shadow-sm transition-colors whitespace-nowrap">
              Generate QR
            </button>
          </div>
        </div>
      </div>

      {/* Bottom QR Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-8 flex flex-col items-center">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-700 font-medium mb-1">Amount to be Collected</p>
          <p className="text-2xl font-bold text-[#D1184F]">₹ 1500</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center w-full max-w-sm">
          <h2 className="text-gray-900 font-bold tracking-wide text-lg text-center mb-1">KRIPA SINDHU PAIRA</h2>
          <p className="text-gray-800 font-semibold text-center mb-6">Scan & Pay</p>

          <div className="w-56 h-56 bg-gray-50 border border-gray-200 flex items-center justify-center p-4 mb-4">
            {/* Using a Lucide-react QrCode icon as a large placeholder for the actual QR */}
            <QRIcon className="w-full h-full text-black opacity-80" strokeWidth={1} />
          </div>

          <p className="text-[10px] text-black font-bold mb-4 tracking-tighter sm:tracking-normal whitespace-normal text-center break-all w-full leading-tight">
            UPI Id: 20250602000094-1reserveuqrsbrp@cbin
          </p>

          {/* Payment providers placeholders */}
          <div className="w-full flex flex-col gap-3 pt-4 border-t border-gray-200">
            {/* Top row */}
            <div className="flex items-center justify-center gap-6 text-gray-700 italic opacity-80">
              <span className="flex items-end gap-1"><span className="text-2xl font-black tracking-tighter">BHIM</span></span>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="flex items-end gap-1"><span className="text-xl font-black tracking-tighter">UPI</span></span>
            </div>
            
            {/* Bottom Row of text logos */}
            <div className="flex items-center justify-center gap-5 text-[10px] font-bold text-gray-600 opacity-80 flex-wrap">
               <span>PhonePe</span>
               <span>GPay</span>
               <span>CRED</span>
               <span className="text-green-600">navi</span>
               <span className="text-blue-500">Paytm</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-[#D1184F] font-medium text-sm">
          Valid till 1:29
        </div>
      </div>
    </div>
  );
}
