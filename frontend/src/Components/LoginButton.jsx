import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginButton = () => {

  const handleLogin = () => {
    // Redirect to an auth page
    window.location.href = "https://small-mouse-2759.arnabbhowmik019.workers.dev/google/auth?redirect_url=http%3A%2F%2Flocalhost:5173/callback";
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
      Log in with Google
    </button>
  );
};

export default LoginButton;
