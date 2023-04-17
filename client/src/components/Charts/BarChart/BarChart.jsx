import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useUser from '../../../Hooks/useUser';
import './barchart.scss';


/**
 * 
 * @returns {JSX.Element} BarChartActivity
 */
function BarChartActivity() {
  const { data, isLoading, error } = useUser("activities");

  if (isLoading) {
    return <div className="loading">Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue</div>;
  }
  
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{backgroundColor: "#E60000", color: "#fff", padding:"8px",}}>
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <>
    <div className='barChart-title'>
      <h2>Activité quotidienne</h2>
      <div className='barChart-title_label'>
        <p>Poids (kg)</p>
        <p>Calories brûlées (kCal)</p>
      </div>
      
    </div>
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={data.sessions} width={100}>
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}}   tickFormatter={(tickValue) => {
        const date = new Date(tickValue);
        const day = date.getDate().toString().padStart(2, '0');
        return day;
        }}/>
        <YAxis yAxisId="weight" orientation="right" tickCount="3" axisLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} domain={[0, 'dataMax + 10']} />
        <YAxis yAxisId="calories" orientation="left" stroke="none" tickCount="3" axisLine={false} domain={[69, 'auto']}/>
        
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="kilogram" name="Calories brûlées (kCal)" yAxisId="weight" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" name="Poids (kg)" yAxisId="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}

export default BarChartActivity;