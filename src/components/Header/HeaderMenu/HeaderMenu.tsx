import { FC } from "react";
import style from './Header.module.scss'

const HeaderMenu: FC = () => {
    return(
        <nav>
            <ul className={style.menuContainer}>
                <li>
                    Marketplace
                </li>
                <li>
                    Artists
                </li>
                <li>
                    Community
                </li>
                <li>
                    Collections
                </li>
            </ul>
        </nav>
    )
};

export default HeaderMenu;