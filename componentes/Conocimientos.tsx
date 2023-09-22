import { IconType } from "react-icons";

interface EntradasConocimientos{
    Icono: IconType;
    titulo: string;
    detalles: string;
}

const Conocimientos = ({Icono, titulo, detalles}: EntradasConocimientos) => {
    return (

        <div className="flex flex-col justify-center items-center gap-4 bg-white">

            <Icono />
            <span>{titulo}</span>

            <p className="texto-normal-gris">{detalles}</p>
        </div>
    );
}

export {Conocimientos};