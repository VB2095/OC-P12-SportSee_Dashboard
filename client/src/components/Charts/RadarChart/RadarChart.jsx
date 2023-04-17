import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useUser from '../../../Hooks/useUser';

function RadarChartPerf() {
    const { data, isLoading, error } = useUser("performance");

    if (isLoading) {
      return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
      return <div>Une erreur est survenue</div>;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }

export default RadarChartPerf;