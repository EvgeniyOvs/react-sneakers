import React from 'react';
import styles from './info.css';
import empty from "../../img/empty_box.jpg";
import {Ecolor, Text} from "../Text";
import {ArrowLeft} from "../Icons/ArrowLeft";
import AppContext from "../../_context/contentContext";
import {Link} from "react-router-dom";

interface IInfoProps {
    title?: string,
    description?: string
    image?: string
}

export function Info({title, image, description}: IInfoProps) {
    //вытаскиваем из контекста состояние для закрытия корзины
    const {setCartOpened} = React.useContext(AppContext)
  return (
      <div className={styles.drawerWrapperEmpty}>
        <div className={styles.cartEmpty}>
          <img className={styles.imgEmpty} src={image}/>
          <div className={styles.cartTitleEmpty}>
            <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                {title}
            </Text>
          </div>
          <div className={styles.cartDescrEmpty}>
            <Text As='h2' size={16} color={Ecolor.grey9D} weight={400}>
                {description}
            </Text>
          </div>
            <Link to="/">
                <button
                    //при нажатии закрывем корзину
                    onClick={()=>setCartOpened(false)}
                    className={styles.countBtnEmpty}
                >
                    <Text As='h2' size={16} mobileSize={12} color={Ecolor.white} weight={500}>
                        Вернуться назад
                    </Text>
                    <span className={styles.BtnEmptyArrow}>
                            <ArrowLeft/>
            </span>

                </button>
            </Link>

        </div>
      </div>
  );
}
