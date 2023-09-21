
import {ImFacebook, ImLinkedin2, ImYoutube, ImDribbble} from 'react-icons/im';
import {BsInstagram, BsTwitter} from 'react-icons/bs';

import {BotonRedes} from '@/componentes/BotonRedes';


const Index = () => {
  return (
    <main>

      <aside>

        <div>
          <img src="" alt="" />
          <span>Rayan Adlardard</span>
          <p>Front-End Developer</p>
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

      <section>



      </section>

      <aside>

        <span>Links</span>

        <ul className='flex-col'>
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