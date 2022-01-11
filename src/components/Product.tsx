import React from "react";


interface IProps {
    id:number;
    name:string;
    imageUrl:string;
    price:number;
  }
const Product = (props: IProps) => {
    const {id, name, imageUrl, price} = props;
  return <div className="col-lg-3 pb-4">
      <div className="card">
        <div className="text-center">
            <img className="w-100" src={imageUrl} alt={name} style={{height:'350px'}}/>
        </div>
        <div className="pt-3 px-3">
            <ul className="d-flex justify-content-between" style={{listStyle:'none',paddingLeft:0}}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
            <div className="d-flex justify-content-start mb-3">
                <button className="btn btn-warning" title="Add To Cart"><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                <button className="btn btn-primary" title="Add Wish Iist"><i className="fa fa-heart"></i></button>
            </div>
        </div>
      </div>
  </div>;
};

export default Product;


