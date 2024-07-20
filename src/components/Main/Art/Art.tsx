import { FC } from "react";
import style from './Art.module.scss'
import ArtText from "./ArtText/ArtText";
import Arts from "./Arts/Arts";

interface arts{
    name: string,
    image: string
}

const Art: FC = () => {
    const arts: arts[] = [{name: 'Cyberpunk Cocomo', image: './img/arts1.jpg'}, {name: 'Charge, Qi tiao yu', image: './img/arts2.jpg'}, {name: 'Surgeon, Josh Rife', image: './img/arts3.jpg'}]
    return(
        <div className={style.artContent}>
            <ArtText/>
            <div className={style.artsContainer}>
                {arts.map(el => <Arts name={el.name} image={el.image} key={el.name}/>)}
                <div className={style.blur}></div>
            </div>
            <div className={style.button}>
                <button>See All</button>
            </div>
        </div>
    )
};

export default Art;