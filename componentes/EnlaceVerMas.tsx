import {IconType} from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

interface EnlaceVerMas{
    textoEnlace?: string;
}

const EnlaceVerMas = ({textoEnlace}:EnlaceVerMas) =>{
    const textoE = textoEnlace ? textoEnlace: "Ver-mas";
    return (
        <a
        className="text-amber-400 text-lg flex items-center hover:text-amber-600 w-fit"
        href="#"
      >
        <span className="font-semibold items-center pr-2 ">
          {textoE}
        </span>
        <IoIosArrowForward />
      </a>
    );
}


export {EnlaceVerMas};