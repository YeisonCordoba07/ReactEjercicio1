interface EntradasInformacion {
    nombreInfo: string;
    valorInfo: string;
}

const TextoInformacion = ({nombreInfo, valorInfo}: EntradasInformacion) => {
    return (
        <div className="flex justify-between">
            <p className='texto-normal-negro'>{nombreInfo}</p>
            <p className='texto-normal-negro'>{valorInfo}</p>
        </div>

    );
}

export {TextoInformacion};