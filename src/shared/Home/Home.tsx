import React from 'react';
import styles from './home.css';
import {Ecolor, Text} from "../Text";
import {SearchButton} from "../Icons/SearchButton";
import {ButtonRemove} from "../Icons/ButtonRemove";
import {Card} from "../Content/Card";


interface IHomeProps {
    items: Array<Obj>,
    searchValue: string,
    cartItems: Array<Cart>,
    isLoading?: boolean,
    setSearchValue:(s: string)=>void,
    onChangeSearchInput:(event: { target: { value: any; };})=>void,
    onAddToFavorite:(obj: {id: string | undefined; price: string | undefined; imageUrl: string | undefined; title: string | undefined })=>void,
    onAddToCart:(obj: {id: string | undefined; price: string | undefined; imageUrl: string | undefined; title: string | undefined })=>void,
}
export interface Obj   {
    id:string;
    imageUrl: string,
    title: string,
    price: string,

}
export interface Cart   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,

}



export function Home({ items, isLoading = false, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }: IHomeProps) {
    const renderItems = () =>{
        //функция фильтрации инпута
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()),
            );
        //пустой массив для загрузки
        let empty=[
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
            {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
        ];
        return (isLoading
            ? [...empty]
            : filtredItems)
            //рендарим карточки после загрузки
            .map((item, index)=>(
                <Card
                    id={item.id}
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    //отлавливаем состояние загрузки
                    loading={isLoading}
                />
            ))
    }

  return (
      <section className={styles.catalog + ' ' + styles.container}>
        <div className={styles.wrapper}>

          <div className={styles.title}>
            {searchValue
                //меняем значение заголовка на текст из инпута
                ?
                <Text As="h1" size={32} mobileSize={24} color={Ecolor.black} weight={700}>
                  Поиск по запросу: "{searchValue}"
                </Text>
                :
                <Text As="h1" size={32} mobileSize={24}  color={Ecolor.black} weight={700}>
                  Все кроссовки
                </Text>

            }
          </div>
          <div className={styles.search}>
            <SearchButton/>
            {searchValue && (
                //определяем есть ли добавленые карточки в корзине
                <div
                    className={styles.searchRemove}
                    onClick={()=>setSearchValue('')}
                >
                  <ButtonRemove/>
                </div>
            )}

            <input onChange={onChangeSearchInput} value={searchValue} className={styles.input} placeholder='Поиск...' />
          </div>
        </div>
        <div className={styles.cardWrapper}>

          {//рендерим карточки
              renderItems()
          }
        </div>
      </section>
  );
}

export default Home;
