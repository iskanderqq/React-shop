import exit from '../img/exit.png'


export default function CartItem(props){
    const {el, del, plus = Function.prototype, minus = Function.prototype} = props
    return(
        <li className="mb-[10px] p-[5px] flex items-center justify-between border-[#686a77] border-t border-b text-xl">
          <div>
          {el.displayName} * {el.count} = {el.count * el.price.finalPrice}
          <div className='flex items-center gap-5'>
            <button className='text-3xl' onClick={()=>{plus(el.mainId)}}>+</button>
            <button className='text-3xl' onClick={()=>{minus(el.mainId)}}>-</button>
          </div>
          </div>
          
          <img src={exit} alt="exit" className='w-6 h-6 cursor-pointer' onClick={()=>{del(el.mainId)}}/>
        </li>
    )
}