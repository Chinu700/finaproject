import React from 'react';
import { FileText } from 'lucide-react';

export default function TransactionReportsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      <div className="mb-2">
        <h1 className="text-xl font-bold text-gray-800">Transaction Reports</h1>
        <p className="text-sm text-gray-500 mt-1">View and download your latest transaction history</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
          <FileText className="w-8 h-8" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Reports are being generated</h2>
        <p className="text-gray-500 max-w-md">
          Your transaction reports dashboard is currently under construction and will be available soon with full historical data and exports.
        </p>
      </div>
    </div>
  );
}
