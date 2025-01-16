import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  let data = [
    {
      id: 1,
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light.jpg",
      name: "Gucci duffle bag",
      price: 960,
      aksiya: "17%",
      reting: 4.5,
    },
    {
      id: 2,
      img: "https://www.jumbo-computer.com/cdn/shop/files/2YM-000R-00214-03_800x.png?v=1721293152",
      name: "RGB Liquid CPU Cooler",
      price: 1960,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 3,
      img: "https://fantech.ph/wp-content/uploads/2019/04/2ef2abad.png",
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 4,
      img: "https://www.grailssf.com/cdn/shop/products/17041903_2_burned_300x300.png?v=1514071142",
      name: "Quilted Satin Jacket",
      price: 750,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 5,
      img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-asus-elegant-gaming-laptop-png-image_17033096.png",
      name: "ASUS FHD Gaming Laptop",
      price: 960,
      aksiya: "17%",
      reting: 4.5,
    },
    {
      id: 6,
      img: "https://images.philips.com/is/image/philipsconsumer/ee96b59832674fcd81e2b17700991929?wid=700&hei=700&$pnglarge$",
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pk6CAZHOZyGiHkVW1mbjSKazuviEppjn8w&s",
      name: "HAVIT HV-G92 Gamepad",
      price: 560,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 8,
      img: "https://www.techlandbd.com/image/catalog/Keyboard/IMICE/AK-600/imice-ak-600-gaming-keyboard-1.jpg",
      name: "AK-900 Wired Keyboard",
      price: 200,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 9,
      img: "https://www.naturesrecipe.com/wp-content/uploads/2024/04/Natures-Recipe-Chicken-Sweet-Potato-Pumpkin-Grain-Free-Small-Breed-Dry-Dog-Food-12LB-1024x1024.png",
      name: "Breed Dry Dog Food",
      price: 100,
      aksiya: false,
      reting: 3.5,
    },
    {
      id: 10,
      img: "https://i.pinimg.com/originals/69/76/46/69764619239a7fb8a5dcb5d21e44f06a.png",
      name: "CANON EOS DSLR Camera",
      price: 350,
      aksiya: "22%",
      reting: 4.8,
    },
    {
      id: 11,
      img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-asus-elegant-gaming-laptop-png-image_17033096.png",
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      aksiya: false,
      reting: 4.3,
    },
    {
      id: 12,
      img: "https://cdn11.bigcommerce.com/s-w95j9i8f88/images/stencil/320w/image-manager/routine-nav.png?t&",
      name: "Curology Product Set",
      price: 500,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 13,
      img: "https://www.pngall.com/wp-content/uploads/7/Electric-Car-Transparent.png",
      name: "Kids Electric Car",
      price: 960,
      aksiya: "17%",
      reting: 4.8,
    },
    {
      id: 14,
      img: "https://soccerwearhouse.com/cdn/shop/files/superflyacademy_3dd112d7-98ce-4293-97e8-2ab7040d9b7e_5000x.png?v=1731624167",
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      aksiya: false,
      reting: 4.3,
    },
    {
      id: 15,
      img: "https://electroslab.com/cdn/shop/files/T1156.png?v=1690192083&width=1445",
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 16,
      img: "https://bbcicecream.eu/cdn/shop/files/IC24107_BROWN_01.png?v=1707837826",
      name: "Quilted Satin Jacket",
      price: 660,
      aksiya: false,
      reting: 4.5,
    },
  ];

  return (
    <div>
      <Header />
      <Hero />

      <main className="container">
        <div className="card-parent">
          {data.map((item) => {
            return (
              <Card
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                aksiya={item.aksiya}
                reting={item.reting}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
