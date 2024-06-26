import { Input } from '../../../shared/ui/Input';
import styles from './join.module.scss';
export const Join = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.s}>
          <div className={styles.join}>
            <div className={styles.text}>
              <h1>Join the club and get the benefits</h1>
              <p>
                Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales,
                pop up stores and more
              </p>
              <div className={styles.input}>
                <Input placeholder="your@email.com" width={355} height={54} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
