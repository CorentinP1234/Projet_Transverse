import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import image from '../assets/jujumeme.png';


export default function Chart() {
  const theme = useTheme();

  return (
    <img src={image} alt ='test' style={{ width: 200, height: 200 }} />
  );
}