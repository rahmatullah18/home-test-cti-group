import React from "react";
import { useNavigate } from "react-router-dom";

type AuthContextInterface = {
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
};

export const AuthContext = React.createContext<AuthContextInterface>({
  onLogout: () => {},
  onLogin: (email, password) => {},
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate();
  const user = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const loginHandler = (email: string, password: string) => {
    const networkTimeout = setTimeout(() => {
      alert("network timeout");
    }, 10000);

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "1");
      clearTimeout(networkTimeout);
      navigate("/");
    } else {
      alert("email dan password tidak cocok");
      clearTimeout(networkTimeout);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
