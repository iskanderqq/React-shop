
export default function Item(props){
    const {id, name, desc, img, price, fu, obj} = props;
    
    return(
        <div className="w-[30%] flex flex-col  items-center pb-[16px] bg-[#C971A3]" id={id}>
            <img src={img} alt="" className=" mb-3"/>
            <div className="w-[90%] flex flex-col items-start ">
                <h3 className="text-2xl font-bold uppercase mb-4">{name}</h3>
                <p className="text-xl mb-4">{desc}</p>
                
                
            </div>
            <div className="mt-auto w-[90%] flex  items-center ">
                <button className="text-xl mr-4 border py-[5px] px-[10px] hover:bg-[#fff] hover:text-[#000]" onClick={()=>fu(obj)}>Купить</button>
                <span className="text-xl">{price}</span>
            </div>
        </div>
    )
}