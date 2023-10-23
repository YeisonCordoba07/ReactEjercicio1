
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";


//Componentes

import { EntradasEncabezado } from "@/componentes/Encabezado";
import { Conocimientos } from "@/componentes/Conocimientos";
import { Certificados } from "@/componentes/Certificados";
import { Proyecto } from "@/componentes/Proyectos";
import { Dialogo } from "@/componentes/dialogos/Dialogo";
import { useState } from "react";
import { AsideRedesSociales } from "@/componentes/AsideRedesSociales";
import { AsideInformacion } from "@/componentes/AsideInformacion";




const Index = () => {


    const [cambiarDialogo, setCambiarDialogo] = useState<boolean>(false)

    const abrirDialogo = () => {
        setCambiarDialogo(true);
    }

    return (
        <main className="flex gap-7 bg-slate-200 m-auto w-[1440px] justify-center relative">




            <AsideInformacion />





            <section className="w-[970px] h-[467]">
                <div className="gap-9 flex flex-row bg-white rounded-sm">
                    <div className="flex flex-col gap-9 w-2/3 p-11">
                        <h1 className="text-5xl font-bold">
                            Soy Yeison Cordoba{" "}
                            <span className="text-amber-400 font-bold">Front-end</span>{" "}
                            Developer
                        </h1>

                        <p className="texto-normal-gris">
                            Me gusta el desarrollo web, he creado diferentes páginas. Tengo habilidades en edición de videos e imagenes, creación de objetos en 3d y creación de videojuegos.
                        </p>

                        <button onClick={abrirDialogo} className="flex justify-center items-center bg-amber-400 w-40 h-14 rounded-md hover:bg-amber-500 hover:scale-110 hover:duration-300">
                            <span className="text-xl font-medium mr-2 uppercase ">Click me</span><ImArrowRight2 />{" "}
                        </button>
                    </div>

                    <Image
                        className="h-2/5"
                        src="/YeisonIA2.png"
                        height={400}
                        width={400}
                        alt="Foto de perfil"
                    />
                </div>

                <div className="py-16 px-64 text-center bg-inherit">
                    <EntradasEncabezado
                        titulo="Conocimientos"
                        descripcion="Estos son algunas de las habilidades y conocimientos que he adquirido a traves de años."
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
                        textoEnlace="Ver mas"
                        abrirDialogo={abrirDialogo}
                    />
                </div>







                <section>
                    <div className="py-16 px-64 text-center bg-inherit">
                        <EntradasEncabezado
                            titulo="Educación"
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
                            fecha="Jan 1016 - Dec 2021"
                            titulo2="Certificate of web training"
                            descripcion2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
                        />

                        <Certificados
                            titulo1="University Of Toronto"
                            descripcion1="Student"
                            fecha="Jan 1016 - Dec 2021"
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



                    <section className="flex gap-8 overflow-auto">

                        <Proyecto imagen="/correos.jpg"
                            titulo="Página de correos"
                            descripcion="Un proyecto que hice para practicar. Consiste en replicar algunas páginas existentes."
                            textoEnlace="Ver mas"
                            enlace="https://desarrollowebejercicio7--yeisoncordoba07.repl.co/"
                            abrirDialogo={abrirDialogo} />

                        <Proyecto imagen="/mercadolibre.jpg"
                            titulo="Página de Mercado Libre"
                            descripcion="Un proyecto que hice para practicar. Consiste en replicar algunas páginas existentes."
                            enlace="https://desarrollowebejercicio8--yeisoncordoba07.repl.co/"
                            abrirDialogo={abrirDialogo} />

                        <Proyecto imagen="/masterclass.PNG"
                            titulo="Página de Master Class"
                            descripcion="Un proyecto que hice para practicar. Consiste en replicar algunas páginas existentes."
                            textoEnlace="Click aca"
                            enlace="https://desarrollowebejercicio4.yeisoncordoba07.repl.co"
                            abrirDialogo={abrirDialogo} />

                        <Proyecto imagen="/automatadepila2.jpg"
                            titulo="Automata de pila"
                            descripcion="Automa que acepta lenguaje de la forma {a (b^n) c (b^n) / n >= 0}."
                            textoEnlace="Click aca"
                            enlace="https://l5-automatadepila--yeisoncordoba07.repl.co/"
                            abrirDialogo={abrirDialogo} />

                    </section>








                </section>

                <footer className="w-[970px] h-20 bg-white rounded-sm flex justify-center items-center mt-12">
                    <span className="subtitulos">Por Yeison Alexander Cordoba Mena</span>
                </footer>
            </section>




            <AsideRedesSociales />



            <Dialogo open={cambiarDialogo} setCerrarDialogo={setCambiarDialogo} />



        </main>

    );
};

export default Index;
