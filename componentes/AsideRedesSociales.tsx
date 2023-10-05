import { BotonRedes } from "@/componentes/BotonRedes";
import { ImFacebook, ImLinkedin2, ImYoutube, ImDribbble } from "react-icons/im";
import {SiReplit} from "react-icons/si";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";





const AsideRedesSociales = () => {

    return (

        <aside className="w-24 flex flex-col items-center pt-10 bg-white">

            <div className="w-24 flex flex-col items-center fixed">

                <span className="mb-4 text-lg font-extrabold">Links</span>

                <ul className="flex flex-col justify-center gap-4">
                    <li>
                        <BotonRedes
                            Icono={BsGithub}
                            enlace="https://www.github.com/YeisonCordoba07"
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

                    <li>
                        <BotonRedes
                            Icono={BsInstagram}
                            enlace="https://www.instagram.com/"
                            colorFondo="rgb(240 171 252)"
                        />
                    </li>

                    <li>
                        <BotonRedes
                            Icono={BsTwitter}
                            enlace="https://www.x.com/"
                            colorFondo="rgb(56 189 248)"
                        />
                    </li>

                    <li>
                        <BotonRedes
                            Icono={ImLinkedin2}
                            enlace="https://www.linkedin.com/"
                            colorFondo="rgb(14 116 144)"
                        />
                    </li>

                    <li>
                        <BotonRedes
                            Icono={ImYoutube}
                            enlace="https://www.youtube.com/"
                            colorFondo="rgb(220 38 38)"
                        />
                    </li>

                    <li>
                        <BotonRedes
                            Icono={ImDribbble}
                            enlace="https://www.dribbble.com/"
                            colorFondo="rgb(249 115 22)"
                        />
                    </li>


                </ul>

            </div>


        </aside>

    );
}

export {AsideRedesSociales};