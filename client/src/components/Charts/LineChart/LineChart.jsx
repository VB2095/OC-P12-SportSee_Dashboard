import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useUser from "../../../Hooks/useUser"
import './lineChart.scss'

function LineChartSessions () {
    const { data, isLoading, error } = useUser("average");
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    if (isLoading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur est survenue</div>;
    }
    const updatedData = data.sessions.map((item) => {
        const dayOfWeek = daysOfWeek[item.day - 1]; // récupérer la lettre correspondante à la valeur de la clé "day"
        return {
            ...item,
            day: dayOfWeek // remplacer la valeur de la clé "day"
        }
    });

    console.log ("data line", updatedData)

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div style={{backgroundColor: "#fff", color: "#000", padding:"8px",}}>
              <p className="label">{`${payload[0].value} min`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
    <div className="lineChart">
      <div className="lineChart-title">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={updatedData}
        >
        <CartesianGrid display="none"/>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.7)" }} />
        <YAxis tickLine={false}  display="none" domain={[0, "dataMax + 30"]} hide={true} />
        <Tooltip content={<CustomTooltip />}/>
        <Line type="monotone" dataKey="sessionLength" padding={{ left: 10 }} stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }} />
      </LineChart>
      </ResponsiveContainer>
    </div>

    )
}

export default LineChartSessions