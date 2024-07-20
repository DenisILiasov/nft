import { FC } from "react";
import HeaderSvg from "../../Header/HeaderSvg";
import style from './FooterLogo.module.scss';
import FooterLogoSvg from "./FooterlogoSvg";

const FooterLogo: FC = () => {
    return(
        <div className={style.footerLogoContainer}>
            <div className={style.logoContainer}>
                <HeaderSvg/>
                <p className={style.footerLogo}>Creative<span className='textYellow'>art</span></p>
            </div>
            <div className={style.footerLogoText}>
                <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
            </div>
            <div className={style.svgContainer}>
                <FooterLogoSvg name="facebook"/>
                <FooterLogoSvg name="telegram"/>
                <FooterLogoSvg name="twiter"/>
                <FooterLogoSvg name="linkedin"/>
            </div>
        </div>
    )
}

export default FooterLogo;