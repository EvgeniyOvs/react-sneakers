import React from 'react';
import styles from './header.css';
import {LogoButton} from "../Icons/LogoButton";
import {Ecolor, Text} from "../Text";
import {BasketButton} from "../Icons/BasketButton";
import {FavoriteButton} from "../Icons/FavoriteButton";
import {UserButton} from "../Icons/UserButton";
import {Link} from "react-router-dom";
import AppContext from "../../_context/contentContext";
import {useCart} from "../../_hooks/useCart";



// props: { onClickCart: () => void; }
export function Header(props: { onClickCart: () => void; }) {
  const { totalPrice } = useCart();



  return (
    <header className={styles.header + ' ' + styles.container}>
      <Link to="/">
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <LogoButton/>
          </div>
          <div className={styles.headerInfo}>
            <Text As="h3" size={20} color={Ecolor.black} weight={700}>
              REACT SNEAKERS
            </Text>
            <Text As="p" size={14} color={Ecolor.grey9D}>
              Магазин лучших кроссовок
            </Text>
          </div>
        </div>
      </Link>

      <ul className={styles.basketList}>
        <li onClick={props.onClickCart} className={styles.basketItem}>
          <div className={styles.basketLogo}>
            <BasketButton/>
          </div>
          <div className={styles.count}>
            <Text size={14} color={Ecolor.grey5C} weight={600}>
              {totalPrice} руб.
            </Text>
          </div>
        </li>
        <li className={styles.basketItem}>
          <Link to="/favorites">
            <div className={styles.favoritButton}>
              <FavoriteButton/>
            </div>
          </Link>

        </li>
        <li className={styles.basketItem}>
          <Link to="/orders">
            <div className={styles.userButton}>
              <UserButton/>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}


