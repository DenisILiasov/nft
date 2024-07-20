import { FC } from "react";
import style from './ArtistImage.module.scss'

export interface IArtistImage{
    image: string;
    imageUser: string;
    name: string
}

const ArtistImage: FC<IArtistImage> = ({image, imageUser, name}) => {
    return(
        <div className={style.artistImageContent}>
            <img className={style.image} src={image} alt={name}/>
            <div className={style.infoUserContainer}>
                <div className={style.infoUserContent}>
                    <div className={style.infoImage}>
                        <img  src={imageUser} alt={name} />
                    </div>
                    <div className={style.infoName}>
                        <p>Owner</p>
                        <div>{name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArtistImage;