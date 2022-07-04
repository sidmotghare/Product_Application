import AddProduct from "./components/AddProduct";
import PrintProduct from "./components/PrintProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import EditProduct from "./components/EditProduct";
// import { useProductContext } from "./context/ProductContext";
import Login from "./components/Auth/Login";
import { useAuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  // let { getProductList } = useProductContext();
  // useEffect(() => {
  //   getProductList();
  // }, []);
  let { isLogin } = useAuthContext();
  //console.log(isLogin);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isLogin ? <Navigation /> : null}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<PrintProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
