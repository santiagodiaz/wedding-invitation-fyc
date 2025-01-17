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
         calendar: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Casamiento+Caro+%26+Fausto+%F0%9F%92%8D&dates=20250309/20250310&details=Nos+casamos!%0A%0AA+tener+en+cuenta+%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%8D+La+ceremonia+comienza+a+las+13%3A00+hs.+en+Quinta+Aventura',
         salon: 'https://maps.app.goo.gl/eRh9YU3QTEgVtNMs7?g_st=ic',
         church: 'https://www.google.com.ar/maps/place/Nuestra+Se%C3%B1ora+del+Perpetuo+Socorro/@-32.9861458,-68.8823416,19.5z/data=!4m14!1m7!3m6!1s0x967e0aed5218d66d:0x7764b4bce40bb3a3!2sMazzolari+11,+Luj%C3%A1n+de+Cuyo,+Mendoza!3b1!8m2!3d-32.9861862!4d-68.8818644!3m5!1s0x967e0aed5a60252d:0xfdad166df1aef71f!8m2!3d-32.9859832!4d-68.8816163!16s%2Fg%2F11b6nrlfd4?entry=ttu',
         spotify: 'https://open.spotify.com/playlist/71j0j9MsCYKDizfPQtzKZe?si=cR29rrX8TBWYShX1V_PdOw&pt=cc8658d6155afe0f3d197472c9725240&pi=yxDXS9TVR2CLl',
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