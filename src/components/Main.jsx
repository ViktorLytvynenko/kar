import style from "./Main.module.scss"
import picture from "../img/picture.png"
import picture2 from "../img/picture2.jpg"
import {useState} from "react";
const Main = () => {
    const [showInnerContainer, setShowInnerContainer] = useState(false);
    const handleClick = () => {
        setShowInnerContainer(!showInnerContainer);
    };
    return(
        <div className={style.container}>
            <img src={picture} alt="love"/>
            <button onClick={handleClick} className={style.container_btn1}>Yes</button>
            <button className={style.container_btn2}>No</button>
            <div
                className={`${style.container_inner} ${
                    showInnerContainer ? style.container_inner2 : style.container_inner1
                }`}
            >
                <img src={picture2} alt="love"/>
            </div>
        </div>
    )
}

export default Main