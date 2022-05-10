import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
//return based on condition
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h2> Loading...</h2>;
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
