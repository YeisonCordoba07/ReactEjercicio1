import Image from "next/image";
import { IconType } from "react-icons";

interface EntradasProyecto{
    imagen: string;
    titulo: string;
    descripcion: string;
    textoBoton?: string;
    Icono: IconType;
}

const Proyecto = ({imagen, titulo, descripcion, textoBoton, Icono}: EntradasProyecto) => {
    const textoB = textoBoton ? textoBoton: "Ver-mas"; 
    return (

        <article className="flex flex-col gap-2 w-[310px] h-[520px] bg-white items-center">
        <Image src={imagen} alt="" width={500} height={300} className="bg-cover"/>

        <div className="flex flex-col px-7  py-4 gap-3 justify-between">
          <h4 className="subtitulos">{titulo}</h4>

          <p className="texto-normal-gris">
            {descripcion}
          </p>

          <a
            className="text-amber-400 text-lg flex items-center hover:text-amber-600 w-fit"
            href="#"
          >
            <span className="font-semibold items-center pr-2 ">
              {textoB}
            </span>
            <Icono />
          </a>
        </div>
      </article>

    );
}

export {Proyecto};

