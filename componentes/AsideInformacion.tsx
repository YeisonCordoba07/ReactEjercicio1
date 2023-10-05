import Image from "next/image";
import React from 'react';

import { TextoInformacion } from "@/componentes/TextoInformacion";
import { BarraProgreso } from "@/componentes/BarraProgreso";
import { Habilidades } from "@/componentes/Habilidades";

import { PiIntersectSquareFill } from "react-icons/pi";


const AsideInformacion = () => {

    return (

        <aside className="w-[305px] bg-white relative justify-center flex">


            <div className="w-[305px] fixed px-10">

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
                </div>

                <div className="flex flex-col items-center separacion-section-info w-full">
                    <TextoInformacion nombreInfo="Pais:" valorInfo="Colombia" />
                    <TextoInformacion nombreInfo="Ciudad:" valorInfo="Medellín" />
                </div>

                <div className="flex flex-col w-full  separacion-section-info">
                    <span className="subtitulos">Idiomas</span>
                    <BarraProgreso nombre="Español" porcentaje="100" />
                    <BarraProgreso nombre="Ingles" porcentaje="65" />

                </div>

                <div className="flex flex-col w-full separacion-section-info">
                    <span className="subtitulos">Lenguajes de Programación</span>
                    <BarraProgreso nombre="Html y CSS" porcentaje="80" />
                    <BarraProgreso nombre="C# y Java" porcentaje="70" />

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
                </div>


            </div>


        </aside>
    );
}


export { AsideInformacion };