"use client"
import React, {useState} from 'react';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement, TooltipLabelStyle,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    BarElement,
    {
        id: 'uniqueid5', //typescript crashes without id
        afterDraw: function (chart: any, easing: any) {
            if (chart.tooltip?._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const topY = chart.scales.y.top;
                const bottomY = chart.scales.y.bottom;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'rgba(255,255,255,0.5)';
                ctx.stroke();
                ctx.restore();
            }
        }
    }
);

interface GridChartInterface {
    dataSets:Array<{label:string,data:Array<number>}>,
    isFilled?:boolean,
    maxValue?:number,
    minValue?:number,
    labels:Array<string>,
    steps?:number,
    beginAtZero?:boolean,
    callbackFormat?:(value:any, index:any, ticks:any)=>any,
    labelFormatCallback?:'dollars'|string,
    lineTension?:number
}






const GridChart = ({dataSets,isFilled,maxValue,labels,steps,lineTension,beginAtZero,labelFormatCallback,minValue,callbackFormat}:GridChartInterface) => {


    let dataSetTemp:any=[]

    dataSets.map((value, index)=>{
        dataSetTemp.push({
            label: dataSets[index].label,
            data: dataSets[index].data,
            borderColor: '#FFF',
            borderRadius:1,
            lineTension:lineTension?lineTension:0.35,
            fill:isFilled,
        })
    })

     const data = {
        labels,
        datasets: dataSetTemp,
    };

    const chartOptions={
        scales : {
            x:{
                grid:{
                    display:true
                },
                ticks:{
                    display:false,
                    font:{
                        weight:'200',
                        family: 'Roboto',
                        size:12
                    },
                    steps:10,
                }
            },
            y:{
                grid:{
                    display:true,
                },
                ticks:{
                    display:false,
                    font:{
                        weight:'200',
                        family: 'Roboto',
                        size:12
                    },
                    stepSize:steps,

                },
                min:minValue,
                max:maxValue,
            },

        },
        elements:{
            point:{
                radius:1,
            }
        },

        plugins: {
            legend: {
                display:false,
                labels: {
                    display:false,
                    // This more specific font property overrides the global property
                    font: {
                        family:"Roboto",
                        weight:'300',
                        size:14
                    },
                    usePointStyle:false,

                }
            },

        },
        maintainAspectRatio : false,

    }
    ChartJS.defaults.color='rgba(255,255,255,1)';
    ChartJS.defaults.borderColor='rgba(255,255,255,0.1)';


    return (
        <Line options={chartOptions} data={data}></Line>
    );
};

export default GridChart;