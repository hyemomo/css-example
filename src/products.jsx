import React, { useEffect, useState } from "react";
import Spinner from "./assets/spinner.gif";
import useProducts from './hooks/use-products';
export default function Products() {
  const [checked, setChecked] = useState(false);
  const  [loading, error, products]=useProducts({salesOnly:checked});


  
  const handleChange = () => setChecked((prev) => !prev);

 

  return loading ? (
    <Loading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
function Loading() {
  return (
    <div>
      <h1>잠시만 기다려주세요.</h1>
      <img src={Spinner} width="50%"></img>
    </div>
  );
}
