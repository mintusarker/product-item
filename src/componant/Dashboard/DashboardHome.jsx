import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  // console.log(user.displayName);
  // console.log(user.email);
  return (
    <div className="lg:-mt-44">
      <h3 className="text-lg bg-black text-white sm:mt-10 text-center py-2">User detail</h3>
      <div className="my-4 border-2 border-green-500 h-44 w-auto p-9 flex flex-col justify-items-center">
        <h3>
          Name : {user.displayName ? user.displayName : "No find user name yet"}{" "}
        </h3>
        <h3>Email : {user.email} </h3>
      </div>
    </div>
  );
};

export default DashboardHome;
