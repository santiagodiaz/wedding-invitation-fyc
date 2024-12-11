import AnimatedElement from "../AnimatedElement/AnimatedElement"
import './ImageComponent.css'

const ImageComponent = ({ src, alt, margin }) => {
   return (
      <AnimatedElement>
         <section className={ `relative mb-4 ${margin === 'disabled' ? 'mt-1' : 'mt-10'} lg:mt-8` }>

            <div className="flex justify-center items-center h-44">
               <img src={src} alt={alt} className={`relative h-32 `}/>
            </div>

         </section>
      </AnimatedElement>
   );
}

export default ImageComponent;