import { IconType } from "react-icons";


interface EntradasHabilidades{
    Icono: IconType;
    texto: string;
}

const Habilidades = ({Icono, texto}: EntradasHabilidades) =>{
    return(

        <div className="flex flex-row w-full gap-4 items-center">
            <Icono className="text-amber-400 w-6 h-6"/>
            <p className="texto-normal-gris">{texto}</p>
        </div>

    );
}

export {Habilidades};