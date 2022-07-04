import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { POST, BASE_URL } from "../services/axios.config";
const AuthContext = createContext({});
export function AuthContextProvider({ children }) {
  let navigate = useNavigate();
  let verifyToken = () => {
    return localStorage.getItem("x_auth_token") === null ? false : true;
  };
  let getTokenPayload = () => {
    let token = localStorage.getItem("x_auth_token");
    if (token === null) return {};
    return jwtDecode(token);
  };
  let [isLogin, setIsLogin] = useState(verifyToken());
  let [user, setUser] = useState(getTokenPayload());
  let onSubmit = async (values) => {
    //console.log(values);
    let { data, headers } = await POST(`${BASE_URL}/auth/login`, values);
    if (data.status === true) {
      localStorage.setItem("x_auth_token", headers.x_jwt_token);
      setUser(getTokenPayload());
      //alert("Login Successfully");
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLogin(true);
      navigate("/");
    } else {
      setIsLogin(false);
      alert(data.msg);
    }
    //console.log(result);
  };
  let logout = () => {
    localStorage.removeItem("x_auth_token");
    setIsLogin(false);
  };
  let values = {
    onSubmit,
    isLogin,
    logout,
    user,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
