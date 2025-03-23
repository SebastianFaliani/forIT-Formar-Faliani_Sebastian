import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface TaskPieChartProps {
  total: number;
  completed: number;
  incomplete: number;
}

const COLORS = ["#A2FDB1", "#F7BFF5"]; 

const TaskPieChart: React.FC<TaskPieChartProps> = ({ total, completed, incomplete }) => {
  const data = [
    { name: "Completadas", value: completed, color: COLORS[0] },
    { name: "Incompletas", value: incomplete, color: COLORS[1] },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center w-full max-w-md ">
      {/* Sección de leyendas */}
      <div className="mr-6 hidden sm:block">
        <h2 className="text-lg font-semibold mb-4">Estado de Tareas</h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-center">
            <span className="w-3 h-3 bg-gray-400 inline-block rounded-full mr-2"></span>
            Total: <span className="ml-2 font-bold">{total}</span>
          </p>
          <p className="flex items-center">
            <span className="w-3 h-3 bg-[#A2FDB1] inline-block rounded-full mr-2"></span>
            Completadas: <span className="ml-2 font-bold">{completed}</span>
          </p>
          <p className="flex items-center">
            <span className="w-3 h-3 bg-[#F7BFF5] inline-block rounded-full mr-2"></span>
            Incompletas: <span className="ml-2 font-bold">{incomplete}</span>
          </p>
        </div>
      </div>

      {/* Gráfico */}
      <div className="w-60 h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskPieChart;
