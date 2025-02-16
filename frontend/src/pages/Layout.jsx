import Arrows from "../components/Arrows/Arrows"
import Button from "../components/Button/Button"
//import ButtonGift from "../components/ButtonGift/ButtonGift"
import Carousel from "../components/Carousel/Carousel"
import Countdown from "../components/Countdown/Countdown"
import CurvedBottomSection from "../components/CurvedBottomSection/CurvedBottomSection"
import CurvedTopSection from "../components/CurvedTopSection/CurvedSection"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import InfoSection from "../components/InfoSection/InfoSection"
import MainHeadline from "../components/MainHeadline/MainHeadline"
import Portrait from "../components/Portrait/Portrait"
//import Spinner from "../components/Spinner/Spinner"
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import ModalContainer from "../components/ModalContainer/ModalContainer"
import ModalAccounts from "../components/ModalAccounts/ModalAccounts"
import ModalConfirm from "../components/ModalConfirm/ModalConfirm"
import ModalWeather from "../components/ModalWeather/ModalWeather"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import SectionContainerElement from "../components/SectionContainerElement/SectionContainerElement"


const Layout = () => {

   const { modal, confirmationModal, weatherModal, sent } = useContext(ModalContext);

   return (
      <div className={` relative flex flex-col items-center overflow-hidden
         ${confirmationModal || weatherModal || modal ? ' h-screen' : 'h-min-screen'} `
      }>

         {/* <ButtonGift /> --------------------------------------- */}

         {/* Modals --------------------------------------- */}
         <ModalContainer isOpen={ modal }>
            <ModalAccounts />
         </ModalContainer>
         
         <ModalContainer isOpen={ weatherModal }>
            <ModalWeather />
         </ModalContainer>
         
         <ModalContainer isOpen={ confirmationModal }>
            <ModalConfirm />
         </ModalContainer>


         {/* 1° Portrait Section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-[100vh] text-sm bg-cream pt-8 px-8 overflow-hidden z-20">
            <Portrait />
            <MainHeadline />
            <CurvedTopSection bgColor={"bg-cream"} />
         </section>

         {/* 2° Countdown, maps and schelude section --------------------------------------- */}
         <section className="relative flex flex-col items-center justify-center w-full bg-cream h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20">

            <Countdown />
            <Button
               buttonText={ 'Agendar' }
               colorCode={"bg-mustard"}
               url={'calendar'}
            />

            {/* Church and party container ---------- */}
            <SectionContainer>
               {/* Party section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/music-icon.png"}
                     alt={"Icono música"}
                  />
                  <InfoSection
                     header={"Ceremonia y Fiesta | 13:00hs"}
                     subtitle={"Quinta Aventura"}
                     lineColorCode={"border-green"}
                     textColorCode={"text-black"}
                  >
                     Crisólogo Larralde 1256, Moreno
                  </InfoSection>
                  <Button
                     buttonText={"¿Cómo llego?"}
                     colorCode={"bg-mustard"}
                     url={'salon'}
                  />
               </SectionContainerElement>

               {/* Present section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"¿Qué les regalo?"}
                     lineColorCode={"border-green"}
                  >
                     Lo mejor que podés darnos es tu compañía, pero si te copa darnos una mano,
                     cualquier aporte para nuestro futuro juntos será más que bienvenido. 
                     ¡Gracias!

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     colorCode={'bg-mustard'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>


            </SectionContainer>

         </section>

         {/* 3° Music & clothes section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-fit text-sm bg-green px-8 pt-20 pb-32 z-20
            lg:pb-40">
            <CurvedBottomSection bgColor={"bg-cream"} />

            {/* Dress and music container ---------- */}
            <SectionContainer>

               {/* Dress section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/dress-icon.png"}
                     alt={"Icono vestimenta"}
                     margin={"disabled"}
                  />
                  <div className="flex flex-col items-center">
                     <InfoSection
                        header={'¿Qué me pongo?'}
                        subtitle={'Dresscode: Elegante Sport'}
                        lineColorCode={'border-green'}
                     >
                        El look es elegante sport. O sea, ni tan de gala ni tan tranqui,
                        ¡algo intermedio para estar cómodos y bien vestidos para la ocasión!
                     </InfoSection>
                  </div>
               </SectionContainerElement>

               {/* Music section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/dance-icon.png"}
                     alt={"Icono baile"}
                  />
                  <InfoSection
                     header={"¡Sumate como DJ!"}
                     lineColorCode={'border-green'}
                  >
                     Elegí tus temazos en nuestra lista y ayudanos a que la fiesta sea inolvidable.
                  </InfoSection>
                  <Button
                     buttonText={"Añadir tu tema"}
                     widthClass={"w-64"}
                     colorCode={"bg-mustard"}
                     url={'spotify'}
                  />
               </SectionContainerElement>

               {/* Confirmation section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'¿Venís a la fiesta?'}
                     lineColorCode={'border-green'}
                  >
                     Avisanos, así sabemos cuántos fernet preparar. ¡No nos dejes con la duda!

                  </InfoSection>
                  <Button
                     buttonText={'Confirmar asistencia'}
                     
                     colorCode={'bg-cream'}
                     action={'openConfirmationModal'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <CurvedTopSection bgColor={"bg-cream"} />
         </section>

         {/* 4° Confirmation section --------------------------------------- */}
         <section className="relative flex flex-col items-center h-fit w-full text-sm bg-cream px-8 z-20
            sm:pb-24 md:pb-0 md:px-0">

            {/* Confirmation and present container ---------- */}
            <SectionContainer>

               {/* Confirmation section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'¿Venís a la fiesta?'}
                     lineColorCode={'border-green'}
                     textColorCode={'text-gray-dark'}
                  >
                     Avisanos, así sabemos cuántos fernet preparar. ¡No nos dejes con la duda!

                  </InfoSection>
                  <Button
                     buttonText={ sent ? 'Formulario enviado' : 'Confirmar asistencia' }
                     disabled={ sent }
                     colorCode={'bg-mustard'}
                     action={'openConfirmationModal'}
                  />
               </SectionContainerElement>

               {/* Present section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"¿Qué les regalo?"}
                     lineColorCode={"border-green"}
                     textColorCode={"text-gray-dark"}
                  >
                     Lo mejor que podés darnos es tu compañía, pero si te copa darnos una mano,
                     cualquier aporte para nuestro futuro juntos será más que bienvenido. 
                     ¡Gracias!

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     
                     colorCode={'bg-mustard'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>

            </SectionContainer>




         </section>

         {/* 5° Carousel section --------------------------------------- */}



      </div>
   );
}

export default Layout