import { IDifferentBrand } from '../../../shared/lib/types/data';
import styles from './BrandBlock.module.scss';
const BrandBlock = ({differentName, differentValue, img}: IDifferentBrand<string>) => {
  return (
    <div className={styles.BrandBlock}>
      <div className={styles.text}>
        <img src={img} alt="" />
        <div>
          <p>{differentName}</p>
          <p>{differentValue}</p>
        </div>
      </div>
    </div>
  );
};
export default BrandBlock
