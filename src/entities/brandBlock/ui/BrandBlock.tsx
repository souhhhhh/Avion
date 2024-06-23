import { Icon } from '../../../shared/Icon'
import icon from '../../../widgets/different/assets/Delivery.svg'
import styles from './BrandBlock.module.scss'
export const BrandBlock = () => { 
    return ( 
        <div className={styles.BrandBlock}>
            <Icon svg={icon}/>
            <div className={styles.text}>
            <h1>Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
            </div>
        </div>
    )
}
