import { observer } from 'mobx-react';
import { Button } from '../../../shared/ui/Button';
import { ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import chair from '../assets/Right Image.png';
import styles from './Hero.module.scss';
export const Hero = observer(() => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.text}>
          <div className={styles.textButton}>
            <h1 className={styles.h}>
              The furniture brand for the <br></br>future, with timeless designs
            </h1>
            <div className={styles.button}>
              <Button theme={ButtonTheme.GREY}>View collection</Button>
            </div>
          </div>

          <p className={styles.p}>
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
});
