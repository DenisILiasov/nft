import DiscoverButton from "./DiscoverButton/DicsoverButton";
import style from './Discover.module.scss';
import DiscoverImage from "./DiscoverImage/DiscoverImage";
import DiscoverText from "./DiscoverText/DiscoverText";
import { FC } from "react";import DiscoverStatistic from "./DiscoverStatistic/DiscoverStatistic";
import { IStatistic } from "./DiscoverStatistic/DiscoverStatistic";



const Discover: FC = () => {
    const statistik: IStatistic[] = [{title: "8.9", subTitle: "Art work"}, {title: '65', subTitle: 'Artist'}, {title: '87', subTitle: 'Colection'}]

    return(
        <div className={style.discoverContent}>
            <div className={style.mainDiscoverText}>
                <div className={style.discoverTextContainer}>
                    <DiscoverText/>
                    <DiscoverButton/>
                </div>
                <div className={style.discoverStatistikContainer}>
                    {statistik.map((el) => <DiscoverStatistic statistic={el} key={el.subTitle}/>)}
                </div>
            </div>
            <div className={style.mainDiscoverImage}>
                <DiscoverImage/>
                <div className={style.discoverModileStatistic}>
                    {statistik.map((el) => <DiscoverStatistic statistic={el} key={el.subTitle}/>)}
                </div>
            </div>
        </div>
    )
};

export default Discover;