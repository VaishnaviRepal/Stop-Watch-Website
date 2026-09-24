
//###-----This function is for Applying the Custom Hook studied part ----###

import {useState, useEffect} from 'react';
import axios, { type AxiosResponse } from 'axios';

export type TodoType = {
    id : number,
    title : string,
    // setTodos : any
}
//Resusale func, easy to debug n modify n implement
export function useTodos(){

    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response: AxiosResponse)=>{
                    setTodos(response.data);
            })

        //to keep refreshin / updating every 10 s new todos
        // const intervalId  = setInterval(()=>{
        //     axios.get("https://jsonplaceholder.typicode.com/todos")
        //         .then((response: AxiosResponse)=>{
        //             setTodos(response.data);
        //         })
        //     }, 10 * 1000);

        // return(()=>{
        //     clearInterval(intervalId);
        // })  
    }, []);

    
    return [todos, setTodos] as const;
}

