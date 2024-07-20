import { FC } from "react";
import style from './SubscribeImage.module.scss';

const SubscribeImage: FC = () => {
    return(
        <div className={style.imgContainer}>
            <img src="/img/Subscribe/img1.jpg" alt="" />
        </div>
    )
}

export default SubscribeImage;