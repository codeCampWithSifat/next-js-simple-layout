import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className="flex justify-center items-center min-h-screen text-6xl text-red-800">
      <h1>Page Not Found..............</h1>
    </div>
  );
};

export default NotFound;
