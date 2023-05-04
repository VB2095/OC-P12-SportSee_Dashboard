import Header from '../../components/Header/header'
import NavbarLeft from '../../components/Navbar-left/navbarLeft'
import Welcome from '../../components/Welcome/welcome'
import useUser from '../../Hooks/useUser'
import BarChartActivity from '../../components/Charts/BarChart/BarChart'
import LineChartSessions from '../../components/Charts/LineChart/LineChart'
import RadialChartScore from '../../components/Charts/RadialChart/RadialChart'
import RadarChartPerf from '../../components/Charts/RadarChart/RadarChart'
import KeyDatas from '../../components/KeyDatas/keyDatas'
import caloriesIcon from '../../assets/calories.png'
import proteinIcon from '../../assets/proteines.png'
import glucideIcon from '../../assets/glucides.png'
import lipidsIcon from '../../assets/lipides.png'
import './dashboard.scss'

/**
 * 
 * @returns {JSX.Element} Dashboard
 * @constructor 
 * @param {string} data.userInfos.firstName - First name of the user
 * @param {string} data.keyData.calorieCount - Number of calories
 * @param {string} data.keyData.carbohydrateCount - Number of carbohydrates
 * @param {string} data.keyData.lipidCount - Number of lipids
 * @param {string} data.keyData.proteinCount - Number of proteins
 *
 *  */


function Dashboard() {

  const { data, isLoading, error } = useUser("infos");
  // Si les données sont en cours de chargement, on peut afficher un indicateur de chargement
  if (isLoading) {
    return <div className="loading">Chargement en cours...</div>;
  }

  // Si une erreur est survenue lors de la récupération des données, on peut afficher un message d'erreur
  if (error) {
    return <div>Une erreur est survenue</div>;
  }
   
  return (
    <>
      <Header />
      <main>
        <NavbarLeft />
        <section>
          <Welcome name={data.userInfos.firstName}/>
          <div className="dashboard_data">
            <div className='leftCharts_container'>
              <BarChartActivity /> 
              <div className='bottomCharts'>
                <LineChartSessions />
                <RadarChartPerf />
                <RadialChartScore />
              </div>
            </div>
            <div className='keyData_container'>
                <KeyDatas picto={caloriesIcon} keyDataCount={`${data.keyData.calorieCount}kCal`} keyDataText="Calories"/>
                <KeyDatas picto={proteinIcon} keyDataCount={`${data.keyData.carbohydrateCount}g`} keyDataText="Proteines"/>
                <KeyDatas picto={glucideIcon} keyDataCount={`${data.keyData.lipidCount}g`} keyDataText="Glucides"/>
                <KeyDatas picto={lipidsIcon} keyDataCount={`${data.keyData.proteinCount}g`} keyDataText="Lipides"/>
            </div>
            
            
          </div>
        </section>
      </main>
    </>
  )
}

export default Dashboard