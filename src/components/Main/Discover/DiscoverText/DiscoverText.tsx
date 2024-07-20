import { FC } from "react";
import style from './DiscoverText.module.scss'

const DiscoverText: FC = () => {
    return(
        <div className={style.discoverTextContainer}>
            <div  className={style.discoverTitle}>
                <h1>Discover and Collect The Best NFTs <span className="textYellow">Digital Art.</span></h1>
            </div>
            <div className={style.discoverSubtitle}>
                <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
            </div>
            
        </div>
    )
};

export default DiscoverText;