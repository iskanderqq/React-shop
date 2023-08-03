import { useRef } from 'react'
import exit from '../img/exit.png'
import CartItem from './CartItem'

export default function CartList(props){
    const block = useRef()


    return(
        <div className="fixed top-0 w-[100%] h-[100%] hidden justify-center items-center text-[#fff] font-sans" ref={block} onLoad={()=>{props.openCart(block)}}>
            <div className='bg-[#292631] w-[50%] h-[50%] flex flex-col  items-center rounded-[10px]'>
                <div className='w-[100%] flex justify-between items-center p-[15px] border-b'>
                    <h3 className='text-2xl'>Корзина</h3>
                    <button>
                        <img src={exit} alt="exit" className='w-10 h-10' onClick={()=>{props.openCart(block)}}/>
                    </button>
                    
                </div>
                <ul className='w-[100%] p-[15px] overflow-y-scroll'>    
                    {props.order.length ?  props.order.map((el) => (<CartItem key={el.mainId} el={el} del={props.del} plus={props.plus} minus={props.minus}></CartItem>)) : <li>Пусто</li>}
                   
                </ul>
               
                <div className='w-[100%] p-[15px] text-lg mt-auto border-t'>
                    <span>Общая стоимость: {props.order.length ? props.order.reduce((currentSum, currentNumber) =>(currentSum + (currentNumber.count * currentNumber.price.finalPrice)),0) : 0}</span>
                </div>
            </div>
        </div>
    )
}