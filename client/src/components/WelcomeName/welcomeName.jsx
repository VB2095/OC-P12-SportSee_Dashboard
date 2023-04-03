import './welcome.scss' ;

function Welcome ( props ) { 
    return ( 
    <div className = "welcomeName"> 
    <h1>Bonjour <span>{ props . name }</span></h1>
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div> 
    
    ) } 
    
    export default Welcome