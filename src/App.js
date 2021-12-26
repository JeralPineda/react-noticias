import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
   // definir la categoria y noticias
   const [categoria, setCategoria] = useState('');
   const [noticias, setNoticias] = useState([]);

   useEffect(() => {
      const consultarApi = async () => {
         const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${process.env.REACT_APP_API_KEY}`;

         const respuesta = await fetch(url);
         const noticias = await respuesta.json();

         setNoticias(noticias.articles);
      };

      consultarApi();
   }, [categoria]);

   return (
      <>
         <Header titulo='Buscador de Noticias' />

         <div className='container white'>
            <Formulario
               //
               setCategoria={setCategoria}
            />
         </div>
      </>
   );
}

export default App;
