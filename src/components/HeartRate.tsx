import React from 'react';
import {classList} from "@/helpers/classList";
import InfoTab from "@/components/InfoTab";

interface heartRateInterface {
    heartRateLevel?:number
}

const HeartRate = ({heartRateLevel}:heartRateInterface) => {


    return (
        <InfoTab icon={'heart_rate'} title={'Heart rate'}>
            <div className={'relative flex h-32 p-4 justify-center font-bold text-7xl items-center'}>
                {heartRateLevel}
            </div>
            <p className={'text-center text-sm font-light opacity-50'}>Beats/minute</p>
        </InfoTab>
    );
};

export default HeartRate;