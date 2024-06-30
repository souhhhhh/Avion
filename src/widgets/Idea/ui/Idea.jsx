import img from '../assets/Furniture.png';
import styles from './Idea.module.scss';
import { Button } from '../../../shared/ui/Button/ui/Button'
const Idea = () => { 
    return ( 
            <div className={styles.block}>
            <div className={styles.text}>
                <p>From a studio in London to a global brand with over 400 outlets</p>
                <h1>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</h1>
                <h2>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</h2>
                <span className={styles.button}>
                    <Button>Get in touch</Button>
                </span>
            </div>
            <img src={img} alt="" />
        </div>
    )
};

export default Idea;

