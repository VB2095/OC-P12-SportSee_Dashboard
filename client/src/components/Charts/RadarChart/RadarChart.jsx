import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import useUser from '../../../Hooks/useUser';
import './radarChart.scss';
import { UserQueryType } from '../../../Services/userQueryType';

/**
 * 
 * @returns {JSX.Element} RadarChartPerf
 * 
 * @param {object} data - Data for the radar chart
 * @param {string} dataRadar.kind - Kind of performance
 * @param {number} dataRadar.value - Value of performance
 *
 */

function RadarChartPerf() {
    const { data, isLoading, error } = useUser(UserQueryType.PERFORMANCE);

    if (isLoading) {
      return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
      return <div>Une erreur est survenue</div>;
    }
    console.log ("data radar", data)
    
    const dataRadar = [
      { kind: 'Cardio', value: data.data[0].value },
      { kind: 'Energie', value: data.data[1].value },
      { kind: 'Endurance', value: data.data[2].value },
      { kind: 'Force', value: data.data[3].value },
      { kind: 'Vitesse', value: data.data[4].value },
      { kind: 'Intensité', value: data.data[5].value },
    ];

    console.log("dataRadar", dataRadar)
    
    return (
      <div className="radarChart">
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={100} data={dataRadar}>
          <PolarGrid radialLines={false} stroke="#fff"/>
          <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} stroke='#fff' fontSize={"0.8rem"} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default RadarChartPerf;