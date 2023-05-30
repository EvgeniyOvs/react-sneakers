import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useContent() {
    const [items, setItems] = React.useState<any[]>([]);


    React.useEffect(()=>{
        axios.get('http://localhost:3002/items')
            .then((res)=>{
                setItems(res.data)
            })
    }, []);

    return [items]
}