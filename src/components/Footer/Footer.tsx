import { FC } from "react";
import style from './Fotter.module.scss';
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterLogo from "./FooterLogo/FooterLogo";

const Footer: FC = () => {
    return(
        <div className={style.footer}>
            <div className={style.infoContainer}>
                <FooterLogo/>
                <FooterInfo/>
            </div>
        </div>
    )
};

export default Footer;