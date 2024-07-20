import { FC } from "react";
import style from './DiscoverImage.module.scss'

const DiscoverImage: FC = () => {
    return(
        <div className={style.discoverImageContainer}>
            <div className={style.imageWrapp}>
                <img src="./img/1.jpg" alt="foto"/>
            </div>
            <div className={style.discoverImageInfo}>
                <div className={style.textContaiener}>
                    <div className={style.infoContainer}>
                        <p className="textYellow">Ends</p>
                        <p>05:45:47</p>
                    </div>
                    <div className={style.infoContainer} >
                        <p className="textYellow">Current bid</p>
                        <p>0.24ETH</p>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button className="textYellow">Place A Bid</button>
                </div>
            </div>
            <div className={style.blur}></div>
        </div>
    )
};

export default DiscoverImage;