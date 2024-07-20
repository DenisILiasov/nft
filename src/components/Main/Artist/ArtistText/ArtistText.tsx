import { FC } from "react";
import style from './ArtistText.module.scss'

const ArtistText: FC = () => {
    return(
        <div className={style.artistTextContent}>
            <div className={style.titleContainer}>
                <h2>Popular <span className='textYellow'>Artists</span> On This Week</h2>
            </div>
            <button>See All</button>
        </div>
    )
};

export default ArtistText