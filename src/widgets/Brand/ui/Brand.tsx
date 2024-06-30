import BrandBlock from '../../../entities/brandBlock/ui/BrandBlock';
import styles from './Brand.module.scss';
import classNames from 'classnames';


export const Brand = () => {
  return (
    <div className="container">
      <div className={classNames(styles.Different)}>
        <p className={styles.text}>What makes our brand different</p>
        <div className={styles.items}>
          <div className={styles.Block}>
            <BrandBlock />
            <BrandBlock />
            <BrandBlock />
            <BrandBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
