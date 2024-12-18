import React, { createContext, useContext, useState } from "react";

const RoleAuthContext = createContext();

export const RoleAuthProvider = ({ children }) => {
  const [role, setRole] = useState("");

  const updateRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleAuthContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleAuthContext.Provider>
  );
};

export const useRoleAuth = () => {
  return useContext(RoleAuthContext);
};
