import Image from "next/image";

interface EntradasConocimientos {
    rutaImagen?: string;
    titulo: string;
    detalles: string;
    textoBoton?: string;
}

const Conocimientos = ({ rutaImagen, titulo, detalles, textoBoton }: EntradasConocimientos) => {

    const ruta = rutaImagen ? rutaImagen : "";
    const display = ruta ? "block" : "none";
    const nodisplay = display == "none" ? "block" : "none";

    return (


        <div className="flex flex-col justify-center items-center gap-4 bg-white h-[250px]  p-10 rounded-sm">

            <Image src={ruta}
                height={68}
                width={68} alt=""
                style={{ display }} />

            <span className="subtitulos">{titulo}</span>

            <p className="texto-normal-gris text-center">{detalles}</p>

            <span style={{ display: nodisplay }} className="text-amber-500 font-bold text-x uppercase">
                {textoBoton}{">"}
            </span>

        </div>
    );
}

export { Conocimientos };