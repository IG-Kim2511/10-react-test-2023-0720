import React, { useState } from "react";

const FeaturedProducts = () => {
  const [selectedImage, setSelectedImage] = useState("images/f-img-1.1.png");

  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        <span>featured</span> products
      </h1>

      <div className="row">
        <div className="image-container">
          <div className="small-image">
            <img
              src="images/f-img-1.1.png"
              className="featured-image-1"
              alt=""
              onClick={() => setSelectedImage("images/f-img-1.1.png")}
            />
            <img
              src="images/f-img-1.2.png"
              className="featured-image-1"
              alt=""
              onClick={() => setSelectedImage("images/f-img-1.2.png")}
            />
            <img
              src="images/f-img-1.3.png"
              className="featured-image-1"
              alt=""
              onClick={() => setSelectedImage("images/f-img-1.3.png")}
            />
            <img
              src="images/f-img-1.4.png"
              className="featured-image-1"
              alt=""
              onClick={() => setSelectedImage("images/f-img-1.4.png")}
            />
          </div>

          <div className="big-image">
            <img src={selectedImage} alt="" className="big-image-1" />
          </div>
        </div>

        <div className="content">
          <h3>new nike airmax shoes</h3>
          <img src="images/f-img-1.1.png"/>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quasi
            minus voluptate, modi ex eum necessitatibus volupt
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
