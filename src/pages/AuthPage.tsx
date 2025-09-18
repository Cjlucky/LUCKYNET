import { SignIn, SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
              <p className="text-gray-600 dark:text-gray-300">Sign in or create an account to continue</p>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <SignIn
                  path="/sign-in"
                  routing="path"
                  signUpUrl="/sign-up"
                  afterSignInUrl="/"
                  afterSignUpUrl="/"
                />
              </div>
              
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate('/sign-up')}
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignUpPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create an account</h2>
              <p className="text-gray-600 dark:text-gray-300">Join us today</p>
            </div>
            
            <div className="space-y-4">
              <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                afterSignUpUrl="/"
                afterSignInUrl="/"
              />
              
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => navigate('/sign-in')}
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
