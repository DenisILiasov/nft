import { FC } from "react";
import style from './CreateImage.module.scss'

const CreateImage: FC = () => {
    return(
        <div className={style.createImgContainer}> 
            <img src="/img/Create2.jpg" className={style.img2} alt="imgage" />
        </div>
    )
}

export default CreateImage;