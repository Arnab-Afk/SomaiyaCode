import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="flex items-center p-2 pl-3 pr-3  text-white font-semibold rounded-lg bg-black"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="" />
    </button>
  );
};

export default LogoutButton;
