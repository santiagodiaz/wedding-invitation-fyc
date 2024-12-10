import './Button.css'
import AnimatedElement from "../AnimatedElement/AnimatedElement"
import { ModalContext } from "../../context/ModalContext"
import { useContext } from "react"

const Button = ( { buttonText, colorCode, url, action, disabled } ) => {
   
   const { setModal, setConfirmationModal, setWeatherModal, sent } = useContext(ModalContext);

   const handleForm = () => {
      switch(action) {
         case 'openWeatherModal':
            setWeatherModal(true);
            break;
         case 'openConfirmationModal':
            setConfirmationModal(true);
            break;
         case 'openInfoModal':
            setModal(true);
            break;
      }
   };

   const handleUrl = (url) => {
      const urlMapping = {
         calendar: 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Juli%20%26%20Santi%20💍&dates=20250208/20250209&details=¡Nos%20casamos!%20y%20sí,%20obviamente%20que%20estás%20invitado.%0A%0AA%20tener%20en%20cuenta%20%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%92El%20%C2%A1S%C3%AD!%20de%20la%20iglesia%20lo%20damos%20a%20las%2017%20p.m,%20en%20la%20iglesia%20de%20Chacras%0A%F0%9F%A5%82El%20brindis%20empieza%20a%20las%2019%20p.m%20en%20la%20finca%20AMproS,%20Maip%C3%BA%0A%F0%9F%8E%89%20La%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20cómodos%20para%20darlo%20todo.%0A%0AF%26F',
         salon: 'https://www.google.com.ar/maps/place/Estaci%C3%B3n+F%C3%A1tima+Eventos/@-34.4357758,-58.9949254,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc820b778e6a25:0x9cde5ab639d2b44b!8m2!3d-34.4357758!4d-58.9923505!16s%2Fg%2F11b7vw80hs?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D',
         church: 'https://www.google.com.ar/maps/place/Nuestra+Se%C3%B1ora+del+Perpetuo+Socorro/@-32.9861458,-68.8823416,19.5z/data=!4m14!1m7!3m6!1s0x967e0aed5218d66d:0x7764b4bce40bb3a3!2sMazzolari+11,+Luj%C3%A1n+de+Cuyo,+Mendoza!3b1!8m2!3d-32.9861862!4d-68.8818644!3m5!1s0x967e0aed5a60252d:0xfdad166df1aef71f!8m2!3d-32.9859832!4d-68.8816163!16s%2Fg%2F11b6nrlfd4?entry=ttu',
         spotify: 'https://open.spotify.com/playlist/4zl9JhttxJvAHzJlsdpdaH?si=0GFA5u-NSWioFO1CdJKjnQ&pt=b551f3fa503654f904ea51fb78d9a555',
      };
      if (url in urlMapping) {
         setTimeout(() => {
            window.location.href = urlMapping[url];
         }, 500);
      }
   };

   return (
      <AnimatedElement>
         <button 
            onClick={ url ? () => handleUrl(url) : handleForm }
            disabled={ sent }
            type="button" 
            className={` unselectable w-64 text-lg active:bg-green-dark
            ${colorCode}
            ${ colorCode === 'bg-mustard' ? 'btn-special' : 'btn-normal' }  `}
         >
            { buttonText }
         </button>
      </AnimatedElement>
   )
}

export default Button