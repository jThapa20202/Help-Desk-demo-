import { useState } from "react";
import Logo from "../images/footer-logo.svg";

export default function Login() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* CENTER CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">

        {/* LOGIN CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER BAND */}
          <div
            className="px-6 py-6 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(50, 0, 0, 0.85), rgba(5, 25, 60, 0.85))",
            }}
          >
            <img
              src={Logo}
              alt="BIC Logo"
              className="w-20.5 h-20 object-contain mx-auto mb-3"
            />
            <h1 className="text-2xl font-semibold text-white tracking-tight mb-1">
              Welcome Back!
            </h1>
            <p className="text-white text-xs">
            Secure gateway for Academic Helpdesk
            </p>
          </div>

          {/* FORM BODY */}
          <div className="px-10 py-8 space-y-5">

            {/* EMAIL INPUT */}
            <div>
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1.5">
                Email or Institutional ID
              </p>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  type="email"
                  placeholder="e.g. studentID@bicnepal.edu.np"
                  className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Password</p>

              </div>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* REMEMBER ME */}
            <div className="flex items-center justify-between">
            {/* Left side: checkbox + label */}
            <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 accent-blue-900 cursor-pointer rounded"/>
                <label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer">
                Remember me for 30 days
                </label>
            </div>

            {/* Right side: forgot password */}
            <span className="text-xs text-red-600 font-medium cursor-pointer hover:underline">
                Forgot Password?
            </span>
            </div>

            {/* SIGN IN BUTTON */}
            <button
              className="w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-opacity"
              style={{ background: "#0f2a4a" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Sign In →
            </button>

            {/* REGISTER LINK */}
            <p className="text-center text-sm text-gray-500 pt-2">
              New to the institution?{" "}
              <span className="text-blue-900 font-semibold cursor-pointer hover:underline">Request Access</span>
            </p>
          </div>
        </div>

        {/* BOTTOM INFO CARDS */}
        <div className="flex gap-4 mt-6 w-full max-w-md">
          <div className="flex-1 bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Secure Auth</p>
              <p className="text-xs text-gray-400 mt-0.5">Encrypted 256-bit institutional tunnel enabled.</p>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Help Desk</p>
              <p className="text-xs text-gray-400 mt-0.5">Technical issues? Contact IT support 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}