import Image from "next/image";
import { EnlaceVerMas } from "./EnlaceVerMas";

interface EntradasConocimientos {
    rutaImagen?: string;
    titulo: string;
    detalles: string;
    textoEnlace?: string;
    abrirDialogo?:() => void;
}

const Conocimientos = ({ rutaImagen, titulo, detalles, textoEnlace, abrirDialogo = () => {}}: EntradasConocimientos) => {

    const ruta = rutaImagen ? rutaImagen : "";
    const display = ruta ? "block" : "none";
    const mostrar = textoEnlace ? true : false;

    return (


        <div className="flex flex-col justify-center items-center gap-4 bg-white h-[250px]  p-10 rounded-sm">

            <Image src={ruta}
                height={68}
                width={68} alt=""
                style={{ display }} />

            <span className="subtitulos">{titulo}</span>

            <p className="texto-normal-gris text-center">{detalles}</p>

            {mostrar && <EnlaceVerMas  textoEnlace={textoEnlace} abrirDialogo={abrirDialogo}/>}

        </div>
    );
}

export { Conocimientos };