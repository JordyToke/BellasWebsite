import React from "react";
import styles from "./style.module.css";
import heroImgUrl from '/assets/IMG-7983.jpg';

const Home = () => (
  <section className="home">
    <div className={styles.slideshow}>
      <img className={`${styles.heroImage}`} src={heroImgUrl} alt="" />
    <p>
      The above will be a Gallery slideshow.
    </p>
    </div>
  </section>
);

export default Home;
