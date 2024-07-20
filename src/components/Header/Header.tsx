import { FC, useState } from "react";
import style from './Header.module.scss';
import HeaderSvg from "./HeaderSvg";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import BurgerMenu from "../ui/BurgerMenu";

const Header: FC = () => {
    const [burgerStatus, setBurgerStatus] = useState<boolean>(false)
    const burgerStyle: string[] = [style.burger, style.active]

    const openOrClouseMenu = () => {
        setBurgerStatus(prev => !prev)
    }

    return(
        <div className={style.headerContainer}>
            <div className={style.headerLogoContainer}>
                <HeaderSvg/>
                <p className={style.headerLogo}>Creative<span className={style.yellow}>art</span></p>
            </div>
            <div  className={style.wrapp}>
                <HeaderMenu/>
            </div>
            <div className={style.wrapp}>
                <button className={style.button}>Contact</button>
            </div>
            <div className={burgerStatus ? burgerStyle.join(" ") : style.burger} onClick={openOrClouseMenu}><span></span></div>
            <BurgerMenu clouseBurger={openOrClouseMenu} status={burgerStatus}>
                <div className={style.burgerMenuContent}>
                    <HeaderMenu/>
                    <button className={style.button}>Contact</button>
                </div>
            </BurgerMenu>
        </div>
    )
};

export default Header;