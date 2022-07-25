import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <div>ProductDetail</div>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetail;
