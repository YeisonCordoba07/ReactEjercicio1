import Image from "next/image";
import { EnlaceVerMas } from "@/componentes/EnlaceVerMas";

interface EntradasProyecto {
  imagen: string;
  titulo: string;
  descripcion: string;
  textoEnlace?: string;
  enlace?: string;
  abrirDialogo: () => void;
}

const Proyecto = ({ imagen, titulo, descripcion, textoEnlace, enlace, abrirDialogo = () => {}}: EntradasProyecto) => {
  const textoE = textoEnlace ? textoEnlace : "Ver-mas";
 
  return (

    <article className="flex flex-col gap-2 w-[310px] h-[474px] bg-white items-center overflow-hidden min-w-[310px]">
      <a target="_blank" href={enlace}>
      <Image src={imagen} alt="" width={310} height={300} className="bg-cover hover:brightness-75 hover:duration-300 hover:scale-110" />
      </a>


      <div className="flex flex-col px-7  py-4 gap-4 justify-between">
        <h4 className="subtitulos">{titulo}</h4>

        <p className="texto-normal-gris h-16 ">
          {descripcion}
        </p>

        <EnlaceVerMas textoEnlace={textoE} enlace={enlace} abrirDialogo={abrirDialogo}/>
      </div>
    </article>

  );
}

export { Proyecto };

