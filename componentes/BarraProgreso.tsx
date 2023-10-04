import { TextoInformacion } from "./TextoInformacion";

interface EntradasBarraProgreso{
    nombre: string;
    porcentaje: string;
}

const BarraProgreso = ({nombre, porcentaje}:EntradasBarraProgreso) =>{
    const auxPorcentaje = `${porcentaje}%`;
    return(
        <div className="flex flex-col w-ful">

            <TextoInformacion nombreInfo={nombre} valorInfo={porcentaje}/>

            <div className="flex w-full bg-amber-200 border-solid border-amber-500 rounded-full p-1 items-center justify-start" 
            style={{height: "13px", padding: "5px"}}>

                <div className="bg-amber-500 flex  rounded-l-full border-solid" 
                style={{ width: auxPorcentaje, height: "5px"}}>
                   
                </div>

            </div>

        </div>
    );

}

export {BarraProgreso};