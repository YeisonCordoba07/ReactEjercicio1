import { IoIosArrowForward } from "react-icons/io";

interface EnlaceVerMas {
  textoEnlace?: string;
  enlace?: string;
  abrirDialogo: () => void;
}

const EnlaceVerMas = ({ textoEnlace, enlace, abrirDialogo = () => { } }: EnlaceVerMas) => {
  const auxTextoEnlace = textoEnlace ? textoEnlace : "Ver-mas";
  const auxEnlace = enlace ? enlace : "#";

  return (
    <button onClick={abrirDialogo}
      className="text-amber-400 text-lg flex items-center hover:text-amber-600 w-fit">

      <span className="font-semibold items-center pr-2 ">
        {textoEnlace}
      </span>

      <IoIosArrowForward />
    </button>
  );
}


export { EnlaceVerMas };