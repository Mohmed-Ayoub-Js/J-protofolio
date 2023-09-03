import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['HTML', 'PYTHON', 'JAVASCRIPT'] }]}
      series={[{ data: [100,100 , 100] }]}
      width={500}
      height={300}
    />
  );
}