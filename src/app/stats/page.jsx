"use client";
import { ContactContext } from '@/components/contactProvider/contacrprovider';
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PieChartWithPaddingAngle() {

const { installContact } = useContext (ContactContext)

  const callCount = installContact.filter(item => item.actionType === 'Call').length;
  const textCount = installContact.filter(item => item.actionType === 'Text').length;
  const videoCount = installContact.filter(item => item.actionType === 'Video').length;

  const chartData = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];
  return (
    <div className=" container mx-auto my-10 w-full h-[600px] bg-white p-12 rounded-xl shadow-lg ">
      <h2 className="md:text-3xl font-bold mb-4 text-center text-gray-800">Friend Activity Stats</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%" 
            cy="50%"
            innerRadius={50} 
            outerRadius={150}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip /> 
          <Legend verticalAlign="bottom" height={36} className='mb-5'/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}