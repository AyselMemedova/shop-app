import React, { useContext } from "react";
import "./Home.css";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";

const Home = () => {
const {product}=useContext(MainContext)


  return (
    <div>

      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="section1">
        <div className="col6_img">
          <img
            src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
            alt=""
          />
        </div>

        <div className="col6_text">
          <p>
            {" "}
            <span>Flat</span> 75%Off
          </p>
          <h2>
            IT’S HAPPENING <br />
            THIS SEASON!
          </h2>
          <button>PURCHASE NOW</button>
        </div>
      </div>

      <div className="section_product">
        <div className="section_product_text">
          <h3>New realeased Products for Women</h3>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="row">
          {product.map((item, index) => (
            <div className="col-3">
              <div key={index} className="card">
                <div class="card" style={{ width: '18rem' }}>
                  <img class="card-img-top" src={item.image} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      {item.price}
                    </p>
                    <Link to={`detail/${item._id}`}> <button class="btn btn-warning">
                      Go to Detail page
                    </button></Link>
                    <button className="btn btn-primary">Add to Basket</button>
                  </div>
                </div>
              </div>
            </div>

          ))
          }

        </div>

      </div>
    </div>
  );
};

export default Home;
