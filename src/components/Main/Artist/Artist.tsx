import { FC } from "react";
import style from './Artist.module.scss'
import ArtistText from "./ArtistText/ArtistText";
import ArtistImage, { IArtistImage } from "./ArtistImage/ArtistImage";

const Artist: FC = () => {
    const nftsRow1: IArtistImage[] = [{name: 'Osvaldo Percy', image: '/img/imageArtist/nft1.jpg', imageUser: '/img/imageUser/user1.svg'}, {name: 'Osvaldo Percy', image: '/img/imageArtist/nft2.jpg', imageUser: '/img/imageUser/user2.svg'}]
    const nftsRow2: IArtistImage[] = [{name: 'Osvaldo Percy', image: '/img/imageArtist/nft3.jpg', imageUser: '/img/imageUser/user3.svg'}, {name: 'Osvaldo Percy', image: '/img/imageArtist/nft4.jpg', imageUser: '/img/imageUser/user4.svg'}]
    const nftsColumn: IArtistImage[] = [{name: 'Osvaldo Percy', image: '/img/imageArtist/nft5.jpg', imageUser: '/img/imageUser/user5.svg'}]
    const adaptiveImage: IArtistImage[] = [{name: 'Osvaldo Percy', image: '/img/adaptiveImageArtist/image1.jpg', imageUser: '/img/imageUser/user1.svg'}, {name: 'Osvaldo Percy', image: '/img/adaptiveImageArtist/image2.jpg', imageUser: '/img/imageUser/user2.svg'}, {name: 'Osvaldo Percy', image: '/img/adaptiveImageArtist/image3.jpg', imageUser: '/img/imageUser/user3.svg'}, {name: 'Osvaldo Percy', image: '/img/adaptiveImageArtist/image4.jpg', imageUser: '/img/imageUser/user4.svg'}, {name: 'Osvaldo Percy', image: '/img/adaptiveImageArtist/image5.jpg', imageUser: '/img/imageUser/user5.svg'}]
    return(
        <div className={style.artistContent}>
            <div className={style.artistTextContainer}>
                <ArtistText/>
            </div>
            <div className={style.imageContainer}>
                <div className={style.artistImageRowContainer}>
                    <div className={style.artistImageContainerNftsRow1}>
                        {nftsRow1.map((el) => {
                            return(
                                <div key={el.imageUser} className={style.artistImageWrapp}>
                                    <ArtistImage name={el.name} image={el.image} imageUser={el.imageUser} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.artistImageContainerNftsRow2}>
                        {nftsRow2.map((el) => {
                            return(
                                <div key={el.imageUser} className={style.artistImageWrapp}>
                                    <ArtistImage name={el.name} image={el.image} imageUser={el.imageUser} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={style.artistImageColumnContainer}>
                    <div className={style.artistImageContainerNftsRow1}>
                        {nftsColumn.map((el) => {
                            return(
                                <div className={style.artistImageWrapp} key={el.imageUser}>
                                    <ArtistImage name={el.name} image={el.image} imageUser={el.imageUser} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={style.adaptiveImageContainer}>
                {adaptiveImage.map((el) => {
                    return( 
                        <div key={el.imageUser}>
                            <ArtistImage name={el.name} image={el.image} imageUser={el.imageUser}/>
                        </div>
                    )
                })}
            </div>
            <div className={style.buttonContainer}>
                <button>See All</button>
            </div>   
        </div>
    )
};

export default Artist;