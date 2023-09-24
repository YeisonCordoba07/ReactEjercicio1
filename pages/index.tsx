import Image from "next/image";
import { ImFacebook, ImLinkedin2, ImYoutube, ImDribbble } from "react-icons/im";
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
    <main className="flex gap-7 bg-slate-200 m-auto w-[1440px] justify-center">
      <aside className="w-[305px] px-10 bg-white">
        <div className="flex flex-col items-center separacion-section-info">
          <Image
            className="rounded-full"
            src="/YeisonIA.png"
            height={150}
            width={150}
            alt="Foto de perfil"
          />

          <span className="text-lg font-medium">Rayan Adlardard</span>
          <p className="texto-normal-gris">Front-End Developer</p>
        </div>

        <div className="flex flex-col items-center separacion-section-info w-full">
          <TextoInformacion nombreInfo="Age:" valorInfo="24" />
          <TextoInformacion nombreInfo="Residence:" valorInfo="BD" />
          <TextoInformacion nombreInfo="Freelance" valorInfo="Available" />
          <TextoInformacion
            nombreInfo="Address:"
            valorInfo="Dhaka,Bangladesh"
          />
        </div>

        <div className="flex flex-col w-full  separacion-section-info">
          <span className="subtitulos">Languages</span>
          <BarraProgreso nombre="Bangla" porcentaje="100" />
          <BarraProgreso nombre="English" porcentaje="80" />
          <BarraProgreso nombre="Spanish" porcentaje="60" />
        </div>

        <div className="flex flex-col w-full separacion-section-info">
          <span className="subtitulos">Programming Languages</span>
          <BarraProgreso nombre="Html" porcentaje="90" />
          <BarraProgreso nombre="CSS" porcentaje="85" />
          <BarraProgreso nombre="Js" porcentaje="80" />
          <BarraProgreso nombre="PHP" porcentaje="75" />
          <BarraProgreso nombre="WordPress" porcentaje="85" />
        </div>

        <div className="flex flex-col separacion-section-info w-full">
          <span className="subtitulos">Extra Skills</span>

          <Habilidades
            Icono={PiIntersectSquareFill}
            texto="Boostrap, Materialize"
          />
          <Habilidades
            Icono={PiIntersectSquareFill}
            texto="Stylus, Sass, Less"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </p>

            <button className="bg-amber-500 w-40 h-14 rounded-md text-xl font-medium">
              HIRE ME{" "}
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
            titulo="My Knowledge"
            descripcion="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
          />
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full h-[550px]">
          <Conocimientos
            rutaImagen="/1-Monitor2.svg"
            titulo="Web Development"
            detalles="Blog, R-Commerce"
          />

          <Conocimientos
            rutaImagen="/2-Monitor-diseno.svg"
            titulo="UI/UX Design"
            detalles="Mobile App, Website Design"
          />
          <Conocimientos
            rutaImagen="/3-Microphone.svg"
            titulo="Sound Design"
            detalles="Voice Over, Beat Making"
          />
          <Conocimientos
            rutaImagen="/4-Diseno.svg"
            titulo="Game Design"
            detalles="Character Design, Props & Objects"
          />
          <Conocimientos
            rutaImagen="/5-Persona.svg"
            titulo="Photography"
            detalles="Portrait, Product Photography"
          />
          <Conocimientos
            titulo="Advertising"
            detalles="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi"
            textoBoton="Order by"
          />
        </div>







        <section>
          <div className="py-16 px-64 text-center bg-inherit">
            <EntradasEncabezado
              titulo="Education"
              descripcion="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            />
          </div>

          <section className="flex flex-col px-10 bg-white rounded-sm">
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
              descripcion="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            />
          </div>




          <section className="flex gap-8">

            <Proyecto titulo="How To Make Web Tempates"
            descripcion="Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
            Nulla Diam In Ac Dictum A Urna"
            textoBoton="Ver mas"
            Icono={IoIosArrowForward}/>

            <Proyecto titulo="How To Make Web Tempates"
            descripcion="Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
            Nulla Diam In Ac Dictum A Urna"
           
            Icono={IoIosArrowForward}/> 

            <Proyecto titulo="Web Tempates"
            descripcion="Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
            Nulla Diam In Ac Dictum A Urna"
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







      <aside className="w-24 flex flex-col items-center pt-20 bg-white">
        <span className="mb-4 text-lg font-bold">Links</span>

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
