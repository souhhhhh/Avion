import styles from './Anamy.module.scss';
import classNames from 'classnames';
import { BrandBlock } from '../../../entities/brandBlock';
interface DifferentProps {
  className?: string;
}
export const Anamy = ({ className }: DifferentProps) => {
  return <div className="container">
    <div className={styles.items}>
  <div className={classNames(styles.Different)} >
    <div>
    <p className={styles.text}>What makes our brand different</p>
    </div>
    <div className={styles.Block}>
        <BrandBlock />
        <BrandBlock />
        <BrandBlock />
        <BrandBlock />
    </div>
  </div>
    </div>
  </div> 
};