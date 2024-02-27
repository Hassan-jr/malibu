import React, { useState } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, video, name, slug, price } }) => {
  const [isMuted, setIsMuted] = useState(true);
  const extractIdFromRef = (ref) => ref?.split("-")[1];

  const fileId = extractIdFromRef(video?.asset._ref);
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const link = `https://cdn.sanity.io/files/${projectId}/production/${fileId}.mp4`;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {video ? (
            // Render video if it exists controls
            <video
              width={200}
              height={300}
              autoPlay
              loop
              muted={isMuted}
              onMouseEnter={() => setIsMuted(false)}
              onMouseLeave={() => setIsMuted(true)}
              className="product-image"
            >
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={urlFor(image && image[0])}
              width={200}
              height={300}
              className="product-image"
            />
          )}

          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
