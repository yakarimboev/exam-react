import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import poisk from "../assets/poisk.svg";
import yurak from "../assets/yurak.svg";
import user from "../assets/user.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-parent">
          <div className="header-left">
            <img src={logo} alt="" />
          </div>
          <div className="header-center">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Sign Up</a>
          </div>
          <div className="header-right">
            <div className="inp">
              <input type="text" placeholder="What are you looking for?" />
              <img src={poisk} alt="" />
            </div>

            <div className="img">
              <img src={yurak} alt="" />
              <img src={cart} alt="" />
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
