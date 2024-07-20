import { FC } from "react";
import style from './FooterInfo.module.scss';

const FooterInfo: FC = () => {
    return(
        <div className={style.infoContainer}>
            <div className={style.infoContent}>
                <h2>Explore</h2>
                <div>
                    <p>Art Sign In</p>
                    <p>Collectibles</p>
                    <p>Domain Name</p>
                    <p>Utility</p>
                </div>
            </div>
            <div className={style.infoContent}>
                <h2>Statistic</h2>
                <div>
                    <p>Ranking</p>
                    <p>Collectibles</p>
                    <p>Activity</p>
                </div>
            </div>
            <div className={style.infoContent}>
                <h2>Company</h2>
                <div>
                    <p>About Us</p>
                    <p>Career</p>
                    <p>Support</p>
                    <p>Partners</p>
                </div>
            </div>
            <div className={style.infoContent}>
                <h2>Resources</h2>
                <div>
                    <p>Help Center</p>
                    <p>Platform Status</p>
                    <p>Blog</p>
                </div>
            </div>   
        </div>
    )
};

export default FooterInfo;