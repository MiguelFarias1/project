"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Active: 4000,
    Inactive: 2400,
  },
  {
    name: "Feb",
    Active: 3000,
    Inactive: 1398,
  },
  {
    name: "Mar",
    Active: 2000,
    Inactive: 9800,
  },
  {
    name: "Apr",
    Active: 2780,
    Inactive: 3908,
  },
  {
    name: "May",
    Active: 1890,
    Inactive: 4800,
  },
  {
    name: "Jun",
    Active: 2390,
    Inactive: 3800,
  },
  {
    name: "Jul",
    Active: 3490,
    Inactive: 4300,
  },
  {
    name: "Aug",
    Active: 3490,
    Inactive: 4300,
  },
  {
    name: "Sep",
    Active: 3490,
    Inactive: 4300,
  },
  {
    name: "Oct",
    Active: 3490,
    Inactive: 4300,
  },
  {
    name: "Nov",
    Active: 3490,
    Inactive: 4300,
  },
  {
    name: "Dec",
    Active: 3490,
    Inactive: 4300,
  },
];

const VolunteerChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Volunteer Engagement</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Active"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="Inactive" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolunteerChart;