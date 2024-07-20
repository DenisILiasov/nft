import { FC } from "react";
import style from './ArtText.module.scss'

const ArtText: FC = () => {
    return(
        <div className={style.artTextContent} >
            <h2><span className="textYellow">Amazing</span> and Super Unique Art of This <span className='textYellow'>Week</span></h2>
            <button>See all</button>
        </div>
    )
};

export default ArtText;