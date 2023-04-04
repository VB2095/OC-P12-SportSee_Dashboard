import "./welcome.scss";

function Welcome({name}) {

  return (
    <div className="welcomeName">
      <h1>Bonjour <span>{name}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    
  );
  
}

export default Welcome;