interface EntradasInformacion {
    nombreInfo: string;
    valorInfo: string;
}

const TextoInformacion = ({nombreInfo, valorInfo}: EntradasInformacion) => {
    return (
        <div className="flex flex-row justify-between w-full">
            <p className='texto-normal-gris'>{nombreInfo} </p>
            <p className='texto-normal-gris'>{valorInfo}</p>
        </div>

    );
}

export {TextoInformacion};