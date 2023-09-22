
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
          
          <li className='fondo-redes bg-blue-500' ><a href='#'><ImFacebook/></a></li>
          <li className='fondo-redes bg-fuchsia-300'><a href='#'><BsInstagram/></a></li>
          <li className='fondo-redes bg-sky-400'><a href='#'><BsTwitter/></a></li>
          <li className='fondo-redes bg-cyan-700'><a href='#'><ImLinkedin2/></a></li>
          <li className='fondo-redes bg-red-600'><a href='#'><ImYoutube/></a></li>
          <li className='fondo-redes bg-orange-500'><a href='#'><ImDribbble/></a></li> 
          <li className='fondo-redes'><a  ><BotonRedes Icono={ImFacebook}/> </a></li> 
            
        </ul>

      </aside>

    </main>
  );
};

export default Index;