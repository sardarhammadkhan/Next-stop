import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import HeroBottom from "../public/Images/heroBottom.png";
function Hero() {
  return (
    <>
      <div className={styles.heroContainerMain}>
        <div className={styles.heroContainer}>
          <div
            className={styles.heroimg}
            style={{ position: "absolute" }}
          ></div>
          <div style={{ position: "absolute" }}>
            <div className={styles.heroGraphy}>
              <p>
                Transform thoughts into progressive ventures<br></br> & services
                with
              </p>
            </div>
            <div className={styles.heroHeading}>
              <h1>
                Interaction Design, Technology, <br></br>Innovation & Support
              </h1>
            </div>
          </div>
        </div>
        {/* <div className={styles.heroBottom}>
          <Image src={HeroBottom} />
        </div> */}
      </div>
    </>
  );
}

export default Hero;
