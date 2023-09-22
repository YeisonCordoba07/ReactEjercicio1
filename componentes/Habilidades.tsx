import { IconType } from "react-icons";


interface EntradasHabilidades{
    Icono: IconType;
    texto: string;
}

const Habilidades = ({Icono, texto}: EntradasHabilidades) =>{
    return(

        <div className="flex flex-row w-full gap-4">
            <Icono />
            <p className="texto-normal-gris">{texto}</p>
        </div>

    );
}

export {Habilidades};