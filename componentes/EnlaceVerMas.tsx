import {IconType} from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

interface EnlaceVerMas{
    textoEnlace?: string;
    enlace?: string;
}

const EnlaceVerMas = ({textoEnlace, enlace}:EnlaceVerMas) =>{
    const auxTextoEnlace = textoEnlace ? textoEnlace: "Ver-mas";
    const auxEnlace = enlace ? enlace : "#";
    return (
        <a
        className="text-amber-400 text-lg flex items-center hover:text-amber-600 w-fit"
        href={auxEnlace}
      >
        <span className="font-semibold items-center pr-2 ">
          {textoEnlace}
        </span>
        <IoIosArrowForward />
      </a>
    );
}


export {EnlaceVerMas};