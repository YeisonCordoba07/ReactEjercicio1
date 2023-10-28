import { BotonRedes } from "@/componentes/BotonRedes";
import { ImFacebook, ImLinkedin2, ImYoutube, ImDribbble } from "react-icons/im";
import {SiReplit} from "react-icons/si";
import { BsGithub } from "react-icons/bs";





const AsideRedesSociales = () => {

    return (

        <aside className="w-24 flex flex-col items-center pt-10 bg-white">

            <div className="w-24 flex flex-col items-center fixed">

                <span className="mb-4 text-lg font-extrabold">Links</span>

                <ul className="flex flex-col justify-center gap-4">
                    <li>
                        <BotonRedes
                            Icono={BsGithub}
                            enlace="https://github.com/YeisonCordoba07?tab=repositories"
                            colorFondo="rgb(155 155 155)"
                        />
                    </li>
                    <li>
                        <BotonRedes
                            Icono={SiReplit}
                            enlace="https://replit.com/@YeisonCordoba07"
                            colorFondo="#EE9322"
                        />
                    </li>


                </ul>

            </div>


        </aside>

    );
}

export {AsideRedesSociales};