import React from 'react';

interface rangeInputInterface {
    value:number
    mutateValue:(arg:number)=>any
    min?:number
    max?:number
    step?:number
    leftLabel:string
    rightLabel:string
}

const RangeInput = ({value, mutateValue, rightLabel, leftLabel, max, min, step}:rangeInputInterface) => {
    return (
        <div className={'w-full flex flex-col items-center'}>
            <div className={'w-full flex items-center justify-between'}>
                <p className={'text-white uppercase'}>{leftLabel}</p>
                <p className={'text-white uppercase'}>{rightLabel}</p>
            </div>
            <div className={'w-full rounded-full px-10'}>
                <input max={max} step={step} min={min} onChange={(event)=>{mutateValue(Number(event.target.value))}} type={'range'} className={'w-full'}/>
            </div>
        </div>
    );
};

export default RangeInput;