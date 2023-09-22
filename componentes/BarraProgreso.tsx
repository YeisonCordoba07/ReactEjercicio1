import { TextoInformacion } from "./TextoInformacion";

interface EntradasBarraProgreso{
    nombre: string;
    porcentaje: string;
}

const BarraProgreso = ({nombre, porcentaje}:EntradasBarraProgreso) =>{

    return(
        <div className="flex flex-col w-full">

            <TextoInformacion nombreInfo={nombre} valorInfo={porcentaje}/>

            <progress className="w-full" id="file" max="100" value={porcentaje}>{porcentaje}</progress>

        </div>
    );

}

export {BarraProgreso};