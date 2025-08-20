"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signInAction, State } from "../dashboard/actions/auth/login";

export default function LoginPage() {
  const initialState: State = { message: " ", errors: {} };

  let loginAction = async (formData: FormData) => {

    let res = await signInAction(initialState, formData);

    if (res.success) {
      alert(res.message || "Login successful!");

      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(res.user)); 

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } else if (res.errors) {
      // Display validation errors
      alert(
        Object.values(res.errors)
          .flat()
          .join(", ") || "Login failed. Please check your input."
      );
    
    }else {
      alert(res.message || "Login failed. Please try again.");
    }

  

    // print the data from the form

  };

  // const [state, dispatch] = useActionState(signInAction, initialState);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-blue-900">Matter EHR</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-blue-700">
            Sign in to access your secure medical records
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <form className="space-y-6" action={loginAction}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-900 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-blue-700"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-blue-600">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-blue-700">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span>Your data is protected with end-to-end encryption</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-x-6">
          <Link
            href="/privacy"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
