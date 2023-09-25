import { IconType } from "react-icons";

interface ButtonProps {
    Icono: IconType;
    enlace: string;
    colorFondo?: string;
  }
  
  const BotonRedes = ({ Icono, enlace, colorFondo }: ButtonProps) => {
    const fondo = colorFondo ? { backgroundColor: colorFondo } : {};
    return (

        <a href={enlace} className='fondo-redes hover:scale-125' style={fondo}>
          <span ><Icono/></span>
        </a>

    );
  };
  
  export { BotonRedes };