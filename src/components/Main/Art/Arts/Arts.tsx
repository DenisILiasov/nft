import { FC } from "react";
import style from './Arts.module.scss';
import ArtsSvg from "./ArtsSvg";

interface IArts{
    image: string
    name: string
}

const Arts: FC<IArts> = ({image, name}) => {
    return(
        <div className={style.artsContent}>
            <div className={style.artImageContainer}>
                <img src={image} alt={name} />
            </div>
            <div className={style.artsTextContent}>
                <div className={style.artsTitle}>
                    <h3>{name}</h3>
                    <div className={style.priceContainer}>
                        <ArtsSvg name="price"/>
                        <p>490ETH</p>
                    </div>
                </div>
                <div className={style.artsTime}>
                    <div className={style.time}>
                        <p className={style.timeText}>Ending In</p>
                        <div className={style.timeSvg}>
                            <ArtsSvg name="time"/>
                            <p>03:24:56</p>
                        </div>
                    </div>
                    <div className={style.button}>
                        <button>Place A Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Arts;