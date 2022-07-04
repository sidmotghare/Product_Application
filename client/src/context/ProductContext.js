import { GET, POST, DELETE, PUT, BASE_URL } from "../services/axios.config";
import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  let navigate = useNavigate();
  //console.log(mobileList);
  let initialValue = {
    productName: "",
    productPrice: "",
    productFeatures: "",
  };
  let [mobileList, setMobileList] = useState([]);
  let [editProduct, setEditProduct] = useState({ ...initialValue });
  let schema = yup.object().shape({
    productName: yup.string().required("Please enter mobile name"),
    productPrice: yup.string().required("Please enter mobile price"),
    productFeatures: yup.string().required("Please enter mobile features"),
  });
  let getProductList = async () => {
    try {
      let { data } = await GET(`${BASE_URL}product/list`);
      //console.log(data);
      let { result } = data;
      setMobileList([...result]);
    } catch (error) {
      console.log(error);
    }
  };
  let onSubmit = async (values, onSubmitProps) => {
    try {
      let { data } = await POST(`${BASE_URL}product/add`, values);
      console.log(values);
      if (data.status === true) {
        let _mobileList = [...mobileList];
        _mobileList.push({ ...data.result });
        setMobileList([..._mobileList]);
        onSubmitProps.resetForm();
        toast.success(" Product Details Added Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      } else {
        toast.error(" Product Details unable to add!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  let getProductDetails = async (id) => {
    try {
      let { data } = await GET(`${BASE_URL}product/get-details?id=` + id);
      if (data.status) {
        let product = { ...data.result };
        setEditProduct(product);
      } else {
        toast.error(data.msg);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    //let product = { ...mobileList[id] };
    // console.log(product);
    //setEditProduct(product);
  };
  let onUpdate = async (values) => {
    // console.log(values);
    // console.log(id);
    // mobileList[id] = values;
    // setMobileList(mobileList);
    try {
      let { data } = await PUT(`${BASE_URL}product/edit`, {
        ...values,
      });
      if (data.status) {
        toast.success(" Product Details Updated Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        getProductList();
        navigate("/");
      } else {
        toast.error(data.msg, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  let delData = (id) => {
    console.log(id);
    try {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          let { data } = await DELETE(`${BASE_URL}product/delete?id=${id}`);
          let { status } = data;
          if (status === true) {
            toast.success(" Product Details Removed Successfully!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            getProductList();
          } else {
            toast.error(" Unable to remove product!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          // let _mobileList = [...mobileList];
          // _mobileList.splice(index, 1);
          // setMobileList(_mobileList);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  let values = {
    initialValue,
    schema,
    onSubmit,
    delData,
    mobileList,
    getProductDetails,
    editProduct,
    onUpdate,
    getProductList,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
