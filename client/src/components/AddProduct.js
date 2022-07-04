import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./AddProduct.css";

const AddProduct = () => {
  let { initialValue, onSubmit, schema } = useProductContext({});
  // console.log(mobileList);
  return (
    <div className="container">
      <div className="col-40">
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          <Form>
            <div>
              <label>Enter Mobile Name :</label>
              <Field
                type="text"
                className="inputs"
                placeholder="Enter Mobile Name"
                name="productName"
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
                className="inputs"
                placeholder="Enter Mobile Price"
                name="productPrice"
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
              <button className="btn1" type="submit">
                Add Product
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
