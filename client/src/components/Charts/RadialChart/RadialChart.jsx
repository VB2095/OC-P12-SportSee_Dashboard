import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import useUser from "../../../Hooks/useUser"
import './radialChart.scss'

/** 
 * 
 * @returns {JSX.Element} RadialChartScore
 * 
 * @param {string} data.todayScore - User score 
 * @param {object} dataScore - Data for the radial chart
 * 
*/

function RadialChartScore () {
    const { data, isLoading, error } = useUser("infos");

    if (isLoading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur est survenue</div>;
    }

    if (data.todayScore < 1 ) {
      data.todayScore = data.todayScore * 100
    }
    
    console.log ("dataScore", data.todayScore)
    console.log("radial data", data)
   
    const dataScore = [
        { name: "Score", value: data.todayScore },
        

    ]

    return (
    <div className="radialChart">
        {/* <div className="radialChart__title">
            <h3>Score</h3>
        </div> */}
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart className="chartSurface" innerRadius='70%' outerRadius='120%' barSize={12} data={dataScore} startAngle={90} endAngle={450} >
      <text style={{ fontSize: 18, fill: "#20253A" }} x="0" y="9" dy="0.71em">
            <tspan x="26" y="39" dy="0.71em">Score</tspan>
          </text>
      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
      <RadialBar minAngle={300} clockWise={true} dataKey='value' fill='#FF0000' cornerRadius={30 / 2} />
      <text x='50%' y='100%' textAnchor='middle' dominantBaseline='middle' className='radialChart__text'>
            <tspan x="158" y="90" dy="0.71em" style={{ fontSize: 22, fontWeight: 'bold', fill: '#282D30' }}>{data.todayScore}%</tspan>
            <tspan x="158" y="100" dy="1.71em" style={{ fontSize: 22, fill: '#74798C' }}>de votre</tspan>
            <tspan x="158" y="110" dy="2.71em" style={{ fontSize: 22, fill: '#74798C' }}>objectif</tspan>
        </text>
    </RadialBarChart>
    </ResponsiveContainer>
    </div>

    )
}

export default RadialChartScore