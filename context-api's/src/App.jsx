import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Item name="Asus" price="{100000}"/>
     <Item name="Hp" price="{13000}"/>
     <Item name="lenovo" price="{1100000}"/>
     <Cart/>
    </>
  )
}

export default App
