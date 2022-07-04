import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { getQueryString } from "../utilities/CommonUtilities";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./EditProduct.css";

const EditProduct = () => {
  let { id } = getQueryString(useSearchParams());
  //console.log(id);
  let { getProductDetails, editProduct, schema, onUpdate } =
    useProductContext();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  // console.log(editProduct);
  return (
    <div className="container">
      <div className="col-40">
        <Formik
          initialValues={editProduct}
          onSubmit={onUpdate}
          validationSchema={schema}
          enableReinitialize={true}
        >
          <Form>
            <div>
              <label>Enter Mobile Name :</label>
              <Field
                type="text"
                placeholder="Enter Mobile Name"
                name="productName"
                className="inputs"
              />
              <ErrorMessage
                name="productName"
                component="span"
                className="error-msg"
              />
            </div>
            <div>
              <label>Enter Mobile Price :</label>
              <Field
                type="text"
                placeholder="Enter Mobile Price"
                name="productPrice"
                className="inputs"
              />
              <ErrorMessage
                name="productPrice"
                component="span"
                className="error-msg"
              />
            </div>
            <div>
              <label>Enter Mobile Features :</label>
              <Field
                as="textarea"
                type="text"
                cols="30"
                rows="4"
                placeholder="Enter Mobile Features"
                name="productFeatures"
              ></Field>
              <ErrorMessage
                name="productFeatures"
                component="span"
                className="error-msg"
              />
            </div>
            <div className="div-btn">
              <button className="btn" type="submit">
                Update Product
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProduct;
