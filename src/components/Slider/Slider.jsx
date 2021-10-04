import { Carousel } from "react-responsive-carousel";

import styles from "./Slider.module.css";

import Dior1 from "../../images/Dior1.png";

export default function Slider() {
  return (
    <div>
      <Carousel showStatus={false} showThumbs={false}>
        <div className={styles.content}>
          <img src={Dior1} alt={"asd"} width="300" height="377" />
          <div className={styles.image_text}>
            <p>Legend 1</p>
            <p>Legend 1</p>
            <p>Legend 1</p>

            <button className={styles.slider_button}>sada</button>
          </div>
        </div>
        <div>
          <img src={Dior1} alt={"asd"} width="300" height="377" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Dior1} alt={"asd"} width="300" height="377" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
