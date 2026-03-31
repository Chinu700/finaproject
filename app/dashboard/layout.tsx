"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Menu,
    Home,
    FileText,
    QrCode,
    Languages,
    HelpCircle,
    User,
    LogOut,
    ChevronDown
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-screen bg-[#f8f9fa] overflow-hidden text-black font-sans">
            {/* Sidebar */}
            <aside className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
                <div className="h-16 flex items-center justify-center shrink-0 border-b border-gray-200 px-4">
                    <Image
                        src="/idbi_logo.png"
                        alt="IDBI Logo"
                        width={160}
                        height={48}
                        className="object-contain max-h-12 w-auto"
                        priority
                    />
                </div>

                <nav className="flex-1 py-4 overflow-y-auto">
                    <ul className="space-y-1">
                        <li>
                            <Link href="/dashboard" className={`flex items-center gap-3 px-6 py-3 text-sm font-medium border-l-4 transition-colors ${pathname === '/dashboard' ? 'bg-blue-50 text-[#1964C4] border-[#1964C4]' : 'text-gray-600 hover:bg-gray-50 border-transparent'}`}>
                                <Home className="w-5 h-5" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 text-sm font-medium border-l-4 border-transparent transition-colors">
                                <FileText className="w-5 h-5" />
                                Transaction Reports
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/qr" className={`flex items-center gap-3 px-6 py-3 text-sm font-medium border-l-4 transition-colors ${pathname === '/dashboard/qr' ? 'bg-[#EAF3FE] text-[#1964C4] border-[#1964C4]' : 'text-gray-600 hover:bg-gray-50 border-transparent'}`}>
                                <QrCode className="w-5 h-5" />
                                QR Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/language" className={`flex items-center gap-3 px-6 py-3 text-sm font-medium border-l-4 transition-colors ${pathname === '/dashboard/language' ? 'bg-[#EAF3FE] text-[#1964C4] border-[#1964C4]' : 'text-gray-600 hover:bg-gray-50 border-transparent'}`}>
                                <Languages className="w-5 h-5" />
                                Language Update
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/help" className={`flex items-center gap-3 px-6 py-3 text-sm font-medium border-l-4 transition-colors ${pathname === '/dashboard/help' ? 'bg-[#EAF3FE] text-[#1964C4] border-[#1964C4]' : 'text-gray-600 hover:bg-gray-50 border-transparent'}`}>
                                <HelpCircle className="w-5 h-5" />
                                Help & Support
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                            className="flex items-center gap-2 hover:bg-gray-50 rounded-full py-1 px-3 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-gray-200">
                                <span className="text-xs text-blue-800 font-bold">SB</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 hidden sm:block">Stebin Ben</span>
                        </button>

                        {/* Dropdown menu */}
                        {profileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <User className="w-4 h-4 mr-2" />
                                    View Profile
                                </Link>
                                <Link href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </header>

                {/* Page Content area */}
                <main className="flex-1 overflow-auto bg-[#f8f9fa] p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
