"use client"
import React, {useEffect, useState} from 'react';
import GridChart from "@/components/charts/GridChart";

interface filteredChart {
    infoTab:{
        title?:string,
        icons?:string
        description?:string,
    },
    chart:{
        type:'line'|'bar',
        lineTension?:number
        labels:(string)[],
        beginAtZero?:boolean,
        callbackFormat?:(label:number)=>any,
        steps?:number,
        minValue?:number,
        maxValue?:number,
        isFilled?:boolean,
        labelFormatCallback?:'dollars'|string
        dataSets:Array<{
            label:string,
            data:Array<number>
        }>,
    },
    filtration:{
        type:Array<'monthly'|'select'|'grid'>
    }
}


const FilteredChart = ({infoTab,chart,filtration}:filteredChart) => {

    const times = [
        {
            name: 'daily',
            icon: '5s',
            isIcon: false,
        },
        {
            name: 'weekly',
            icon: '10s',
            isIcon: false,
        },
        {
            name: 'monthly',
            icon: '30s',
            isIcon: false,
        },
        {
            name: 'all',
            icon: '1m',
            isIcon: false,
        }
    ]

    const [time, setTime] = useState(times[3]);

    const grids = [
        {
            name: 'grid_four',
            icon: '/images/icons/grid_four.svg',
            isIcon: true,
        },
        {
            name: 'grid_six',
            icon: '/images/icons/grid_six.svg',
            isIcon: true,
        },
    ]

    const [grid, setGrid] = useState(grids[0])

    const firstFilters = ['All metaverses']

    chart.dataSets.forEach((item)=>{firstFilters.push(item.label)})

    const [firstFilter, setFirstFilter] = useState(firstFilters[0])

    const [labelsFiltered,setLabelsFiltered]=useState(chart.labels)

    const [filteredDataSet,setFilteredDataSet]=useState(chart.dataSets)

    useEffect(()=>{
        let temp=[...chart.labels]
        let difference=5;
        if(time.name=='daily'){
            // difference=2;
            setLabelsFiltered(['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','00:00'])
            let tempData=JSON.parse(JSON.stringify(chart.dataSets))
            setFilteredDataSet(tempData)
            return
        }
        else if(time.name=='weekly'){
            difference=10;
        }
        else if(time.name=='monthly'){
            difference=30;
        }
        else if(time.name=='suka'){
            difference=60;
        }
        if(time.name=='all'||difference>chart.labels.length){
            difference=chart.labels.length
        }
        setLabelsFiltered(temp.slice(chart.labels.length-difference,chart.labels.length))
        let tempData=JSON.parse(JSON.stringify(chart.dataSets))
        tempData.forEach((item:{data:Array<number>,label:string})=>{
            item.data=item.data.slice(item.data.length-difference,item.data.length)
        })
        setFilteredDataSet(tempData)
    },[time])

    useEffect(()=>{
        let tempData=JSON.parse(JSON.stringify(chart.dataSets))
        if(firstFilter!='All metaverses'){
            let index =tempData.findIndex((item:{data:Array<number>,label:string})=>item.label==firstFilter)
            let object=tempData[index]
            tempData=[object]
            console.log(tempData)
        }
        setFilteredDataSet(tempData)
    },[firstFilter,chart])




    return (
        <div className={'h-full'}>
            {filtration?
                <div className={'relative h-full'}>
                    {/*<div className={'absolute right-1 top-1'}>*/}
                    {/*    <div className={'flex items-center gap-2'}>*/}
                    {/*        {filtration.type.findIndex(value => value=='monthly')!=-1?<RadioTab currentValue={time} variants={times} changeValue={setTime}></RadioTab>:null}*/}
                    {/*        {filtration.type.findIndex(value => value=='grid')!=-1?<RadioTab currentValue={grid} variants={grids} changeValue={setGrid}></RadioTab>:null}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'h-full'}>
                        <GridChart lineTension={chart.lineTension?chart.lineTension:0} labels={labelsFiltered} callbackFormat={chart.callbackFormat?chart.callbackFormat:()=>{}} beginAtZero={false} steps={5} maxValue={70}
                                   dataSets={filteredDataSet} labelFormatCallback={chart.labelFormatCallback?chart.labelFormatCallback:'dollars'} minValue={10} isFilled={false}></GridChart>
                    </div>
                </div>
                :null}
        </div>
    );
};

export default FilteredChart;