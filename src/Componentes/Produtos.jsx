import './Style/Produtos.css'
import oculos1 from'./Style/img/oculos01.png';
import oculos2 from'./Style/img/oculos02.png';
import oculos3 from'./Style/img/oculos03.png';
import oculos4 from'./Style/img/oculos04.png';


export default function Produtos(){
    return(
        <>
        <div className='produtos'>
            <h1>NOSSOS PRODUTOS</h1>
            <p className='abc'>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, feminino e infantil.</p>
            <p className='abc'>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        </div>

        <div className='bloco'> 

        <div className='fundo_oculos'>
            <h2 className='nome_oculos'>Óculos de grau</h2>
            <img className='tamanho_oculos' src={oculos1} alt='oculos'/>
            <h2 className='valor_oculos'>R$ 500,00</h2>
        </div>

        <div className='fundo_oculos'>
        <h2 className='nome_oculos'>Óculos Transition</h2>
        <img className='tamanho_oculos' src={oculos2} alt='oculos'/>
        <h2 className='valor_oculos'>R$ 750,00</h2>
        </div>

        </div>

        <div className='bloco'>

        <div className='fundo_oculos'>
        <h2 className='nome_oculos'>Óculos de Sol</h2>
        <img className='tamanho_oculos' src={oculos3} alt='oculos'/>
        <h2 className='valor_oculos'>R$ 700,00</h2>
        </div>
        
        <div className='fundo_oculos'>
        <h2 className='nome_oculos'>Óculos Infantil</h2>
        <img className='tamanho_oculos' src={oculos4} alt='oculos'/>
        <h2 className='valor_oculos'>R$ 700,00</h2>
        </div>

        </div>

        <div className='beneficios'>
            <p>Todos os nossos produtos incluem:</p>

            <ul >
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>

        </div>
        </>
    )
}