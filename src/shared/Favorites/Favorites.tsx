import React from 'react';
import styles from './favorites.css';
import {Ecolor, Text} from "../Text";
import {Card} from "../Content/Card";
import AppContext from "../../_context/contentContext";
import {Info} from "../Info";
import smiley from "../../img/smiley.png"



export interface CartFavorite   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,

}
interface IFavoritesProps {
    onAddToFavorite:(obj: {id: string | undefined; price: string | undefined; imageUrl: string | undefined; title: string | undefined })=>void,
}
export interface Obj   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,

}
export function Favorites() {
    //вытаскиваем из контекста карточки и состояние фаворит
    const {favorites, onAddToFavorite} = React.useContext(AppContext)

  return (
      <section className={styles.catalog + ' ' + styles.container}>

          {favorites.length>0
              ? (<>
                  <div className={styles.wrapper}>
                      <div className={styles.title}>
                          <Text As="h1" size={32} color={Ecolor.black} weight={700}>
                              Мои закладки
                          </Text>
                      </div>

                  </div>
                      <div className={styles.cardWrapper}>
                          {favorites
                              //рендерим крточки фавориты
                              .map((item:CartFavorite, index:number)=>(
                                  <Card
                                      id={item.id}
                                      key={index}
                                      title={item.title}
                                      price={item.price}
                                      imageUrl={item.imageUrl}
                                      //отлавливаем состояние фаворит
                                      onFavorite={onAddToFavorite}
                                  />
                              ))
                          }
                      </div>
                  </>
                  )
                  :(
                      <Info
                          //меняем данные в заглушке
                          title={"Закладок нет :("}
                          description={"Вы ничего не добавляли в закладки"}
                          image={smiley}/>
                  )
          }

      </section>
  );
}
