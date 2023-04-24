import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useUser from '../../../Hooks/useUser';

function RadarChartPerf() {
    const { data, isLoading, error } = useUser("performance");
    const kinds = ['Vitesse', 'Endurance', 'Force', 'Agilité', 'Coordination', 'Réflexes'];
    if (isLoading) {
      return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
      return <div>Une erreur est survenue</div>;
    }
    console.log ("data radar", data)



   
    return (

      <ResponsiveContainer width="80" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
      </ResponsiveContainer>

    );
  }

export default RadarChartPerf;