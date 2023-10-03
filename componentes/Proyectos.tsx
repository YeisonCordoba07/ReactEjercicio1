import Image from "next/image";
import { EnlaceVerMas } from "@/componentes/EnlaceVerMas";

interface EntradasProyecto {
  imagen: string;
  titulo: string;
  descripcion: string;
  textoEnlace?: string;
}

const Proyecto = ({ imagen, titulo, descripcion, textoEnlace}: EntradasProyecto) => {
  const textoE = textoEnlace ? textoEnlace : "Ver-mas";
  return (

    <article className="flex flex-col gap-2 w-[310px] h-[520px] bg-white items-center">
      <Image src={imagen} alt="" width={500} height={300} className="bg-cover" />

      <div className="flex flex-col px-7  py-4 gap-3 justify-between">
        <h4 className="subtitulos">{titulo}</h4>

        <p className="texto-normal-gris">
          {descripcion}
        </p>

        <EnlaceVerMas  textoEnlace={textoE} />
      </div>
    </article>

  );
}

export { Proyecto };

