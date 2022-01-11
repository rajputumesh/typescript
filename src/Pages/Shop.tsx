import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import 'bootstrap/dist/css/bootstrap.css';
import Product from "../components/Product";


interface IProps {
  id:number;
  title:string;
  routeName:string;
  items?:any;

}

/* function addToCart(id: number): void {
  console.log(id);
} */

const Shop = (props: IProps) => {
  const {id, title, routeName , items } = props;
  const product = items.map((item: { id: number; name: string; imageUrl: string; price: number; })=>{
    return (
      <Product id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
    )
  })
  return (
    <div className="row my-5">
      <div className="col-lg-10">
        <h4>{ title }</h4>
      </div>
      <div className="col-lg-2">
        {/* <Link to='/shop/:${ routeName }'>Details</Link> */}
      </div>
      <div className="row col-lg-12">
         {product}
      </div>
    </div>
  );
};

export default Shop;
