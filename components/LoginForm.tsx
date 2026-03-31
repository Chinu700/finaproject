"use client";
import { useState } from "react";
import Image from "next/image";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="w-full max-w-md z-10 px-6 sm:px-0">
      <div className="relative overflow-hidden bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] pb-8 pt-10 px-8 sm:px-12 transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(30,140,110,0.15)]">
        
        {/* Decorative inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />

        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/10 p-4 rounded-2xl border border-white/5 shadow-2xl mb-6 backdrop-blur-md">
            <Image
              priority
              src="/idbi_logo_new.png"
              alt="IDBI Bank"
              width={200}
              height={60}
              className="h-12 w-auto object-contain drop-shadow-md"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-sm">
            Sign in to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-300 ml-1"
            >
              Username
            </label>
            <div className="relative group">
              <input
                id="username"
                type="text"
                required
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 group-hover:bg-slate-900/80"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 ml-1"
            >
              Password
            </label>
            <div className="relative group">
              <input
                id="password"
                required
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 pr-12 text-sm text-white tracking-wide placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 group-hover:bg-slate-900/80"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 p-1.5 rounded-lg hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7 0-1.16.42-2.26 1.14-3.2M6.53 6.53A8.98 8.98 0 0112 5c5 0 9 4 9 7a8.93 8.93 0 01-2.34 3.84M3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 pb-1">
            <label className="flex items-center gap-2 cursor-pointer group select-none">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="peer appearance-none w-4 h-4 rounded-[4px] border border-slate-600 bg-slate-900/50 checked:bg-emerald-500 checked:border-emerald-500 cursor-pointer transition-all duration-200"
                />
                <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:tracking-wide transition-all duration-200"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative w-full overflow-hidden group rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-3.5 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </>
              ) : (
                "Sign In securely"
              )}
            </span>
          </button>
        </form>
      </div>

      <div className="mt-8 flex justify-center gap-6 text-xs text-slate-500">
        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-300 transition-colors">Help Center</a>
      </div>
    </div>
  );
}
