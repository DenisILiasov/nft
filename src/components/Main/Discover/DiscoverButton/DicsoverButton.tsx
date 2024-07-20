import { FC } from "react";
import style from './DiscoverButton.module.scss'

const DiscoverButton:FC = () => {
    return(
        <div className={style.discoverButton}>
            <button className={style.button}>Explore Now</button>
            <p >Learn More</p>
        </div>
    )
};

export default DiscoverButton;