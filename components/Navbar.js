import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import LOGO from "../public/Images/logo.png";
import openMenu from "../public/Images/menu.png";
import ccross from "../public/Images/cros.jpg";
import Link from "next/link";

function Navbar() {
  const [list, setlist] = useState([
    { key: 1, name: "" },
    { key: 2, name: "Products" },
    { key: 3, name: "Team" },
    { key: 4, name: "Portfolio" },
    { key: 5, name: "CaseStudy" },
    { key: 6, name: "Login" },
  ]);
  const [clieckedID, setclieckedID] = useState("1");
  const [openSideBar, setopenSideBar] = useState(false);
  

  useEffect(() => {
    console.log("widthof screen", window.innerWidth);
  }, []);

  const getID = (id) => {
    setclieckedID(id);
    setopenSideBar(false);
  };
  const openBar = (e) => {
    e.stopPropagation();
    setopenSideBar((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={LOGO} />
          </div>
          <div className={styles.rightUpper}>
            <div className={`${styles.navlist} open-menu`}>
              {list.map((li) => (
                <>
                <li
                  key={li.key}
                  className={clieckedID == li.key ? styles.active : ""}
                  onClick={() => getID(li.key)}
                >
                  <Link
                    href={`/${li.name}`}
                    className={styles.links}
                    style={{ textDecoration: "none" }}
                  >
                   { li.name == "" ? (
                      <span style={{ color: "#FF7A01" }}> Home</span>
                    ) : (
                      li.name
                    )}
                  </Link>
                </li>
                 </>
              ))}
                
            </div>
            <div className={styles.hamburger} onClick={(e) => openBar(e)}>
              {openSideBar ? (
                <Image src={ccross} height="30" width="28" />
              ) : (
                <Image src={openMenu} />
              )}
            </div>
          </div>
          <div className={styles.btnOfNav}>
          <button className={styles.navBtn}>Get a qoue</button>
          </div>
        </div>
        
      </div>
      <div
        className={
          openSideBar
            ? `${styles.sidebar} ${styles.sidebarActive}`
            : styles.sidebar
        }
      >
        {list.map((li) => (
          <>
          <li
            key={li.key}
            className={clieckedID == li.key ? styles.active : ""}
            onClick={() => getID(li.key)}
          >
            <Link
              href={`/${li.name}`}
              style={{ textDecoration: "none", color: "white" }}
            >
               { li.name == "" ? (
                "Home"
              ) : (
                li.name
              )}
            </Link>
          </li>
        
          
        </>
        ))}

      </div>
    </>
  );
}

export default Navbar;
