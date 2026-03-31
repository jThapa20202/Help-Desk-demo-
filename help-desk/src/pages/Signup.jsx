import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/bic_logo.png";
import Building from "../images/building.png";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return email.toLowerCase().endsWith("@bicnepal.edu.np");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !faculty || !level || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Only BIC institutional emails are allowed");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    console.log("Signup success (frontend only)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div
          className="relative text-white p-10 flex flex-col justify-between rounded-l-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${Building})` }}
        >
          <div
            className="absolute inset-0 rounded-l-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(128,0,0,0.75), rgba(15,42,74,0.75))",
            }}
          />

          <div className="relative z-10 mb-6">
            <img src={Logo} alt="College Logo" className="w-20 h-20 mb-4" />
            <h1 className="text-3xl font-bold mb-2">
              Biratnagar International College
            </h1>
            <p className="text-blue-200 text-sm">
              Access the centralized nexus for student support.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-10 relative z-10">
            <div className="bg-white/20 p-3 rounded-lg">🔒</div>
            <div>
              <p className="font-semibold">Secure Access</p>
              <p className="text-blue-200 text-sm">
                Institutional Single Sign-On Ready
              </p>
            </div>
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-6">
            Enter your institutional details.
          </p>

          <form onSubmit={handleSignup} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100"
            />

            <input
              type="email"
              placeholder="student@bicnepal.edu.np"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100"
            />

            <select
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100"
            >
              <option value="">Select Faculty</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Cyber Security</option>
            </select>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100"
            >
              <option value="">Select Level</option>
              <option>Level 3</option>
              <option>Level 4</option>
              <option>Level 5</option>
              <option>Level 6</option>
            </select>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-sm text-blue-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-sm text-blue-600"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Create Account →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}