import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/footer-logo.svg";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return email.toLowerCase().endsWith("@bicnepal.edu.np");
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Use your institutional email");
      return;
    }

    setError("");
    console.log("Login successful");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* CENTER CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">

        {/* LOGIN CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div
            className="px-6 py-6 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(50, 0, 0, 0.85), rgba(5, 25, 60, 0.85))",
            }}
          >
            <img
              src={Logo}
              alt="BIC Logo"
              className="w-20 h-20 object-contain mx-auto mb-3"
            />
            <h1 className="text-2xl font-semibold text-white mb-1">
              Welcome Back!
            </h1>
            <p className="text-white text-xs">
              Secure gateway for Academic Helpdesk
            </p>
          </div>

          {/* FORM */}
          <div className="px-10 py-8 space-y-5">

            {/* EMAIL */}
            <div>
              <p className="text-xs font-semibold text-black-400 uppercase mb-1.5">
                Email or Institutional ID
              </p>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                <input
                  type="email"
                  placeholder="e.g. student@bicnepal.edu.np"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 text-sm text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <p className="text-xs font-semibold text-black-400 uppercase mb-1.5">
                Password
              </p>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 text-sm text-gray-700 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-500">
                  Remember me
                </span>
              </div>

              <span className="text-xs text-red-600 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            {/* ❗ ERROR MESSAGE */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-xl font-semibold text-white bg-blue-900 hover:bg-blue-800 transition"
            >
              Sign In →
            </button>

            {/* SIGNUP LINK */}
            <p className="text-center text-sm text-gray-500 pt-2">
              New to the institution?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-900 font-semibold cursor-pointer hover:underline"
              >
                Request Access
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}