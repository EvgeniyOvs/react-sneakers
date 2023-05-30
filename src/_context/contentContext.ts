import React, {SetStateAction} from "react";
import {ICartItems} from "../shared/AppComponent";

export interface CartFavorite   {
 id?: string;
 imageUrl?: string,
 title?: string,
 price?: string,

}
export interface Cart   {
 id?: string;

 imageUrl?: string,
 title?: string,
 price?: string,

}
export interface MyContext {
 items: Array<{}>,
 cartItems: Array<{
  price?: string;
  id?: string;
 }>,
 favorites: Array<{}>,
 isItemAdded: (id: string | undefined)=> boolean,
 isItemFavorite: (id: string | undefined)=> boolean,
 onAddToFavorite: (obj:CartFavorite)=>void
 onAddToCart: (obj:Cart)=>void
 setCartOpened: React.Dispatch<boolean>;
 setCartItems: React.Dispatch<SetStateAction<ICartItems>>;
}


 const AppContext = React.createContext<MyContext>({
  items: [],
  cartItems: [],
  favorites: [],
  isItemAdded(): boolean {return false;},
  isItemFavorite(): boolean {return false;},
  onAddToFavorite(): {} {return {};},
  setCartOpened(value: boolean): void {},
  setCartItems(value: ((prevState: {}) => {}) | {}): void {},
  onAddToCart(obj: Cart): void {
  }

 });

export default AppContext;


