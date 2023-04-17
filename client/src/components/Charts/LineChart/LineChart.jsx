import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import useUser from "../../../Hooks/useUser"

function LineChartSessions () {
    const { data, isLoading, error } = useUser("average");

    if (isLoading) {
        return <div className="loading">Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur est survenue</div>;
    }

    return (
        <LineChart width={730} height={250} data={data.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
        

    )
}

export default LineChartSessions