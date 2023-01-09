import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import HeroBottom from "../public/Images/heroBottom.png";
import Eye from "../public/Images/eye.png";
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
      
        <div className={styles.heroBottom}>
           <div>
          <Image src={HeroBottom}  layout="fill" />
          <div className={styles.bottomeye}>
          <div className={styles.bottomContainer}>
            
          <Image src={Eye}/>
          <div className={styles.paara}>
          <p>Let us help you see the world with</p>
           <p className={styles.techEye}>Tech Eyes</p>
          </div>
          </div>
          </div>
          </div>
        </div>
      
       
      </div>
    </>
  );
}

export default Hero;
