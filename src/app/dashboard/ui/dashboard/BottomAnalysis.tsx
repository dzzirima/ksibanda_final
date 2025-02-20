"use client"

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Tooltip } from "rsuite";

export default function TopAnalyis() {

    const data = [
        {
          "name": "Jan",
          "Referrals": 4000,
          "Visits": 2400,
          "amt": 2400
        },
        {
          "name": "Feb",
          "Referrals": 3000,
          "Visits": 1398,
          "amt": 2210
        },
        {
          "name": "Mar",
          "Referrals": 2000,
          "Visits": 9800,
          "amt": 2290
        },
        {
          "name": "Apr",
          "Referrals": 2780,
          "Visits": 3908,
          "amt": 2000
        },
        {
          "name": "May",
          "Referrals": 1890,
          "Visits": 4800,
          "amt": 2181
        },
        {
          "name": "Jun",
          "Referrals": 2390,
          "Visits": 3800,
          "amt": 2500
        },
        {
          "name": "Jul",
          "Referrals": 3490,
          "Visits": 4300,
          "amt": 2100
        }
      ]
  return (
    <div className="mt-4">
      <div className=" min-h-44">
        <LineChart
          width={1100}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Visits" stroke="#8884d8" />
          <Line type="monotone" dataKey="Referrals" stroke="#82ca9d" />

        </LineChart>
      </div>
    </div>
  );
}
