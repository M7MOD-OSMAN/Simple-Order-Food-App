import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ showModal, hideModal, isModalShown }) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton
          showModal={showModal}
          hideModal={hideModal}
          isModalShown={isModalShown}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Big table full of Measls" />
      </div>
    </React.Fragment>
  );
};

export default Header;
