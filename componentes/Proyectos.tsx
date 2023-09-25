import Image from "next/image";
import { IconType } from "react-icons";

interface EntradasProyecto{
    titulo: string;
    descripcion: string;
    textoBoton?: string;
    Icono: IconType;
}

const Proyecto = ({titulo, descripcion, textoBoton, Icono}: EntradasProyecto) => {
    const textoB = textoBoton ? textoBoton: "Ver-mas"; 
    return (

        <article className="flex flex-col gap-2 w-[310px] h-[520px] bg-white items-center">
        <Image src="/ImageP.png" alt="" width={310} height={300} />

        <div className="flex flex-col px-7  py-4 gap-3 justify-between">
          <h4 className="subtitulos">{titulo}</h4>

          <p className="texto-normal-gris">
            {descripcion}
          </p>

          <a
            className="text-amber-400 text-lg flex items-center"
            href="#"
          >
            <span className="font-semibold items-center pr-2">
              {textoB}
            </span>
            <Icono />
          </a>
        </div>
      </article>

    );
}

export {Proyecto};

