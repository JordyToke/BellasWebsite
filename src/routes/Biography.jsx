import React from "react";
import styles from "./style.module.css";

const Biography = () => (
  <section id="biography" className={styles.biography}>
    <h2>Biography</h2>
    <hr />
    <p>Isabella Wells is an emerging ceramic artist that comes from a background in Architecture. Combining ancient motifs along with her exploration in contemporary ceramic techniques of clay body staining and glazing informs her use of textures, ornamentation and design elements.</p>
    <br />
    <p style={{fontStyle: "Italic"}}>I acknowledge the Gadigal people of the Eora Nation as the first inhabitants and traditional custodians of the land on which I live and work. I pay respect to Elders past, present and emerging.</p>
    <br />
    <p>Isabella Wells B. 1995 Sydney, Australia Lives and works in Sydney, Australia</p>
    <br />
    <p>Education 2014 -2017 Bachelor of Design in Architecture University of Technology, Sydney</p>
    <br />
    <p>2018 - 2020 Masters of Design in Architecture University of Technology, Sydney</p>
  </section>
);

export default Biography;
