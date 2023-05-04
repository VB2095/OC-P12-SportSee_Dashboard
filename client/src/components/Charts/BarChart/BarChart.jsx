import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useUser from '../../../Hooks/useUser';
import './barchart.scss';


/**
 * 
 * @returns {JSX.Element} BarChartActivity
 * 
 * @param {object} data - Data for the bar chart
 * @param {string} data.day - Day of the week
 * @param {number} data.kilogram - Weight in kg
 * @param {number} data.calories - Calories burned
 * 
 * 
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
    <div className='barChart'>
    <div className='barChart-title'>
      <h2>Activité quotidienne</h2>
      <div className='barChart-title_label'>
        <p>Poids (kg)</p>
        <p>Calories brûlées (kCal)</p>
      </div>
    </div>
    <ResponsiveContainer  width="100%" height="80%" >
      <BarChart data={data.sessions} barGap={8} barCategoryGap={1}  >
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3"  />
        <XAxis dataKey="day" tickLine={false}  dy={15}  tickFormatter={(tickValue) => {
        const date = new Date(tickValue);
        const day = date.getDate().toString().padStart(2, '0');
        return day;
        }}/>
        <YAxis yAxisId="weight" orientation="right" tickCount="3" axisLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} domain={[0, 'dataMax + 10']} />
        <YAxis yAxisId="calories" orientation="left" stroke="none" tickCount="1" axisLine={false} domain={[0, 'auto']}/>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="kilogram" name="Calories brûlées (kCal)" yAxisId="weight" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" name="Poids (kg)" yAxisId="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </>
  );
}

export default BarChartActivity;