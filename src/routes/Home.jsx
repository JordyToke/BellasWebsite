import React from "react";
import styles from "./style.module.css";

const Home = () => (
  <section className="home">
    <div className={styles.slideshow}>
      <img className={styles.heroImage} src="IMG_7983.jpeg" alt="" />
    <p>
      The above will be a Gallery slideshow.
    </p>
    </div>
  </section>
);

export default Home;
