import React from 'react';
import {classList} from "@/helpers/classList";
import InfoTab from "@/components/InfoTab";

interface accelerationInterface {
    accelerationLevel?:number
}

const Acceleration = ({accelerationLevel}:accelerationInterface) => {

    const limiter=Number(100/12);


    return (
        <InfoTab icon={'acceleration'} title={'Acceleration'}>
            <div className={'relative flex h-32 p-4 justify-between items-end'}>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((bar)=>{
                    return (
                        <div key={bar} className={classList(`transition-all duration-300 bg-white rounded-full w-2`,Number(accelerationLevel)/limiter>bar?'opacity-100':'opacity-20')} style={{height:`${bar*limiter}%`}}>
                        </div>
                    )
                })}
                <img className={'w-10 aspect-square absolute left-4 top-4'} src={'/acceleration.svg'}/>
            </div>
            <p className={'text-center text-sm font-light opacity-50'}>Vector and speed</p>
        </InfoTab>
    );
};

export default Acceleration;