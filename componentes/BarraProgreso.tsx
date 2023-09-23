import { TextoInformacion } from "./TextoInformacion";

interface EntradasBarraProgreso{
    nombre: string;
    porcentaje: string;
}

const BarraProgreso = ({nombre, porcentaje}:EntradasBarraProgreso) =>{
    const auxPorcentaje = `${porcentaje}%`;
    return(
        <div className="flex flex-col w-ful bg-emerald-600 style=height:10px">

            <TextoInformacion nombreInfo={nombre} valorInfo={porcentaje}/>

            {/*<progress className="w-full" id="file" max="100" value={porcentaje}>{porcentaje}</progress> */}

            <div className="flex w-full h-3 bg-amber-200 border-solid border-amber-500 border-1 rounded-full p-1 items-center justify-start" 
            style={{height: "13px", padding: "5px"}}>
              

                <div className="bg-amber-500 flex h-1 w-1 rounded-l-full border-solid" 
                style={{ width: auxPorcentaje, height: "5px"}}>
                   
                </div>

            </div>

        </div>
    );

}

export {BarraProgreso};