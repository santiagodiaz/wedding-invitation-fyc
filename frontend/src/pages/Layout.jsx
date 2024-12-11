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
         <section className="relative flex flex-col items-center w-full h-[100vh] text-sm bg-white pt-8 px-8 overflow-hidden z-20">
            <Portrait />
            <MainHeadline />
            <CurvedTopSection bgColor={"bg-white"} />
         </section>

         {/* 2° Countdown, maps and schelude section --------------------------------------- */}
         <section className="relative flex flex-col items-center justify-center w-full bg-white h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20">

            <Countdown />
            <Button
               buttonText={ 'Agendar' }
               colorCode={"bg-sky"}
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
                     header={"Ceremonia + Fiesta | 18:00hs"}
                     subtitle={"Estación Fátima"}
                     lineColorCode={"border-green"}
                     textColorCode={"text-black"}
                  >
                     Isla Jorge 290, Pilar
                  </InfoSection>
                  <Button
                     buttonText={"¿Cómo llego?"}
                     colorCode={"bg-sky"}
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
                     ¿El mejor regalo? tu presencia, pero si querés cumplirnos un sueño hacé click.

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     colorCode={'bg-sky'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>


            </SectionContainer>

         </section>

         {/* 3° Music & clothes section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-fit text-sm bg-gray-dark px-8 pt-20 pb-32 z-20
            lg:pb-40">
            <CurvedBottomSection bgColor={"bg-white"} />

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
                        subtitle={'Dresscode: Cocktail'}
                        lineColorCode={'border-green'}
                     >
                        Vos metele comodidad porque, oxidados o no, vamos a bailar.
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
                     header={"#ModoDJ"}
                     lineColorCode={'border-green'}
                  >
                     Ayudanos a armar la lista y no dejar afuera ningún tema de esos que te hacen darlo todo.
                  </InfoSection>
                  <Button
                     buttonText={"Añadir tu tema"}
                     widthClass={"w-64"}
                     colorCode={"bg-sky"}
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
                     header={'¿Venís?'}
                     lineColorCode={'border-green'}
                  >
                     Esperamos que puedas acompañarnos.
                     PD: Si no confirmás nos dolerá
                     el bolsillo (y el alma).

                  </InfoSection>
                  <Button
                     buttonText={'Confirmar asistencia'}
                     
                     colorCode={'bg-white'}
                     action={'openConfirmationModal'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <CurvedTopSection bgColor={"bg-white"} />
         </section>

         {/* 4° Confirmation section --------------------------------------- */}
         <section className="relative flex flex-col items-center h-fit w-full text-sm bg-white px-8 z-20
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
                     header={'¿Venís?'}
                     lineColorCode={'border-green'}
                     textColorCode={'text-gray-dark'}
                  >
                     Esperamos que puedas acompañarnos.
                     PD: Si no confirmás nos dolerá
                     el bolsillo (y el alma).

                  </InfoSection>
                  <Button
                     buttonText={ sent ? 'Formulario enviado' : 'Confirmar asistencia' }
                     disabled={ sent }
                     colorCode={'bg-sky'}
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
                     ¿El mejor regalo? tu presencia,
                     pero si querés ayudarnos con
                     nuestro viaje, hacé click en el botón.

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     
                     colorCode={'bg-sky'}
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