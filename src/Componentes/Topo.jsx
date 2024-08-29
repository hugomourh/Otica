import logo from './Style/img/logo.png'
import './Style/topo.css'


export default function Topo (){
    return(
        
        <div className='topo'>
          <div>
            <img className='image_logo' src={logo} alt="logo otica" />
          </div>
          <div className='margin' >
            <a className='links' href='#produtos'>PRODUTOS</a>
            <a className='links' href='#sobre'>SOBRE</a>
            <a className='links' href='#contato'>CONTATO</a>
            </div>
         
        </div>
      
    )
};