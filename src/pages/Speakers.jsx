import React from "react";
import ProductTitleHeader from "../components/ProductTitleHeader";
import ProductPreviewCard from "../components/ProductPreviewCard";
import productData from "../data/products.json";
import ProductCategory from "../components/ProductCateogry";

function Speakers() {
  const speakers = productData.filter(
    (product) => product.category === "speakers"
  );

  console.log(speakers);

  return (
    <div>
      <ProductTitleHeader title="Speakers" />
      <div className="flex flex-col gap-[120px] lg:mb-[120px]">
        {speakers
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((speaker, index) => (
            <ProductPreviewCard
              key={speaker.id}
              image={speaker.categoryImage}
              name={speaker.name}
              description={speaker.description}
              newProduct={speaker.new}
              id={speaker.id}
              slug={speaker.slug}
              isReversed={index % 2 === 1}
            />
          ))}
      </div>
      <ProductCategory />
    </div>
  );
}

export default Speakers;
