import React, {useEffect} from 'react';
import './App.scss';
import productsApi from './Api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productsApi.getAll(params);
      console.log(productList);
    };
    fetchProducts()
  }, [])
  return (
    <div className="App">   
    </div>
  ); 
}

export default App;
