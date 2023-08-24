"use client"
import Image from 'next/image'
import InfoTab from "@/components/InfoTab";
import Emotions from "@/components/Emotions";
import Acceleration from "@/components/Acceleration";
import HeartRate from "@/components/HeartRate";
import FaceVideo from "@/components/FaceVideo";
import FaceEmotions from "@/components/FaceEmotions";
import BrainAnalytics from "@/components/BrainAnalytics";
import TextAnalys from "@/components/TextAnalys";
import {useEffect, useState} from "react";

export default function Home() {

    const messages=[
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },{
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        },
        {
            time:'07:30',
            emotion:1,
            text:'Привет! Меня зовут Максим.'
        }
    ]

    const [emotions,setEmotions]=useState()



    useEffect(()=>{
        window.onmessage = function(e) {
            if (e.data[0] == 'videoEmotion') {
                console.log(e.data[1])
                setEmotions(e.data[1])
            }
        };
    },)



    return (
        <main className="flex min-h-screen bg-grad flex-col gap-4 py-3 px-24">
            <div className={'flex items-center justify-between'}>
                <img className={'w-40'} src={'/logo.svg'}/>
                <p className={'font-inter font-extralight text-xl'}>00:07:45</p>
            </div>
            <div className={'grid grid-rows-3 grid-cols-12 gap-4'}>
                <div className={'rounded-xl overflow-hidden flex items-center aspect-square col-span-2 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <iframe className={"w-full  z-[10] h-full"} src="https://webcam-face-emotion-model-ewc.vercel.app/" allow="camera"/>
                </div>
                <div className={'rounded-xl overflow-hidden aspect-square col-span-2 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 w-full h-full'}>
                        <Emotions emotions={emotions}></Emotions>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden aspect-square col-span-2 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 w-full h-full'}>
                        <Acceleration accelerationLevel={80}></Acceleration>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden aspect-square col-span-2 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 w-full h-full'}>
                        <HeartRate heartRateLevel={76}></HeartRate>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden col-span-4 row-span-3 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 z-[20] top-0 w-full h-full'}>
                        <TextAnalys emotionalContext={emotions}></TextAnalys>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden row-span-2 col-span-2 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 w-full h-full'}>
                        <div className={'grid grid-cols-1'}>
                            <FaceVideo></FaceVideo>
                            <FaceEmotions emotions={emotions}></FaceEmotions>
                        </div>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden col-span-6 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 w-full h-full'}>
                        <InfoTab icon={'mic'} title={'Audio analytics'}></InfoTab>
                    </div>
                </div>
                <div className={'rounded-xl overflow-hidden col-span-6 relative w-full'}>
                    <div className={'absolute left-0 top-0 bg-opacity-25 bg-blue-600 mix-blend-multiply w-full h-full z-[0]'}>

                    </div>
                    <div className={'absolute left-0 top-0 z-[20] w-full h-full'}>
                        <BrainAnalytics></BrainAnalytics>
                    </div>
                </div>
            </div>
        </main>
    )
}
