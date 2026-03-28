import { useState } from "react";
import Logo from "/src/images/bic_logo.png";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT PANEL */}
        <div
          className="relative text-white p-10 flex flex-col justify-between rounded-l-xl bg-cover bg-center"
          style={{ backgroundImage: "url('src/images/building.png')" }}
        >
          <div
            className="absolute inset-0 rounded-l-xl"
            style={{
              background: "linear-gradient(135deg, rgba(128,0,0,0.75), rgba(15,42,74,0.75))",
            }}
          />

          {/* Logo */}
          <div className="relative z-10 mb-6">
            <img src={Logo} alt="College Logo" className="w-20 h-20 object-contain mb-4" />
            <h1 className="text-4xl font-bold mb-2 leading-tight">
              Biratnagar International College
            </h1>
            <p className="text-blue-200">
              Access the centralized nexus for student support, departmental
              coordination, and administrative oversight.
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

        {/* RIGHT PANEL */}
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-6">
            Select your institutional role to begin your journey.
          </p>

          {/* FORM */}
          <form className="space-y-4">

            {/* STUDENT FORM ONLY */}
            {role === "student" && (
              <>
                <div>
                  <label className="text-xs text-gray-500">FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500">INSTITUTIONAL EMAIL</label>
                  <input
                    type="email"
                    placeholder="studentID@bicnepal.edu.np"
                    className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500">FACULTY</label>
                  <select className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none">
                    <option>Select your faculty</option>
                    <option>Computer Science</option>
                    <option>Business</option>
                    <option>Cyber Security</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500">LEVEL</label>
                  <select className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none">
                    <option>Level 3</option>
                    <option>Level 4</option>
                    <option>Level 5</option>
                    <option>Level 6</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500">PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-sm text-blue-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500">CONFIRM PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full mt-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-sm text-blue-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </>
            )}

            <button className="w-full bg-blue-900 text-white py-3 rounded-lg mt-4 hover:bg-blue-800 transition">
              Create Account →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an institutional account?{" "}
            <span className="text-red-500 cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}