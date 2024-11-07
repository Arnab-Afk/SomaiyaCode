import React from "react";

const Callback = () => {
    //from params save token in localhost
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    localStorage.setItem("token", token);
    window.location.href = "/";
    return <div></div>;
}
export default Callback; 