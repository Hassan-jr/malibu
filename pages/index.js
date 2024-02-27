import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData, categories }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {categories.map((category, index) => (
        <div>
          <div className="products-heading">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
          <div className="products-container">
            {products?.map(
              (product) =>
                product?.category?._ref == category._id && (
                  <Product key={product._id} product={product} />
                )
            )}
          </div>
        </div>
      ))}
      {/* <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div> */}

      {/* <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div> */}

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoriesquery = '*[_type == "categories"]';
  const categories = await client.fetch(categoriesquery);

  return {
    props: { products, bannerData, categories },
  };
};

export default Home;
