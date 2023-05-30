import React from 'react';
import styles from './card.css';
import {Ecolor, Text} from "../../Text";
import {PlusButton} from "../../Icons/PlusButton";
import ContentLoader from "react-content-loader"
import hertstroke from '../../img/heart-stroke.svg'
import {CheckedButton} from "../../Icons/CheckedButton";
import {FavoriteButton} from "../../Icons/FavoriteButton";
import {HeartFill} from "../../Icons/HeartFill";
import {HeartStroke} from "../../Icons/HeartStroke";
import AppContext from "../../../_context/contentContext";

interface ICardProps{
    id?: string,
    key?: number,
    imageUrl?: string,
    title?: string,
    price?: string,
    onFavorite?: (p: { price: string | undefined; imageUrl: string | undefined; id: string | undefined; title: string | undefined })=>void;
    onPlus?: (p: { price: string | undefined; imageUrl: string | undefined; id: string | undefined; title: string | undefined })=>void;
    loading?: boolean,

}
export function Card({id, imageUrl, title, loading = false, price, onFavorite, onPlus} : ICardProps) {

    //вытаскиваем из контекста добавлены ли карточки в корзину и фавориты
    const {isItemAdded, isItemFavorite} = React.useContext(AppContext)

    //одобавляем в корзину
    const onClickPlus = ()=>{
        if (onPlus) {
            onPlus({id, imageUrl, title, price});
        }

    }
    //добавляем в фавориты
    const onClickFavorite = ()=>{
        if (onFavorite) {
            onFavorite({id, imageUrl, title, price})
        }
    }

  return (

        <div className={styles.card}>
            {loading
                //если идет загрузка рендерим заглушки, иначе карточки
                ?  <ContentLoader

                    speed={0}
                    width={150}
                    height={187}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                    <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="126" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="156" rx="5" ry="5" width="80" height="25" />
                    <rect x="109" y="148" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                : <>
                    {onFavorite && (
                        <div className={styles.favorite} onClick={onClickFavorite}>
                            {isItemFavorite(id)
                                //меняем картинку кнопки при наличии в заметках
                                ? <HeartFill/>
                                : <HeartStroke/>
                            }

                        </div>
                    )
                    }
                    <img className={styles.image} width='100%' height={135} src={imageUrl} alt='sneakers'/>
                    <div className={styles.title}>
                        <Text As="p" size={14} color={Ecolor.black} weight={400}>
                            {title}
                        </Text>
                    </div>
                    <div className={styles.price}>
                        <div>
                            <Text As="p"  size={10} color={Ecolor.grey5C} weight={400}>
                                Цена:
                            </Text>
                            <Text  size={14} color={Ecolor.black} weight={700}>
                                {price} руб.
                            </Text>
                        </div>
                        {onPlus &&(
                            <button className={styles.btn} onClick={onClickPlus}>
                                {isItemAdded(id)
                                    //меняем картинку кнопки при наличии в корзине
                                    ? <CheckedButton/>
                                    : <PlusButton/>
                                }
                            </button>)}
                    </div>
                </>
            }
        </div>

  );
}
