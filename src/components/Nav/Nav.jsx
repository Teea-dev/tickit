import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { CgMenuBoxed } from "react-icons/cg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.productName}>
          <h1>TICKITS.</h1>
        </div>

        <div className={styles.menuIcon}>
          <div
            className={[styles.hamburger, isOpen ? styles.open : ""].join(" ")}
            onClick={toggleMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={[styles.menu, isOpen ? styles.open : ""].join(" ")}>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/events"> Events</Link>
              </li>
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className={styles.reg}>
              <div className={styles.login}>
                <h2>
                  <Link to="/sign-in">Log In </Link>
                </h2>
              </div>
              <div className={styles.create}>
                <Link to="/sign-up">Create event </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menui}>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/events"> Events</Link>
            </li>
            <li>
              <Link to="/about"> About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles.reg}>
            <div className={styles.login}>
              <h2>
                <Link to="/sign-in">Log In </Link>
              </h2>
            </div>
            <div className={styles.create}>
              <Link to="/sign-up">Create event </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
