import { Dialog } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Dispatch, SetStateAction } from "react";
import { EnlaceVerMas } from "../EnlaceVerMas";

interface EntradasDialogo{
    open: boolean;
    setCerrarDialogo: Dispatch<SetStateAction<boolean>>;
}

const Dialogo = ({open, setCerrarDialogo}:EntradasDialogo) => {
    return(

        <Dialog open={open} onClose={() => setCerrarDialogo(false)}>
            <DialogTitle>
                <span>hola</span>
            </DialogTitle>

            <DialogContent>
                <div>
                    <span>contenido</span>
                    {/*<EnlaceVerMas abrirDialogo={() => {setCerrarDialogo(false)}}/>*/}

                    <button onClick={() => {setCerrarDialogo(false)}}>Close</button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export {Dialogo};