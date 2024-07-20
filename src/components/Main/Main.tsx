import { FC } from "react"
import style from './Main.module.scss'
import Discover from "./Discover/Discover"
import Art from "./Art/Art"
import Create from "./Create/Create"
import Artist from "./Artist/Artist"
import Subscribe from "./Subscribe/Subscribe"

const Main: FC = () => {
    return(
        <div className={style.mainContainer}>
            <div className={style.discoverContainer}>
                <Discover/>
            </div>
            <div className={style.artContainer}>
                <Art/>
            </div>
            <div className={style.createContainer}>
                <Create/>
            </div>
            <div className={style.artistContainer}>
                <Artist/>
            </div>
            <div className={style.subscribeContainer}>
                <Subscribe/>
            </div>
        </div>
    )
}

export default Main;