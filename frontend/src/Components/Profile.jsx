import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img
          src={user.picture}
          alt={user.name}
          className="w-8 h-8 rounded-full"  // Makes the image a small circle
        />
      </div>
    )
  );
};

export default Profile;
