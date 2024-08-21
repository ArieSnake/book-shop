import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {id: 101, name:'Sociology', price:27_000, pic:'https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg'},
    {id: 102, name:'Psychology', price:32_000, pic:'https://images.booksense.com/images/568/458/9781465458568.jpg'},
    {id: 103, name:'Philosophy', price:15_000, pic:'https://images.booksense.com/images/551/458/9781465458551.jpg'},
    {id: 104, name:'Poetry', price:20_000, pic:'https://www.adrionltd.com/111216-thickbox_default/the-poetry-book-big-ideas-simply-explained.jpg'},
    {id: 105, name:'Politics', price:37_000, pic:'https://images.booksense.com/images/905/473/9781465473905.jpg'},
    {id: 106, name:'World War', price:21_000, pic:'https://images.penguinrandomhouse.com/cover/9780744091977'},
    {id: 107, name:'Art', price:18_000, pic:'https://i1.sndcdn.com/artworks-7Ga4ima2p7WG3biw-UUZovw-t500x500.jpg'},
    {id: 108, name:'Physics', price:45_000, pic:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569197039l/51380777.jpg'}

  ])

  const [basket, setBasket] = useState([])

  const moveToCart = prod =>{
    const result = basket.find(x => x.id == prod.id)
    if(result){
      result.count++
      setBasket([...basket])
    }else{
      setBasket([...basket, {...prod, count:1}])
    }
  }
  const increaseCount = (id) => {
    const updatedBasket = basket.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item;
    })
    setBasket(updatedBasket)
  }

  const decreaseCount = (id) => {
    const updatedBasket = basket.map(item => {
      if(item.id === id){
        if(item.count === 1) {
          return item
        }
        return{...item, count: item.count - 1}
      }
      return item
    })
    setBasket(updatedBasket)
  }

  const removeProduct = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id)
    setBasket(updatedBasket)
  }

  return (
    <>
    <h1>Online Shop</h1>
    <div className='content'>
      <div>
        <h3>Products</h3>
        <div className='list'>
          {
            products.map(prod => <div key ={prod.id}> 
            <img src={prod.pic}/>
            <p>{prod.name}</p>
            <strong>{prod.price} AMD</strong>
            <button className='moveBtn' onClick={() => moveToCart(prod)}>move</button>
            </div>)
          }
        </div>
      </div>
      <div>
        <h3>Cart</h3>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>price</th>
              <th>count</th>
              <th>subtotal</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              basket.map(item => <tr key = {item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.count * item.price}</td>
                <td>
                  <button className='plus' onClick={() => increaseCount(item.id)}>+</button>
                  <button className='minus' onClick={() => decreaseCount(item.id)}>-</button>
                  <button className='remove' onClick={() => removeProduct(item.id)}>x</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default App
