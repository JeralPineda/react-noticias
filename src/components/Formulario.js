import styles from './Formulario.module.css';
import useSelect from './hooks/useSelect';

const Formulario = () => {
   const opciones = [
      { value: 'general', label: 'General' },
      { value: 'business', label: 'Negocios' },
      { value: 'entertainment', label: 'Entretenimiento' },
      { value: 'health', label: 'Salud' },
      { value: 'science', label: 'Ciencia' },
      { value: 'sports', label: 'Deportes' },
      { value: 'technology', label: 'Tecnología' },
   ];

   // utilizar custom hooks
   const [categoria, SelectNoticias] = useSelect('general', opciones);

   return (
      <div className={`${styles.buscador} row`}>
         <div className='col s12 m8 offset-m2'>
            <form>
               <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

               <SelectNoticias />

               <div className='input-field col s12'>
                  <button
                     //
                     type='submit'
                     className={`${styles.btn_block} btn-large green darken-2`}
                     value='Buscar'
                  >
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Formulario;
