"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import RadioTab from "@/components/UI/RadioTab";

const InfoTab = (props:any) => {

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

    return (
        <div className={classList('w-full h-full p-4',props.className?props.className:'')}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-2'}>
                    <img className={'w-4 aspect-square'} src={`/icons/${props.isActive?'active':'inactive'}/${props.icon}.svg`}/>
                    <p className={'font-inter text-xs font-semibold'}>{props.title}</p>
                </div>
                {props.addFilter?<div><RadioTab currentValue={time} variants={times} changeValue={setTime}></RadioTab></div>:null}
            </div>
            <div className={'pt-2 flex h-full flex-col'}>
                {props.children}
            </div>
        </div>
    );
};

export default InfoTab;