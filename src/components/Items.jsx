import Item from "./Item"

export default function Items(props){
   
    const {api, fu = Function.prototype} = props
    return(
        <div className="w-[100%] flex flex-wrap justify-between gap-10 py-[20px]">
        {
            api.map(el=>(<Item key={el.mainId} id={el.mainId} name={el.displayName} desc={el.displayDescription} img={el.displayAssets[0].full_background} price={el.price.finalPrice} fu={fu} obj={el}/>))
        }
        </div>
    )
}