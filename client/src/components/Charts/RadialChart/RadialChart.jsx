import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import useUserData from "../../../Hooks/useUserData"

function RadialChartScore () {
    const { data, isLoading, error } = useUserData();

    if (isLoading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur est survenue</div>;
    }

    // data.todayScore = data.todayScore * 100
    // console.log ("dataScore", data.todayScore)
    // console.log("radial data", data)
   
    const dataScore = [
        { name: "Score", value: data.todayScore },
    ]


    return (
    // <div className="radialChart">
    //     <ResponsiveContainer width="100%" height="100%">
    //     <RadialBarChart cx="100%" cy="100%" innerRadius="10%" outerRadius="80%" barSize={10} data={dataScore}>
    //       <RadialBar
    //         minAngle={15}
    //         label={{ position: 'insideStart', fill: '#000' }}
    //         background
    //         clockWise
    //         dataKey="value"
    //       />
          
    //       {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
    //     </RadialBarChart>
    //   </ResponsiveContainer>
    //   <p>toto</p>
    //     </div> 
<RadialBarChart width={300} height={300} innerRadius={20}
      outerRadius={140}
      barSize={10} data={dataScore}>
  <RadialBar minAngle={10} background
        clockWise dataKey="value" />
</RadialBarChart>
    )
}

export default RadialChartScore