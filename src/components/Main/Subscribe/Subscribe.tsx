import { FC } from "react";
import style from './Subscribe.module.scss';
import SubscribeImage from "./SubscribeImage/SubscribeImage";
import SubscribeText from "./SubscribeText/SubscribeText";

const Subscribe: FC = () => {
    return(
        <div className={style.subscribeContent}>
            <div className={style.subscribeImageContainer}>
                <SubscribeImage/>
            </div>
            <div className={style.subscribeTextContainer}>
                <SubscribeText/>
            </div>
        </div>
    )
}

export default Subscribe;