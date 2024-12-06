import styles from "./Advertising.module.scss";

// export default function Advertising() {
//   return (
//     <div className={styles.baner}>
//       <img src="/img/baner.jpg" alt="Баннер" />
//       <img className={styles.btn} src="../btnAdd.svg" alt="btn" />
//       <img className={styles.btnRight} src="../btnAdd.svg" alt="btn" />
//     </div>
//   );
// }

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Advertising() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    adaptiveWidth: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className={styles.baner} {...settings}>
      <div>
        <img src="/img/baner.jpg" alt="Баннер" />
      </div>
      <div>
        <img src="/img/baner2.jpg" alt="Баннер" />
      </div>
    </Slider>
  );
}
