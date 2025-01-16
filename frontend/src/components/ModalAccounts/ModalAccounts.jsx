import { ModalContext } from "../../context/ModalContext"
import { useContext, useState } from "react"
import './ModalAccounts.css'


const ModalAccounts = () => {

   const { setModal } = useContext(ModalContext);
   const [ copied, setCopied ] = useState(false);

   const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 1000);
   }

   return (
      <div className="flex flex-col w-11/12 rounded-md overflow-y-scroll shadow-md h-full
         md:w-[640px] md:h-5/6 md:self-center
         lg:w-[720px]">

         <header className="relative flex flex-col items-center justify-start gap-2 w-full rounded-t-md
            bg-green bg-no-repeat bg-cover bg-bottom ">
            <div className="h-[150px] md:h-[150px] lg:h-[150px] flex pt-[4vh]">
               <h2 className="text-2xl font-semibold text-center text-white z-50
                  lg:text-3xl">
                  ¿No sabés qué <br className="md:hidden"></br> regalarnos?
               </h2>
            </div>
            <img 
               onClick={ () => setModal( false ) }
               src="./assets/images/btn-close.png" 
               alt=" Boton cerrar " 
               className="absolute top-4 right-4 h-10 cursor-pointer rounded-md z-50
                  transition-all delay-50 duration-150 hover:cursor-pointer hover:scale-90 hover:drop-shadow-md hover:rotate-90" 
            />
            <img src="./assets/images/cbu-header-pieces-03.png" alt="Gift animation" className="h-16 absolute -bottom-1 right-5 jumping-element lg:h-20 lg:-bottom-4 lg:right-12" />
            <img src="./assets/images/cbu-header-pieces-06.png" alt="Star animation" className="h-4 absolute top-2 left-12 jumping-element-reverse lg:h-5 lg:top-5 lg:left-20" />
            <img src="./assets/images/cbu-header-pieces-04.png" alt="Coins animation" className="h-10 absolute top-16 left-2 jumping-element-reverse lg:h-16 lg:top-16 lg:left-12" />
         
         </header>

         <main className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'>

            {/* Patagonia Bank Section */}
            <article className="flex flex-col gap-2 w-full
            lg:w-[450px]">
               <section className="flex items-center gap-2">
                  <img src="./assets/images/green-arrows-icon.png" alt="" className='h-6'/>
                  <h2 className='font-semibold text-base'>BANCO MACRO</h2>
               </section>
               <div className="flex flex-col gap-1.5">
                  <div className='flex-wrap'>
                     <span className='italic'>Titular :</span>
                     <span className='font-semibold'> Fausto Martín Díaz</span>
                  </div>
                  <div className='flex items-center gap-2 flex-wrap'>
                     <span className='italic'>Alias :</span>
                        <div className='flex items-center gap-2'>
                           <span className='font-semibold'> DIAZ.FAUSTO.MARTIN</span>
                        </div>
                        <button
                           className="group relative inline-flex " >
                           <img 
                              onClick={ () => copyToClipboard('DIAZ.FAUSTO.MARTIN') } 
                              src="./assets/images/copy-icon.png" 
                              alt=" Boton copiar " 
                              title='Copiar' 
                              className='h-6 cursor-pointer
                              transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                           <div className="hidden group-hover:block">
                              <div
                                 className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-cream before:-top-2">
                                 <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-sky' : 'bg-green' }`}>
                                    <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                                 </div>
                              </div>
                           </div>
                        </button>
                  </div>
                  <div className='flex-wrap'>
                     <span className='italic'>CUIL :</span>
                     <span className='font-semibold'> 20392698842</span>
                  </div>
                  <div className='flex items-center gap-2 flex-wrap'>
                     <span className='italic'>CBU :</span>
                     <div className='flex items-center gap-2'>
                        <span className='font-semibold'> 2850508440095245512678</span>
                        <button
                           className="group relative inline-flex " >
                           <img 
                              onClick={ () => copyToClipboard('2850508440095245512678') } 
                              src="./assets/images/copy-icon.png" 
                              alt=" Boton copiar " 
                              title='Copiar' 
                              className='h-6 cursor-pointer
                              transition origin-bottom-left duration-300 ease-in-out hover:scale-110 hover:rotate-3' />
                           <div className="hidden group-hover:block">
                              <div
                                 className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-[#EAE8E4] before:-top-2">
                                 <div className={`rounded-md py-1 px-2 ${ copied ? 'bg-sky' : 'bg-green' }`}>
                                    <p className="whitespace-nowrap">{ copied ? 'Copiado!' : 'Copiar' }</p>
                                 </div>
                              </div>
                           </div>
                        </button>
                     </div>
                  </div>
               </div>
            </article>



               <article className='flex flex-col gap-3 items-center mt-2'>
                  <hr className='w-48 border border-[#5D7551]' />
                  <h2 className='text-lg font-medium'>¡Desde ya mil gracias!</h2>
               </article>

         </main>

      </div>
   )
}

export default ModalAccounts
