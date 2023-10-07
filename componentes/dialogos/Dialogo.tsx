import { Dialog } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface EntradasDialogo {
    open: boolean;
    setCerrarDialogo: Dispatch<SetStateAction<boolean>>;
}

const Dialogo = ({ open, setCerrarDialogo }: EntradasDialogo) => {
    return (

        <Dialog open={open} onClose={() => setCerrarDialogo(false)} className="w-96 m-auto">

            <DialogTitle className="relative flex justify-center items-center">

                <h3 className="font-extrabold text-2xl">Visita mi github</h3>

                <button onClick={() => { setCerrarDialogo(false) }} className="bg-amber-500 px-1 py-1 rounded-full absolute top-2 right-2 hover:duration-200 hover:scale-125">
                    <IoClose />
                </button>

            </DialogTitle>

            <DialogContent className="">
                
                <div className="flex flex-col justify-center items-center p-7">
                    {/*<EnlaceVerMas abrirDialogo={() => {setCerrarDialogo(false)}}/>*/}
                    <a target="_blank" href="https://www.github.com/YeisonCordoba07">

                        <Image src="/githubLogo.png" alt="" width={210} height={200} className="hover:duration-300 hover:scale-110 " />
                    </a>

                </div>
            </DialogContent>
        </Dialog>
    );
}

export { Dialogo };