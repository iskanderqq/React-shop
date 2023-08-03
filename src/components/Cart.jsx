import cart from "../img/cart.png"
import { useContext, useRef } from "react"
import {context} from "../App"

export default function Cart(props){
    const fu = useContext(context)
    const elem = useRef()
    const {count} = props
    return(
        <div className="flex items-center">
            <img src={cart} alt="basket" className="w-10 h-10 mr-2 cursor-pointer" ref={elem} onClick={()=>{fu(elem)}}/>
            {count ? <span>{count}</span> : null}
            
        </div>
    )
}