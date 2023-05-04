import "./welcome.scss";

/**
 * 
 * @param {*} props
 * @param {string} props.name - User name
 * @returns {JSX.Element} Welcome user with name
 * 
 */

function Welcome({name}) {

  return (
    <div className="welcomeName">
      <h1>Bonjour <span>{name}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    
  );
  
}

export default Welcome;