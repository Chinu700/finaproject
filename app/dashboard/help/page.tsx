import Image from "next/image";
import { Send, ArrowUp, User } from "lucide-react";

export default function HelpSupportPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Help & Support</h1>
        <button className="bg-[#1964C4] hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Raise a ticket
        </button>
      </div>

      {/* Ticket Info Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="font-semibold text-gray-800 text-lg">Ticket ID: #352355</h2>
          <button className="bg-[#5AC636] hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
            Reopen
          </button>
        </div>
        
        <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-x-8 gap-y-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Reason Type</p>
              <p className="text-gray-800 font-medium">Transaction...</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Raised Date</p>
              <p className="text-gray-800 font-medium">01 Mar, 2024</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 border-l border-green-100 pl-8">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Transaction ID</p>
              <p className="text-gray-800 font-medium tracking-wide">21638763981273921</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Status</p>
              <span className="inline-block px-2.5 py-0.5 border border-[#5AC636] text-[#5AC636] text-xs font-semibold rounded-md bg-green-50/50">
                Open
              </span>
            </div>
          </div>

          {/* Column 3 - Description */}
          <div className="border-l border-green-100 pl-8">
            <p className="text-gray-400 text-sm font-medium mb-1">Description</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The user "ReviewUser101" is requesting a review of their ban,
              citing new evidence that was not considered during the initial
              investigation. They believe this evidence will demonstrate their...
            </p>
          </div>
        </div>
      </div>

      {/* Messages Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="font-semibold text-gray-800">Messages</h2>
        </div>
        
        <div className="p-6 flex flex-col gap-8">
          {/* Load Older Button */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-[#1964C4] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-colors">
              <ArrowUp className="w-4 h-4" />
              Show Older Messages
            </button>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {/* Message 1 */}
            <div className="flex gap-4">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold text-sm">
                  PM
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-gray-800">Program Manager</span>
                  <span className="text-xs text-gray-500">01 Mar, 2024 02.42 PM</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  Hello Support Team, I hope this message finds you well. I recently found out that
                  my account, GamingMaster123, has been banned and I believe this might be a
                  mistake. Could you please provide me with the details of the ban and guide me on
                  how I can appeal this decision? Thanks.
                </p>
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex gap-4">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold text-sm">
                  ST
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-gray-800">Support Team</span>
                  <span className="text-xs text-gray-500">02 Mar, 2024 10.12 AM</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  Hi Shubham, thank you for reaching out. We understand your concern regarding
                  the ban. After reviewing your account, we found that it was banned due to
                  violations of our community guidelines, specifically regarding the use of third-
                  party software to alter game dynamics. Please let us know if you have any
                  information that might help us reassess your case.
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="mt-8 border border-gray-300 rounded-lg p-3 flex items-center gap-3 bg-gray-50/50">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
               <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                 <User className="w-5 h-5" />
               </div>
            </div>
            <input 
              type="text" 
              placeholder="Reply here..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button className="text-gray-800 hover:text-black shrink-0 px-2">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
