import local from './Style/img/local.png'
import telefone from './Style/img/telefone.png'
import email from './Style/img/email.png'
import facebook from './Style/img/fb.png'
import instagram from './Style/img/ig.png'
import twitter from './Style/img/tt.png'
import './Style/contatos.css'

export default function Contato(){
    return(
        <>
        <div className='contato_fundo'>
        <div className='titulo_contato'>
            <h1>FALE CONOSCO</h1>
            <p>Não perca tempo, venha conhecer uma das nossas lojas ou entre em contato através de nossas redes socias ou da central de atendimeto </p>
        </div>

        <div className='contato'>

            <h2>CONTATO</h2>

        <div className='icone'>
            <img className='imagem' src={local} alt='Local'/>
            <p className='paragrafo_contato'>Nova Igraçu - RJ</p>
            
        </div>

        <div className='icone'>
        <img className='imagem' src={telefone} alt='Telefone'/>
        <p className='paragrafo_contato'>(21)555-555</p>
        </div>

        <div className='icone'>
        <img className='imagem' src={email} alt='Telefone'/>
        <p className='paragrafo_contato' >oticarj@gmail.com</p>
        </div>

        </div>

       <div className='redes_socias'>

        <h2>REDES SOCIAS </h2>

        <div className='icone'>
        <img className='imagem' src={facebook} alt="Facebook" />
        <p className='paragrafo_contato'>/OticaVida</p>
        </div >
        
       
   
       <div className='icone'>
       <img className='imagem' src={instagram} alt="Instagram" />
       <p className='paragrafo_contato'>oticavidarj@</p>
       </div>

       <div className='icone'>
        <img className='imagem' src={twitter} alt="Twitter" />
        <p className='paragrafo_contato'>@oticavidarj</p>
       </div>

       </div>


       </div>
        

        

     </>
    )
}