import remedios from './Style/img/loja.png'
import atendimento from './Style/img/atendimento.png'
import './Style/quem_somos.css'



export default function Quemsomos(){
    return(
        <>
        <div className='descricao'>
            <h1>Quem somos nós ? </h1>
            <p className='fonte'>Fundada em 2001 em Nova Iguaçu-Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de <br/> 
            renda mais baixa, sempre com o objetivo de proporcionar ao cliente um bom atendimento, qualidade e preço baixo.</p>
        </div> 

        <div className='bloco_descricao'>
        
        <div>
            <img className='imagem_descricao' src={remedios} alt='Remedios'/>
        </div>

        <div >
            <h1 className='titulo_descricao'> NOSSAS FILIAIS </h1>
            <p className='legenda_descricao'>Hoje temos mais de 20 filiais pelo Brasil e na Ámerica.</p>
        </div>

        </div>

        <div className='bloco_descricao'>

        <div>
            <h1 className='titulo_descricao'>ATENDIMENTO FLEXIVEL</h1>
            <p className='legenda_descricao'>Nossa aquipe e treinada para te atender</p>
        </div>

        <div>
        <img className='imagem_descricao_dois' src={atendimento} alt='Foto atendimento'/>
        </div>

        </div>
     
        </>
    )
}