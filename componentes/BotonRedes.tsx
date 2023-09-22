import { IconType } from "react-icons";

interface ButtonProps {
    Icono: IconType;
    enlace: string;
    colorFondo?: string;
  }
  
  const BotonRedes = ({ Icono, enlace, colorFondo }: ButtonProps) => {
    const fondo = colorFondo ? { backgroundColor: colorFondo } : {};
    return (

        <div className='fondo-redes' style={fondo}>
          <a href={enlace}><Icono/></a>
        </div>

    );
  };
  
  export { BotonRedes };