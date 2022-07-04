import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "./PrintProduct.css";

const PrintProduct = () => {
  let { delData, mobileList, getProductList } = useProductContext({});
  useEffect(() => {
    getProductList();
  }, []);
  let navigate = useNavigate();
  return (
    <div className="col-60">
      <table>
        <thead className="tbl-header">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Features</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbl-content">
          {mobileList.length === 0 ? (
            <tr>
              <td colSpan={5} className="center">
                No Products to display
              </td>
            </tr>
          ) : (
            mobileList.map((mobile, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{mobile.productName}</td>
                  <td>₹ {mobile.productPrice}</td>
                  <td>{mobile.productFeatures}</td>
                  <td className="flex">
                    <button
                      className="del-btn"
                      onClick={() => {
                        delData(`${mobile._id}`);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        navigate(`/edit-product?id=${mobile._id}`);
                      }}
                      className="del-btn"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PrintProduct;
