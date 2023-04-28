import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import useUser from "../../../Hooks/useUser"
import './radialChart.scss'

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
        <div className="radialChart__title">
            <h3>Score</h3>
        </div>
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart innerRadius='70%' outerRadius='120%' barSize={12} data={dataScore} startAngle={90} endAngle={450}>
      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
      <RadialBar minAngle={300} clockWise={true} dataKey='value' fill='#FF0000' cornerRadius={30 / 2} />
      <text
                x='50%'
                y='35%'
                dy={+12}
                style={{ fontSize: 22, fontWeight: 'bold', fill: '#282D30' }}
                width={200}
                textAnchor='middle'

            >
                {data.todayScore}%
            </text>
            <text
                x='50%'
                y='45%'
                dy={+12}
                style={{ fontSize: 22, fill: '#74798C' }}
                width={200}
                textAnchor='middle'

            >
                de votre
            </text>
            <text
                x='50%'
                y='55%'
                dy={+12}
                style={{ fontSize: 22, fill: '#74798C' }}
                width={200}
                textAnchor='middle'
                
            >
                objectif
            </text>
    </RadialBarChart>
    </ResponsiveContainer>
    </div>

    )
}

export default RadialChartScore