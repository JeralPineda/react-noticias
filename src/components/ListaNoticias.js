import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => {
   return (
      <div className='row'>
         {noticias.map((noticia) => (
            <Noticia />
         ))}
      </div>
   );
};

export default ListaNoticias;
