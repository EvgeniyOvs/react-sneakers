import React, {useEffect} from 'react';
import styles from './appcomponent.css';
import {Drawer} from "../Drawer";
import {Layout} from "../Layout";
import {Header} from "../Header";
import {useContent} from "../../_hooks/useContent";
import {useCartItems} from "../../_hooks/useCartItems";
import {Ecolor, Text} from "../Text";
import {SearchButton} from "../Icons/SearchButton";
import {Card} from "../Content/Card";
import  "../../img/sneakers/1.jpg"
import  "../../img/sneakers/2.png"
import  "../../img/sneakers/3.jpg"
import  "../../img/sneakers/4.jpg"
import  "../../img/sneakers/5.jpg"
import  "../../img/sneakers/6.jpg"
import  "../../img/sneakers/7.jpg"
import  "../../img/sneakers/8.jpg"
import  "../../img/sneakers/9.jpg"
import  "../../img/sneakers/10.jpg"
import  "../../img/sneakers/11.jpg"
import  "../../img/sneakers/12.jpg"
import {ButtonRemove} from "../Icons/ButtonRemove";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {Favorites} from "../Favorites";
import AppContext from "../../_context/contentContext";
import {Orders} from "../Orders";


export type ICartItems = Array<Cart>

export interface Cart   {
    id?: string;

    imageUrl?: string,
    title?: string,
    price?: string,

}
export type ICartFavorite = Array<CartFavorite>

export interface CartFavorite   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,

}



export function AppComponent(){
    //заполняем хуки
    const [items, setItems] = React.useState<any[]>([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState<ICartItems>([])
    const [favorites, setFavorites] = React.useState<ICartFavorite>([])
    const [searchValue, setSearchValue] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true);

    //отлавливаем загрузку всех стэйтов
    React.useEffect(()=>{
        async function FetchData(){
            try {
                const cartResponse = await  axios.get('http://localhost:3002/cart')
                const favoritesResponse = await  axios.get('http://localhost:3002/favorites')
                const itemsResponse = await  axios.get('http://localhost:3002/items')
                setIsLoading(false)

                setCartItems(cartResponse.data)
                setFavorites(favoritesResponse.data)
                setItems(itemsResponse.data)
            } catch (e) {
                alert('Ошибка получения данных')
                console.error(e)
            }
        }
        FetchData();
    }, []);

    //добавляем в корзину карточки
    const onAddToCart = async (obj: Cart)=>{
        try {
            if (cartItems.find((cartObj)=>Number(cartObj.id) === Number(obj.id))){
                setCartItems((prev)=>prev.filter((item)=>Number(item.id) !== Number(obj.id)));
            }
            else {
                const { data } = await axios.post('http://localhost:3002/cart', obj)
                setCartItems((prev)=>[ ... prev, data]);
            }
        }catch (error){
            alert('Не удалось добавить в корзину')
            console.error(error)
        }

    };

    //добавляем карточку в фавориты
    const onAddToFavorite = async (obj: CartFavorite)=>{
        try {
            if (favorites.find((vafObj)=>Number(vafObj.id) === Number(obj.id))){
                setFavorites((prev)=>prev.filter((item)=>Number(item.id) !== Number(obj.id)));
                axios.delete(`http://localhost:3002/favorites/${obj.id}`)

            }
            else {
                const { data } = await axios.post('http://localhost:3002/favorites', obj)
                setFavorites((prev)=>[ ... prev, data]);
            }
        }catch (error){
            alert('Не удалось добавить в закладки')
            console.error(error)
        }

    };

    //удаляем карточку из корзины
    const onRemoveItem = (id: string | undefined)=>{
        try{
            setCartItems((prev)=>prev.filter((item)=>item.id !== id));
            axios.delete(`http://localhost:3002/cart/${id}`)
        } catch (error) {
            alert('Не удалось удалить из фаворитов')
            console.error(error)
        }

    }

    //определяем изменение в инпуте
    const onChangeSearchInput = (event: { target: { value: any; }; }) => {
        setSearchValue(event.target.value)
    }
//определяем есть ли добавленые карточки в корзине
    const isItemAdded = (id: string | undefined)=>{
        return cartItems.some((obj)=>Number(obj.id) === Number(id))
    }
    //определяем есть ли добавленые карточки в фаворитах
    const isItemFavorite = (id: string | undefined)=>{
        return favorites.some((obj)=>Number(obj.id) === Number(id))
    }

  return (
      //передаем данные через контекст
    <AppContext.Provider
        value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            isItemFavorite,
            setCartOpened,
            setCartItems,
            onAddToCart,
        }}>
        <div className="wrapper">
            <div>
                <Drawer
                    onClose={()=> setCartOpened(false)}
                    items={cartItems}
                    onRemove={onRemoveItem}
                    opened={cartOpened}
                />
            </div>

            <Layout>
                <Header onClickCart={()=> setCartOpened(true)} />
                <main>
                    <Routes>
                        <Route  path="/"  element={
                            //передаем в Хоме все свойства
                            <Home
                                items={items}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                //передаем состояние карточек
                                cartItems={cartItems}
                                //передаем состояние загрузки
                                isLoading={isLoading}
                            />
                        }/>
                        <Route  path="/favorites"  element={
                            //добавляем роут на фавориты
                            <Favorites />
                        }/>
                        <Route  path="/orders"  element={
                            //добавляем роут на заказы
                            <Orders />
                        }/>
                    </Routes>

                </main>
            </Layout>
        </div>
    </AppContext.Provider>

  );
}
