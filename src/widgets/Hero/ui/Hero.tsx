import { Button } from '../../../shared/Button';
import chair from '../assets/Right Image.png';
import styles from './Hero.module.scss';
export const Hero = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.text}>
          <div className={styles.textButton}>
            <h1>
              The furniture brand for the <br></br>future, with timeless designs
            </h1>
            <Button />
          </div>

          <p>
            A new era in eco friendly furniture with Avelon, the French luxury retail brand with
            nice fonts, tasteful colors and a beautiful way to display things digitally using modern
            web technologies.
          </p>
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};
