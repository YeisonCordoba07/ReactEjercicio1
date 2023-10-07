import { IconType } from "react-icons";

interface ButtonProps {
    Icono: IconType;
    enlace: string;
    colorFondo?: string;
  }
  
  const BotonRedes = ({ Icono, enlace, colorFondo }: ButtonProps) => {
    const fondo = colorFondo ? { backgroundColor: colorFondo } : {};
    return (

        <a target="_blank" href={enlace} className="fondo-redes hover:scale-125 hover:duration-200" style={fondo}>
          <span ><Icono/></span>
        </a>

    );
  };
  
  export { BotonRedes };