interface EntradasCertificados {
    titulo1: string;
    descripcion1: string;
    fecha: string;
    titulo2: string;
    descripcion2: string;
}

const Certificados = ({ titulo1, descripcion1, fecha, titulo2, descripcion2 }: EntradasCertificados) => {

    return (
        <div className="flex justify-between border-b border-gray-200 border-solid w-[890px] h-[220px] py-10">

            <div className="flex flex-col w-5/12">
                <h4 className="subtitulos pb-5">  {titulo1}
                </h4>

                <div className="flex">
                    <p className="texto-normal-negro mr-4">{descripcion1}</p>

                    <div className="flex bg-amber-400 justify-center items-center px-2">
                        <span className="text-xs font-bold text-white">{fecha}</span>
                    </div>
                    
                </div>

            </div>

            <div className="flex flex-col w-7/12">

                <h4 className="subtitulos pb-5">  {titulo2}
                </h4>

                <p className="texto-normal-gris">{descripcion2}</p>

            </div>
        </div>
    );
}

export {Certificados};