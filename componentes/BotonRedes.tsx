import { IconType } from "react-icons";

interface ButtonProps {
    Icono: IconType;
  }
  
  const BotonRedes = ({ Icono }: ButtonProps) => {
    return (
      <button className='rounded-full px-15 py-15' >
        <Icono />
      </button>
    );
  };
  
  export { BotonRedes };