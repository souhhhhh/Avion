import styles from './Brand.module.scss';
import classNames from 'classnames';
import { BrandBlock } from '../../../entities/brandBlock';
interface DifferentProps {
  className?: string;
}
export const Brand = ({ className }: DifferentProps) => {
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
