import React, { FC, useState } from "react";
import Shop from "../Pages/Shop";
import SHOP_DATA from "../js/shop_data";
const Home: FC = () => {
  const [shopdata] = useState(SHOP_DATA);
  const shops = shopdata.map((shop)=>{
    return (
      <Shop key={shop.id} id={shop.id} title={shop.title} routeName={shop.routeName} items={shop.items} />
    )
  });
  return (
    <div className="container">
      { shops }
    </div>
  );
};

export default Home;
