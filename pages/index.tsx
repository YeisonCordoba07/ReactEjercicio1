
import {ImFacebook, ImLinkedin2, ImYoutube, ImDribbble} from 'react-icons/im';
import {BsInstagram, BsTwitter} from 'react-icons/bs';

import {BotonRedes} from '@/componentes/BotonRedes';
import Image from 'next/image';


const Index = () => {
  return (
    <main className='flex'>

      <aside className='debug w-80 px-10'>

        <div className='flex flex-col items-center gap-3 pt-10 pb-12 border-solid border-b border-gray-200'>
          <Image className='rounded-full' 
          src='/YeisonIA.png' 
          height={150} 
          width={150} 
          alt='Foto de perfil'/>

          <span className='text-lg font-medium'>Rayan Adlardard</span>
          <p className='texto-normal-gris'>Front-End Developer</p>
        </div>

        <div>

        </div>

        <div>
          <span>Languages</span>

        </div>

        <div>
          <span>Programming Languages</span>

        </div>

        <div>
          <span>Extra Skills</span>
        </div>

      </aside>

      <section className='debug w-2/3'>



      </section>

      <aside className='debug w-24 flex flex-col items-center pt-20'>

        <span className='mb-4 text-lg font-bold'>Links</span>

        <ul className='flex flex-col justify-center gap-4'>

          <li>
            <BotonRedes Icono={ImFacebook} enlace='#' colorFondo='rgb(59 130 246)'/>
          </li>

          <li>
            <BotonRedes Icono={BsInstagram} enlace='#' colorFondo='rgb(240 171 252)'/>
          </li>

          <li>
            <BotonRedes Icono={BsTwitter} enlace='#' colorFondo='rgb(56 189 248)'/>
          </li>

          <li>
            <BotonRedes Icono={ImLinkedin2} enlace='#' colorFondo='rgb(14 116 144)'/>
          </li>

          <li>
            <BotonRedes Icono={ImYoutube} enlace='#' colorFondo='rgb(220 38 38)'/>
          </li>

          <li>
            <BotonRedes Icono={ImDribbble} enlace='#' colorFondo='rgb(249 115 22)'/>
          </li>
            
        </ul>

      </aside>

    </main>
  );
};

export default Index;