import Shop from './components/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { createContext } from 'react';


export const context = createContext({});

function App() {
  const[count, setCount] = useState(null)
  const[order, setOrder] = useState(null)
  const[cartRef, setCartRef] = useState(null)

  function orderUpdate(count){
    setCount(count)
  }

  function getCart(ref){
    setCartRef(ref)
  }

  return (
    <div className="flex h-[100%] flex-col">
    <context.Provider value={getCart}>
      <Header count={count}></Header>
    </context.Provider>
    
    <Shop fu={orderUpdate} cartRef={cartRef}></Shop>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
