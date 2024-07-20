import { FC } from "react";
import style from './CreateText.module.scss'

const CreateText: FC = () => {
    return(
        <div className={style.createTextContent}>
            <div className={style.textContainer}>
                <h2>Create And Sell Your <span className="textYellow">Best NFTs</span></h2>
                <p>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
            </div>
            <div className={style.buttonContainer}>
                <button>Create Now</button>
                <p>Learn More</p>
            </div>
        </div>
    )
};

export default CreateText;