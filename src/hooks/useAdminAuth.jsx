import Cookies from "js-cookie";

const useAdminAuth = () => {
  const isAuth = Cookies.get("adminInfo")
    ? JSON.parse(Cookies.get("adminInfo"))
    : null;

  return { isAuth };
};

export default useAdminAuth;
