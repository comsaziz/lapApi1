import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setInfo(response.data);  
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 bg-[#222d3b]">
    {info.map((product) => (
      <div className="flex flex-col items-center mb-14 lg:p-8 lg:w-1/4 w-1/2 bg-white shadow-lg rounded-lg" key={product.id}>
        <img src={product.image} alt={product.title} className="w-40 h-40 object-contain mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{product.title}</h3>
        <p className="text-gray-600 text-center text-sm mb-4 lg:px-4">{product.description}</p>
        <p className="text-lg font-bold text-green-600">${product.price}</p>
      </div>
    ))}
  </div>
  

   
  );
}

export default App;
