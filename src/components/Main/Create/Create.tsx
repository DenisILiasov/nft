import { FC } from "react";
import style from './Create.module.scss'
import CreateText from "./CreateText/CreateText";
import CreateImage from "./CreateImage/CreateImage";

const Create: FC = () => {
    return(
        <div className={style.createContent}>
            <div className={style.createTextContainer}>
                <CreateText/>
            </div>
            <div className={style.createImageContainer}>
                <CreateImage/>
                <div className={style.blur}>

                </div>
            </div>
        </div>
    )
};

export default Create;