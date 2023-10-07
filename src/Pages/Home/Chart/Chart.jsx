import React from 'react';
import './Chart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data = [
        {
          name: 'Rabindra Sangeet',
          students: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Nazrul Geeti',
          students: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Lalon Geeti',
          students: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Gajol',
          students: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Shyama Sangeet',
          students: 2500,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Adgunik Gaan',
          students: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Folk',
          students: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div>
            <h1 className=' text-orange-600 font-bold text-xl text-center p-5 w-11/12 md:w-8/12 mx-auto rounded-2xl mt-5 myTytle_bg '>The most priority List Song in our Camp in last year </h1>

            <div className='bgChart m-2'>
                <ResponsiveContainer width='100%' height={500} >

               
            <BarChart className='w-full mx-auto mt-10 '
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
             }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="students" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
            </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;