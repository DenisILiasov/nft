import { FC } from "react";
import style from './Subscribe.module.scss';

const SubscribeText: FC = () => {
    return(
        <div className={style.subscribeTextContainer}>
            <div className={style.text}>
                <h2>Subscribe And <span className="textYellow">get our Updates</span> Every Week</h2>
                <p>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</p>
            </div>
            <div className={style.form}>
                <input type="email"  placeholder="Enter your e-mail"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeText;