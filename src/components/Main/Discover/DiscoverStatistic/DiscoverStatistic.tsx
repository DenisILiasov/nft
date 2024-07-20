import { FC } from "react";
import style from './DiscoverStatistic.module.scss';

export interface IStatistic{
    title: string;
    subTitle: string
}

interface IDiscoverStatistic{
    statistic: IStatistic;
}

const DiscoverStatistic: FC<IDiscoverStatistic>= ({statistic}) => {
    return(
        <div className={style.discoverContainer}>
            <h2 className="textYellow">{statistic.title}<span>K</span></h2>
            <p>{statistic.subTitle}</p>
        </div>
    )
};

export default DiscoverStatistic;