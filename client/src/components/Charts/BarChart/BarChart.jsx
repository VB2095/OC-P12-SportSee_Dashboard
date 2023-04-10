import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useUserActivities from '../../../Hooks/useUserActivities';

function BarChartActivity() {
  const { data, isLoading, error } = useUserActivities();

  if (isLoading) {
    return <div className="loading">Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data.sessions} >
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dy={15}/>
        <YAxis yAxisId="left" orientation="left" domain={['dataMin - 20', 'dataMax + 10']} stroke="none" tickCount="3" axisLine={false}/>
        <YAxis yAxisId="right" orientation="right" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dx={15} />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="calories" yAxisId="left" fill="#282D30" />
        <Bar dataKey="kilogram" name="Kilogrammes" yAxisId="right" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartActivity;