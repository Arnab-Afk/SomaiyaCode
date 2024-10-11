import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="flex items-center px-3 py-1.5 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
      Log Out
    </button>
  );
};

export default LogoutButton;
