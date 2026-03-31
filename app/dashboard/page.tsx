import { ArrowLeftRight, Banknote } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Page Title & ID Info */}
            <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-gray-800">ID :</span> Pabitra.hota@cbin
                </p>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Total No Of Transaction */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                            <ArrowLeftRight className="w-5 h-5" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm">Total No Of Transaction</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">20.7K</span>
                </div>

                {/* Card 2: Total Amount */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                            <Banknote className="w-5 h-5" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm">Total Amount</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">76,000 cr</span>
                </div>
            </div>
        </div>
    );
}
