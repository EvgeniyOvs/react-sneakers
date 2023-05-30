import React from 'react';
import styles from './orders.css';
import {Ecolor, Text} from "../Text";
import axios from "axios";
import {Card} from "../Content/Card";
import {Info} from "../Info";
import smile from "../../img/smile.png"
import AppContext from "../../_context/contentContext";
export interface CartFavorite   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,

}
export function Orders() {
    const {onAddToCart, onAddToFavorite} = React.useContext(AppContext)
    const [ orders, setOrders ] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:3002/orders')
                setOrders(data.reduce((prev: any, obj: { items: any; }) => [...prev, ...obj.items], []))
                console.log(data)
            } catch (e) {
                alert("Ошибка")
            }
        })()
    }, [])

    let empty=[
        {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
        {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
        {id:'1',imageUrl: 'string', title: 'string', price: 'string'},
        {id:'1',imageUrl: 'string', title: 'string', price: 'string'}
    ]


  return (
      <section className={styles.catalog + ' ' + styles.container}>

        {orders.length>0
            ? (<>
                  <div className={styles.wrapper}>
                    <div className={styles.title}>
                      <Text As="h1" size={32} color={Ecolor.black} weight={700}>
                          Мои заказы
                      </Text>
                    </div>

                  </div>
                  <div className={styles.cardWrapper}>
                    {orders
                        //рендерим крточки фавориты
                        .map((item:CartFavorite, index:number)=>(
                            <Card
                                id={item.id}
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            />
                        ))
                    }
                  </div>
                </>
            )
            :(
                <Info
                    //меняем данные в заглушке
                    title={"У вас нет заказов"}
                    description={"Оформите хотя бы один заказ."}
                    image={smile}/>
            )
        }

      </section>
  );
}
