
import Image from "next/image";
import { ImFacebook, ImLinkedin2, ImYoutube, ImDribbble, ImArrowRight2 } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { PiIntersectSquareFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

//Componentes
import { BotonRedes } from "@/componentes/BotonRedes";
import { TextoInformacion } from "@/componentes/TextoInformacion";
import { BarraProgreso } from "@/componentes/BarraProgreso";
import { Habilidades } from "@/componentes/Habilidades";
import { EntradasEncabezado } from "@/componentes/Encabezado";
import { Conocimientos } from "@/componentes/Conocimientos";
import { Certificados } from "@/componentes/Certificados";
import { Proyecto } from "@/componentes/Proyectos";




const Index = () => {
  return (
    <main className="flex gap-7 bg-slate-200 m-auto w-[1440px] justify-center relative">

      {/* Parcha un problema con react o tailwind sobre no cargar algunos atribujos css de los componentes */}
      <div className="bg-amber-200 bg-amber-500 bg-white border-b border-gray-200 border-solid border-amber-500 flex flex-col font-semibold justify-between gap-2 gap-3 gap-4 gap-5 h-1 mr-4 h-3 h-[220px] h-[250px] items-center justify-between justify-center p-1 p-10 pb-5 pr-2 px-2 px-7 py-4 py-10 rounded-full rounded-l-full rounded-sm text-4xl text-amber-400 text-amber-500 text-lg text-white text-x text-xs texto-normal-negro uppercase w-1 w-5/12 w-7/12 w-[890px] absolute z-[-10] hidden w-[310px] h-[520px] hover:scale-125 bg-cover"></div>




      <aside className="w-[305px] px-10 bg-white">
        <div className="flex flex-col items-center separacion-section-info">
          <Image
            className="rounded-full"
            src="/YeisonIA.png"
            height={150}
            width={150}
            alt="Foto de perfil"
          />

          <span className="text-lg font-medium">Yeison Cordoba</span>
          <p className="texto-normal-gris text-center">Estudiante de Ingeniería de Sistemas</p>
          <p className="texto-normal-gris text-center">Universidad de Antioquia</p>
        </div>

        <div className="flex flex-col items-center separacion-section-info w-full">
          <TextoInformacion nombreInfo="Correo:" valorInfo="correo@udea.edu.co" />
          <TextoInformacion nombreInfo="Ciudad:" valorInfo="Medellín" />
          <TextoInformacion nombreInfo="Freelance:" valorInfo="Disponible" />
          <TextoInformacion
            nombreInfo="Celular:"
            valorInfo="312-123-4567"
          />
        </div>

        <div className="flex flex-col w-full  separacion-section-info">
          <span className="subtitulos">Idiomas</span>
          <BarraProgreso nombre="Español" porcentaje="100" />
          <BarraProgreso nombre="Ingles" porcentaje="65" />

        </div>

        <div className="flex flex-col w-full separacion-section-info">
          <span className="subtitulos">Lenguajes de Programación</span>
          <BarraProgreso nombre="Html y CSS" porcentaje="80" />       
          <BarraProgreso nombre="C#" porcentaje="70" />
          <BarraProgreso nombre="Java" porcentaje="60" />
          <BarraProgreso nombre="React" porcentaje="50" />
          <BarraProgreso nombre="Python" porcentaje="35" />
          <BarraProgreso nombre="JavaScript" porcentaje="30" />
          
        </div>

        <div className="flex flex-col w-full separacion-section-info">
          <span className="subtitulos">Programas</span>
          <BarraProgreso nombre="Modelado 3d" porcentaje="70" />
          <BarraProgreso nombre="Edición de Video" porcentaje="70" />
          <BarraProgreso nombre="Creación de videojuegos" porcentaje="60" />          
          <BarraProgreso nombre="Edición de imagenes" porcentaje="60" />

          
        </div>

        <div className="flex flex-col separacion-section-info w-full">
          <span className="subtitulos">Otras habilidades</span>

          <Habilidades
            Icono={PiIntersectSquareFill}
            texto="Dibujo"
          />
          <Habilidades
            Icono={PiIntersectSquareFill}
            texto="Uso basico de git"
          />
          <Habilidades
            Icono={PiIntersectSquareFill}
            texto="Gulp, Webpack, Grunt"
          />
          <Habilidades Icono={PiIntersectSquareFill} texto="GIT Knowledge" />
        </div>
      </aside>







      <section className="w-[970px] h-[467]">
        <div className="gap-9 flex flex-row bg-white rounded-sm">
          <div className="flex flex-col gap-9 w-2/3 p-11">
            <h1 className="text-5xl font-bold">
              I'm Yeison Cordoba{" "}
              <span className="text-amber-500 font-bold">Front-end</span>{" "}
              Developer
            </h1>

            <p className="texto-normal-gris">
              Me gusta el desarrollo web, he creado diferentes páginas. Tengo habilidades en edición de videos e imagenes, creación de objetos en 3d y creación de videojuegos.
            </p>

            <button className="flex justify-center items-center bg-amber-400 w-40 h-14 rounded-md hover:bg-amber-500 hover:scale-110">
              <span className="text-xl font-medium mr-2 uppercase">Click me</span><ImArrowRight2/>{" "}
            </button>
          </div>

          <Image
            className="h-2/5"
            src="/YeisonIA.png"
            height={450}
            width={450}
            alt="Foto de perfil"
          />
        </div>

        <div className="py-16 px-64 text-center bg-inherit">
          <EntradasEncabezado
            titulo="Conocimientos"
            descripcion="Estos son algunas de las habilidaes y conocimientos que he adquirido a traves de años."
          />
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full h-[550px]">
          <Conocimientos
            rutaImagen="/1-Monitor2.svg"
            titulo="Programación"
            detalles="Java, C#, Python"
          />

          <Conocimientos
            rutaImagen="/2-Monitor-diseno.svg"
            titulo="Desarrollo web"
            detalles="Página correos.es"
          />
          <Conocimientos
            rutaImagen="/3-Microphone.svg"
            titulo="Edición de video"
            detalles="Davinci Resolve"
          />
          <Conocimientos
            rutaImagen="/4-Diseno.svg"
            titulo="Creación de videojuegos"
            detalles="Unity"
          />
          <Conocimientos
            rutaImagen="/5-Persona.svg"
            titulo="Edición de imagenes"
            detalles="Krita, Inkscape"
          />
          <Conocimientos
            titulo="Otros"
            detalles="Otros conocimientos y habilidades"
            textoBoton="Ver mas"
          />
        </div>







        <section>
          <div className="py-16 px-64 text-center bg-inherit">
            <EntradasEncabezado
              titulo="Educacion"
              descripcion="Cursos, certificados o estudios que he hecho."
            />
          </div>

          <section className="flex flex-col px-10 bg-white rounded-sm">
            <Certificados
              titulo1="Universidad de Antioquia"
              descripcion1="Estudiante"
              fecha="Enero 2017"
              titulo2="Estudiante Ingeniería de Sistemas"
              descripcion2="Estoy estudiando Ingeniería de Sistemas."
            />

            <Certificados
              titulo1="University Of Toronto"
              descripcion1="Student"
              fecha="Jan 1016 ~ Dec 2021"
              titulo2="Certificate of web training"
              descripcion2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
            />

            <Certificados
              titulo1="University Of Toronto"
              descripcion1="Student"
              fecha="Jan 1016 ~ Dec 2021"
              titulo2="Certificate of web training"
              descripcion2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
            />
          </section>








          <div className="py-16 px-64 text-center bg-inherit">
            <EntradasEncabezado
              titulo="Portafolio"
              descripcion="Proyectos que he creado."
            />
          </div>



          <section className="flex gap-8">

            <Proyecto imagen="/correos.jpg"
            titulo="Página de correos"
            descripcion="Un proyecto que hice para prácticar. Consiste en replicar algunas páginas existentes."
            textoBoton="Ver mas"
            Icono={IoIosArrowForward}/>

            <Proyecto imagen="/mercadolibre.jpg"
            titulo="Página de Mercado Libre"
            descripcion="Un proyecto que hice para prácticar. Consiste en replicar algunas páginas existentes."
           
            Icono={IoIosArrowForward}/> 

            <Proyecto imagen="/masterclass.PNG"
            titulo="Página de Master Class"
            descripcion="Un proyecto que hice para prácticar. Consiste en replicar algunas páginas existentes."
            textoBoton="Click acá"
           
            Icono={IoIosArrowForward}/>



          </section>


          <section>

          <div className="py-16 px-64 text-center bg-inherit">
            <EntradasEncabezado
              titulo="Portafolio"
              descripcion="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            />
          </div>

          </section>
        </section>
      </section>







      <aside className="w-24 flex flex-col items-center pt-10 bg-white">
        <span className="mb-4 text-lg font-extrabold">Links</span>

        <ul className="flex flex-col justify-center gap-4">
          <li>
            <BotonRedes
              Icono={ImFacebook}
              enlace="#"
              colorFondo="rgb(59 130 246)"
            />
          </li>

          <li>
            <BotonRedes
              Icono={BsInstagram}
              enlace="#"
              colorFondo="rgb(240 171 252)"
            />
          </li>

          <li>
            <BotonRedes
              Icono={BsTwitter}
              enlace="#"
              colorFondo="rgb(56 189 248)"
            />
          </li>

          <li>
            <BotonRedes
              Icono={ImLinkedin2}
              enlace="#"
              colorFondo="rgb(14 116 144)"
            />
          </li>

          <li>
            <BotonRedes
              Icono={ImYoutube}
              enlace="#"
              colorFondo="rgb(220 38 38)"
            />
          </li>

          <li>
            <BotonRedes
              Icono={ImDribbble}
              enlace="#"
              colorFondo="rgb(249 115 22)"
            />
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default Index;
