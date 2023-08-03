import { useState } from "react"
import { useEffect } from "react"
import Items from "./Items"
import Preloader from "./Preloader"
import CartList from './CartList';


export default function Shop(props){
    const[apiRes, apiResChange] = useState(null)
    const[preload, preloadChange] = useState(true)
    const[order, setOrder] = useState([])
    const[cartIsOpen, setCart] = useState(false)

    const[basketRef, setbasketRef] = useState(null)


    const{fu, cartRef} = props

    useEffect(()=>{
        fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"30231093-064171e8-3cb2484e-e6aa0193"}})
        .then((request)=>request.json())
        .then((res)=> {
            apiResChange(res.shop)
            preloadChange(false)    
            })
    }, [])

    useEffect(()=>{
        fu(order.length)
    },[order])

    function addToBasket(obj){
        const itemIndex = order.findIndex((orderItem)=>(orderItem.mainId === obj.mainId))
        
        if(itemIndex < 0){
            const newItem={
                ...obj,
                count: 1,
            }
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((item, index)=>{
                if(index === itemIndex){
                    return{
                        ...item,
                        count: item.count+1
                    }
                }else{
                    return item
                }
            })
            setOrder(newOrder)
        }
    }

    function deleteFromBasket(id){
        setOrder(
            order.filter((el)=>{
                return el.mainId !== id
            })
        )
       
    }

    function countPlus(id){
        const newOrder = order.map(el=>{
            if(el.mainId === id){
                const newCount = el.count + 1
                return{
                    ...el,
                    count: newCount
                }
            }else{
                return el
            }
        })
        setOrder(newOrder)
    }
    function countMinus(id){
        const newOrder = order.map(el=>{
            if(el.mainId === id){
                let newCount
                el.count ? newCount = el.count - 1 : newCount = 0
                
                return{
                    ...el,
                    count: newCount
                }
            }else{
                return el
            }
        })
        setOrder(newOrder)
    }

    function openCart(ref){
        setbasketRef(ref)
        const close = "display:none;"
        ref.current.style.cssText = close
    }
    if(cartRef){
        const open = "display:flex;"
        cartRef.current.addEventListener('click', ()=>{
            basketRef.current.style.cssText = open
        })
    }

    return(
        <main className=" bg-[#8B85AF]">
            <div className="container h-[100%] mx-auto flex flex-col justify-center items-center text-[#fff]">
               
                {preload ?  <Preloader/> : <Items api={apiRes} fu={addToBasket}/>}

            </div>
            <CartList order={order} openCart={openCart} del={deleteFromBasket} plus={countPlus} minus={countMinus}></CartList>
        </main>
    )
}