import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
      Log in with Google
    </button>
  );
};

export default LoginButton;
