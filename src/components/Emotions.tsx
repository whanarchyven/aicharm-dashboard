import React, {useEffect, useState} from 'react';
import InfoTab from "@/components/InfoTab";
import {classList} from "@/helpers/classList";

interface EmotionsInterface {
    emotions:any,
}

const Emotions = ({emotions}:EmotionsInterface) => {

    const [activeEmotion,setActiveEmotion]=useState(0)
    useEffect(()=>{
        let max=0;
        let max_index=0;
        if(emotions?.current){
            emotions?.current.map((item:any,counter:number)=>{
                if(item.percent>max){
                    max=item.percent;
                    max_index=counter;
                }
            })
            let temp_emotion=emotions?.current[max_index].expression;

            switch (temp_emotion) {
                case 'neutral':setActiveEmotion(1);break;
                case 'happy':setActiveEmotion(2);break;
                case 'sad':setActiveEmotion(7);break;
                case 'angry':setActiveEmotion(18);break;
                case 'fearful':setActiveEmotion(10);break;
                case 'disgusted':setActiveEmotion(8);break;
                case 'surprised':setActiveEmotion(16);break;
            }

            console.log(temp_emotion)
        }

    },[emotions])

    const emotionsData=[
        {
            id:1,
            image:'/emotions/1.png'
        },
        {
            id:2,
            image:'/emotions/2.png'
        },
        {
            id:3,
            image:'/emotions/3.png'
        },
        {
            id:4,
            image:'/emotions/4.png'
        },
        {
            id:5,
            image:'/emotions/5.png'
        },
        {
            id:6,
            image:'/emotions/6.png'
        },
        {
            id:7,
            image:'/emotions/7.png'
        },
        {
            id:8,
            image:'/emotions/8.png'
        },
        {
            id:9,
            image:'/emotions/9.png'
        },
        {
            id:10,
            image:'/emotions/10.png'
        },
        {
            id:11,
            image:'/emotions/11.png'
        },
        {
            id:12,
            image:'/emotions/12.png'
        },
        {
            id:13,
            image:'/emotions/13.png'
        },
        {
            id:14,
            image:'/emotions/14.png'
        },
        {
            id:15,
            image:'/emotions/15.png'
        },
        {
            id:16,
            image:'/emotions/16.png'
        },
        {
            id:17,
            image:'/emotions/17.png'
        },
        {
            id:18,
            image:'/emotions/18.png'
        },
        {
            id:19,
            image:'/emotions/19.png'
        },
        {
            id:20,
            image:'/emotions/20.png'
        },
    ]

    return (
        <InfoTab icon={'emotions'} title={'Average emotion'}>
            <div className={'grid grid-cols-5 gap-3'}>
                {emotionsData.map((item)=>{
                    return(
                        <div key={item.id} className={'w-full relative flex items-center justify-center aspect-square'}>
                            <div className={classList('transition-all duration-300 absolute w-full z-[0] h-full rounded-full bg-blue-600',activeEmotion==item.id?'animate-ping':'opacity-0')}>

                            </div>
                            <img src={item.image} className={classList('transition-all duration-300 absolute w-full h-full',activeEmotion==item.id?'opacity-100':'opacity-10')}/>
                        </div>
                    )
                })}
            </div>
        </InfoTab>
    );
};

export default Emotions;