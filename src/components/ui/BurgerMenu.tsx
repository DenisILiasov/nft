import React, { FC } from "react";
import style from './BurgerMenu.module.scss';

interface IBurgerMenu{
    children:  React.ReactNode;
    status: boolean;
    clouseBurger: () => void;
}

const BurgerMenu: FC<IBurgerMenu> = ({children, status, clouseBurger}) => {

    const BurgerStyle: string[] = [style.burgerMenu, style.active]
    const BurgerContentStyle: string[] = [style.burgerContent, style.active]
    return(
        <div onClick={clouseBurger} className={status ? BurgerStyle.join(" ") : style.burgerMenu}>
            <div className={style.burgerContentWrapp}>
                <div onClick={e => e.stopPropagation()} className={status ? BurgerContentStyle.join(" ") : style.burgerContent}>
                    <div onClick={clouseBurger} className={style.clouseBurger}>+</div>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default BurgerMenu;