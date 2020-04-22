import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Apexcharts from './comps/Apexcharts';
import BizCharts from './comps/BizCharts';
import Echarts from './comps/Echarts';
import EchartsReduce from './comps/EchartsReduce';
import G2 from './comps/G2';
// import Plotly from './comps/Plotly';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Apexcharts /> */}
    <BizCharts />
    <Echarts />
    <EchartsReduce />
    <G2 />
    {/* <Plotly /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
