import { useState } from "react"
import Cart from "./Cart"
import { useContext } from "react"

export default function Header(props){

    const {count} = props

    return(
        <header className=" bg-[#8B85AF] sticky top-0">
            <div className="container mx-auto flex justify-between items-center py-4 border-b-2 border-[#292631]/[.55] text-[#fff]">
                <h1 className=" text-3xl font-sans ">Daily shop</h1>
                <Cart count={count}></Cart>
            </div>
                
        </header>
    )
}