import React from 'react';
import './style.css';
import { Chart, Coord, Axis, Tooltip, Geom, Legend, View } from 'bizcharts';
import DataSet from '@antv/data-set';

function App() {
  const mapData = require('./world.geo.json');

  // data set
  const ds = new DataSet();

  // draw the map
  const dv = ds
    .createView('back')
    .source(mapData, {
      type: 'GeoJSON',
    })
    .transform({
      type: 'geo.projection',
      projection: 'geoMercator',
      as: ['x', 'y', 'centroidX', 'centroidY'],
    });

  const bgView = new DataSet.View().source(dv.rows);
  const scale = {
    x: { sync: true },
    y: { sync: true },
  };

  return (
    <>
      <h3>BizCharts Demo</h3>
      {/* forceFit 自适应开关 */}
      <Chart scale={scale} data={bgView} forceFit padding='auto'>
        <Coord reflect='y'/>
        <Legend position="left" title={null} dx={20} />
        <Tooltip />
        <Geom
          type="polygon"
          position="x*y"
          tooltip={['', () => {
            return {
              //自定义 tooltip 上显示的 title 显示内容等。
              name: '确诊人数',
              title: '统计',
              value: 100
            };
          }]}
          select={[true, {
            mode: 'single' || 'multiple', // 选中模式，单选、多选
              style: { 
                fill: 'red',
              }, // 选中后 shape 的样式
              cancelable: true | false, // 选中之后是否允许取消选中，默认允许取消选中
              animate: true | false // 选中是否执行动画，默认执行动画
          }]}
          active={[true, {
            highlight: false, // true 是否开启 highlight 效果，开启时没有激活的变灰
              style: { 
              fill: 'red'
            } // 选中后 shape 的样式
          }]}
          style={['name', {
            fill: (name)=>{
              if(name === 'China')
                return "#f00";
              return "#DDDDDD";
            },
            lineWidth: 0.5,
            fillOpacity: 0.85,
            stroke:(sales, city)=>{
              if(city === 'hangzhou' && sales > 1000)
                return "#ff0000";
              return "#00ff00";
            }
            }]}
        />
      </Chart>
    </>
  );
}

export default App;
