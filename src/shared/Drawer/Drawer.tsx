import React from 'react';
import styles from './drawer.css';
import {Ecolor, Text} from "../Text";
import {Arrow} from "../Icons/Arrow";
import {ButtonRemove} from "../Icons/ButtonRemove";
import empty from "../../img/empty_box.jpg"
import order from  "../../img/order_complete.png"
import {Info} from "../Info";
import AppContext from "../../_context/contentContext";
import axios from "axios";
import {useCart} from "../../_hooks/useCart";

type ICartProps = Array<Cart>
export interface  Cart  {
    id?: string,
    imageUrl?: string,
    title?: string,
    price?: string,
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function Drawer(props: { onClose: () => void, onRemove:(id: string | undefined)=>void, opened: boolean,   items:ICartProps}) {

    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isLoading, setIsLoading] = React.useState(true);
    //определяем состояние корзины
    const [isOrderComplete, setOrderIsComplete] = React.useState(false)
    //меняем id заказа
    const [orderId, setOrderId] = React.useState(null)
    //очищаем корзину через контекст
    const onClickOrder = async  () =>{
        try {
            //отправляем заказ на бекэнд
           const { data } = await axios.post('http://localhost:3002/orders',
               {items : cartItems});

            setOrderId(data.id)
            console.log(data)
            setOrderIsComplete(true)
            //очищаем визально добавление в корзину и корзину
            setCartItems([]);
            //очищение бекэнда корзины
            for (let i = 0; i < cartItems.length; i++ ){
                const item = cartItems[i];
                await axios.delete('http://localhost:3002/cart/' + item.id)
                await delay(1000);
                // await console.log(item)
            }

        } catch (e) {
            alert('Не удалось создать заказ')

        }

    }

  return (
      <div className={`${styles.overlay} ${props.opened ? styles.overlayVisible : ''}`}>
            <div className={`${styles.drawer} ${props.opened ? styles.overlayVisible : ''}`}>
                <div className={styles.cartTitle}>
                    <Text As='h2' size={24} color={Ecolor.black} weight={700}>
                        Корзина
                    </Text>
                    <div className={styles.remove} onClick={props.onClose} >
                        <ButtonRemove/>
                    </div>
                </div>

                {
                    props.items.length >0
                        //если в корзине есть карточки рендерим их, если нет заглушку инфо
                        ?(
                            <div className={styles.drawerWrapper}>
                                <div className={styles.items}>
                                    {
                                        props.items.map((obj, index)=>(
                                            <div className={styles.cartItem}
                                                 key={index}
                                            >
                                                <div
                                                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                                    className={styles.cartItemImg}
                                                >
                                                </div>
                                                <div className={styles.descr}>
                                                    <div className={styles.title}>
                                                        <Text  As='p' size={16} color={Ecolor.black} weight={400}>
                                                            {obj.title}
                                                        </Text>
                                                    </div>
                                                    <div>
                                                        <Text size={14} color={Ecolor.black} weight={700}>
                                                            {obj.price} руб.
                                                        </Text>
                                                    </div>
                                                </div>
                                                <div onClick={()=> props.onRemove(obj.id)} className={styles.remove}>
                                                    <ButtonRemove/>
                                                </div>


                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={styles.count}>
                                    <ul className={styles.countList}>
                                        <li className={styles.countItem}>
                                            <Text size={16} color={Ecolor.black}>
                                                Итого:
                                            </Text>
                                            <div className={styles.dashed}></div>
                                            <Text size={16} color={Ecolor.black} weight={700}>
                                                {totalPrice} руб.
                                            </Text>
                                        </li>
                                        <li className={styles.countItem}>
                                            <Text size={16} color={Ecolor.black}>
                                                Налог 5%:
                                            </Text>
                                            <div className={styles.dashed}></div>
                                            <Text size={16} color={Ecolor.black} weight={700}>
                                                {Math.round(totalPrice * 0.05)} руб.
                                            </Text>
                                        </li>
                                    </ul>
                                    <button  onClick={onClickOrder} className={styles.countBtn}>
                                        Оформить заказ
                                        <span className={styles.arrow}>
                            <Arrow/>
                        </span>

                                    </button>
                                </div>
                            </div>
                        )
                        :(
                            <Info
                                //меняем данные в заглушке
                                title={isOrderComplete ? "Заказ оформлен"  : "Корзина пустая" }
                                description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"}
                                image={isOrderComplete? order :  empty}/>
                            )
                }
            </div>
      </div>
  );
}
