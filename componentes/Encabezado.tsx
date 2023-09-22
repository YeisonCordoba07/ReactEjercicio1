interface EntradasEncabezado{
    titulo: string;
    descripcion: string;
}

const EntradasEncabezado = ({titulo, descripcion}: EntradasEncabezado) => {

    return(
        <div className="flex flex-col gap-7">
            <h2 className="text-5xl font-bold">{titulo}</h2>
            <p className="texto-normal-gris">{descripcion}</p>
        </div>

    );
}

export {EntradasEncabezado};