"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Mousewheel} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Typewriter from 'typewriter-effect';
import React from "react";
import Emotions from "@/components/Emotions";
import Acceleration from "@/components/Acceleration";
import HeartRate from "@/components/HeartRate";
import TextAnalys from "@/components/TextAnalys";
import FaceVideo from "@/components/FaceVideo";
import FaceEmotions from "@/components/FaceEmotions";
import InfoTab from "@/components/InfoTab";
import BrainAnalytics from "@/components/BrainAnalytics";


export default function Home() {

    const Block = () => {
        return (
            <SwiperSlide className={'w-full pitch-bg h-screen flex items-center justify-center'}>
                <div className={'w-full h-full flex items-center justify-center'}>
                    1
                </div>
            </SwiperSlide>
        )
    }

    const messages = [
        {
            time: '07:30',
            emotion: 1,
            text: 'Hey. My name is Max!'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'I’d like to test something.'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'Tell me about yourself.'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'I want to know how you work.'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'What features do you have?'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'How do you analyze my voice?'
        }, {
            time: '07:30',
            emotion: 1,
            text: 'I’m curious...'
        },
        {
            time: '07:30',
            emotion: 2,
            text: 'Can you tell a joke that’s actually funny unlike other AIs out there?'
        },
        {
            time: '07:30',
            emotion: 1,
            text: 'It would be nice.'
        },
        // {
        //     time:'07:30',
        //     emotion:1,
        //     text:'Cause I know some.'
        // },
        // {
        //     time:'07:30',
        //     emotion:1,
        //     text:'So... Let’s start. How do you work?'
        // },
        // {
        //     time:'07:30',
        //     emotion:1,
        //     text:'There was a lot of questions. I hope you can keep up.'
        // },
    ]


    return (
        <main className="flex pitch-bg min-h-screen">
            <Swiper
                className={'h-screen w-full'}
                direction={'vertical'}
                mousewheel={true}
                modules={[Mousewheel]}
                speed={1500}
            >
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex items-center justify-center px-24'}>
                        <div className={'flex flex-col gap-8 items-center'}>
                            <p className={'font-black tracking-[1.3rem] text-white uppercase text-7xl'}>FUTURE</p>
                            <div className={'flex w-full gap-4 justify-between items-center'}>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future1.png'}/>
                                </div>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future2.png'}/>
                                </div>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future3.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex items-center justify-center px-24'}>
                        <div className={'flex flex-col gap-8 items-center'}>
                            <p className={'font-black text-white text-center text-6xl'}>Holograms & <br/>
                                Digital assistants</p>
                            <div className={'flex w-full gap-4 justify-between items-center'}>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future4.png'}/>
                                </div>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future5.png'}/>
                                </div>
                                <div className={'rounded-xl overflow-hidden'}>
                                    <img className={'hover:scale-125 duration-300 transition-all cursor-pointer'}
                                         src={'/pitch/future6.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div
                        className={'w-full h-full flex items-center px-24 justify-center bg-cover bg-[url("/pitch/aicharm_bg.png")]'}>
                        <div className={'grid w-full h-full grid-cols-2 items-center'}>
                            <div className={'flex items-start flex-col gap-9'}>
                                <img className={'w-96'} src={'/pitch/logo.svg'}/>
                                <div
                                    className={'bg-white text-black font-inter text-2xl rounded-lg items-center p-4 px-6 w-full flex justify-between'}>
                                    <Typewriter options={{
                                        strings: ['Characters with AI, EI, and personality ', 'Characters with AI, EI, and personality '],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                    }}/>
                                    <img className={'w-10 aspect-aquare'} src={'/pitch/send_message.svg'}/>
                                </div>
                                <p className={'text-white font-inter text-xl w-4/5 font-light'}>Welcome to AICHARM,
                                    where we bring cutting-edge
                                    AI technology to life through customizable characters with
                                    unique personalities, goals, beliefs, and knowledge bases.
                                    <br/><br/>
                                    Dive into a new era of human-AI interaction and transform
                                    your digital world.</p>
                                <div
                                    className={'text-white font-inter font-normal text-xl flex items-center bg-[#D630FF] w-60 rounded-lg h-16 justify-center'}>
                                    Discover More
                                </div>
                            </div>
                            <div className={'flex w-full relative h-full items-center justify-center'}>
                                <img className={'absolute bottom-0 w-5/6'} src={'/pitch/aicharm_girl.png'}/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex items-center px-24 justify-center'}>
                        <div className={'grid w-full h-full gap-12 grid-cols-2 items-center'}>
                            <div className={'flex w-full relative h-full items-center justify-center'}>
                                <div className={'relative flex w-full h-96 items-center justify-center'}>
                                    <img className={'absolute w-full h-full'} src={'/pitch/ai_grid.svg'}/>
                                    <img className={'absolute w-4/5 h-4/5'} src={'/pitch/ai_track.svg'}/>
                                </div>
                            </div>
                            <div className={'flex items-start flex-col gap-5'}>
                                <p className={'font-roboto text-5xl text-white font-black'}>Trends</p>
                                <p className={'text-white font-inter font-light text-xl'}>The convergence of AI, Crypto,
                                    Games, Virtual Worlds, and Digitalisation is driving a technological revolution,
                                    marked by rapid growth and transformation across various sectors.
                                    <br/><br/>
                                    This trend is anticipated to continue, unlocking new possibilities and efficiencies,
                                    thus reshaping our future with promising prospects and opportunities.</p>
                                <div
                                    className={'text-white font-inter font-normal text-lg flex items-center bg-[#D630FF] w-60 rounded-lg h-16 justify-center'}>
                                    Discover More
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div
                        className={'w-full h-full font-roboto text-white text-4xl font-normal text-center flex flex-col items-center px-24 justify-center bg-cover bg-[url("/pitch/sprite_bg.png")]'}>
                        <Typewriter options={{
                            strings: [`"Let projects focus on their core function and algorithm improvements, <br/> while we take care of quality communication with the users."`],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                        }}/>
                        {/*<p className={'font-roboto text-white text-4xl font-normal text-center'}></p>*/}
                        <div className={'border-b-[1px] h-[50px] border-white w-1/5'}>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex flex-col gap-8 items-center px-24 justify-center'}>
                        <img className={'w-80'} src={'/pitch/big_logo.svg'}/>
                        <p className={'text-center text-white text-3xl font-black'}>Eq4AI</p>
                        <div className={'grid w-full grid-cols-2 grid-rows-3 gap-8'}>
                            <div
                                className={'h-28 p-6 px-12 gap-10 white-grad hover:white-grad-active cursor-pointer duration-1000 transition-all bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/myers.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Character analysis by <br/>
                                    Myers-Briggs. Database Features</p>
                            </div>
                            <div
                                className={'h-28 p-6 px-12 gap-10 hover:white-grad-active cursor-pointer white-grad bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/text.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Text analysis and
                                    categorization <br/> based on emotions</p>
                            </div>
                            <div
                                className={'h-28 p-6 px-12 gap-10 hover:white-grad-active cursor-pointer white-grad bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/audio.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Generative audio,
                                    adaptable to <br/> voice with emotional tone</p>
                            </div>
                            <div
                                className={'h-28 p-6 px-12 gap-10 hover:white-grad-active cursor-pointer white-grad bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/face.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Visual module for
                                    facial <br/>
                                    expressions and movements</p>
                            </div>
                            <div
                                className={'h-28 p-6 px-12 gap-10 hover:white-grad-active cursor-pointer white-grad bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/brain.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Analysis of brain
                                    activity</p>
                            </div>
                            <div
                                className={'h-28 p-6 px-12 gap-10 hover:white-grad-active cursor-pointer white-grad bg-white bg-opacity-10 flex items-center rounded-xl shadow-inner backdrop-blur-lg'}>
                                <img className={'w-16 aspect-square'} src={'/pitch/time.svg'}/>
                                <p className={'text-white font-roboto font-light text-2xl'}>Wearable device
                                    analysis <br/> (such as smartwatches)</p>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex flex-col gap-8 items-center justify-center'}>
                        <div className="flex min-h-screen w-full flex-col gap-4 py-3 px-24">
                            <div className={'flex items-center justify-between'}>
                                <img className={'w-40'} src={'/logo.svg'}/>
                                <p className={'font-inter font-extralight text-xl'}>00:07:45</p>
                            </div>
                            <div className={'grid grid-rows-3 grid-cols-12 gap-4'}>
                                <div className={'rounded-xl overflow-hidden aspect-square col-span-2 relative w-full'}>
                                    <img className={'w-full absolute h-full object-cover'} src={'/max.png'}/>
                                </div>
                                <div
                                    className={'rounded-xl overflow-hidden white-grad aspect-square col-span-2 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        {/*<Emotions activeEmotionId={2}></Emotions>*/}
                                    </div>
                                </div>
                                <div
                                    className={'rounded-xl overflow-hidden white-grad aspect-square col-span-2 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        <Acceleration accelerationLevel={80}></Acceleration>
                                    </div>
                                </div>
                                <div
                                    className={'rounded-xl overflow-hidden white-grad aspect-square col-span-2 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        <HeartRate heartRateLevel={76}></HeartRate>
                                    </div>
                                </div>
                                <div
                                    className={'rounded-xl overflow-hidden white-grad col-span-4 row-span-3 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        {/*<TextAnalys messages={messages}></TextAnalys>*/}
                                    </div>
                                </div>
                                <div
                                    className={'rounded-xl overflow-hidden white-grad row-span-2 col-span-2 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        <div className={'grid grid-cols-1'}>
                                            <FaceVideo></FaceVideo>
                                            {/*<FaceEmotions activeEmotionId={5}></FaceEmotions>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className={'rounded-xl overflow-hidden white-grad col-span-6 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        <InfoTab icon={'mic'} title={'Audio analytics'}>
                                            <img src={'/audio_temp.svg'}/>
                                        </InfoTab>
                                    </div>
                                </div>
                                <div className={'rounded-xl overflow-hidden white-grad col-span-6 relative w-full'}>
                                    <div className={'absolute left-0 top-0 w-full h-full'}>
                                        <BrainAnalytics></BrainAnalytics>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full grid grid-cols-2 grid-rows-2 gap-4 py-10 px-24'}>
                        <div className={'flex flex-col row-span-2 gap-6 items-start justify-center'}>
                            <div className={'flex-col flex gap-3'}>
                                <p className={'pl-4 font-extrabold font-roboto text-4xl text-white'}>Character
                                    analysis <br/>
                                    by Myers-Briggs</p>
                                <p className={'pl-4 w-4/5 font-extralight text-lg font-inter'}>We specialize in
                                    identifying and digitizing personality traits, infusing unique elements into
                                    communication style, intonation, and character behavior. </p>
                            </div>
                            <div className={'relative grid grid-cols-12 gap-4 grid-rows-4'}>
                                <div
                                    className={'bg-[#A34EDF] gap-3 left-4 p-4 bg-opacity-20 flex items-start rounded-xl col-span-8'}>
                                    <div className={''}>
                                        <img src={'/pitch/max.png'}/>
                                    </div>
                                    <div className={'flex w-[90%] flex-col gap-2'}>
                                        <p className={'text-white text-sm font-bold'}>Max</p>
                                        <p className={'text-white text-sm font-light font-roboto leading-[100%]'}>
                                            I am trying to figure out the tasks for the project, but everything is
                                            getting mixed up in my head, and I dont know what to do. What should I do?
                                        </p>
                                    </div>
                                    <p className={'text-xs font-light opacity-50'}>7:30</p>
                                </div>
                                <div
                                    className={'bg-[#CBCBCB] gap-3 left-4 p-4 bg-opacity-20 col-start-2 flex items-start rounded-xl col-span-8'}>
                                    <div className={''}>
                                        <img src={'/pitch/neuro.png'}/>
                                    </div>
                                    <div className={'flex w-[90%] flex-col gap-2'}>
                                        <p className={'text-white text-sm font-bold'}>INTJ Personality Type</p>
                                        <p className={'text-white text-sm font-light font-roboto leading-[100%]'}>Break
                                            down the tasks into manageable parts and organize them logically. A detailed
                                            plan can guide you systematically.</p>
                                    </div>
                                    <p className={'text-xs font-light opacity-50'}>7:31</p>
                                </div>
                                <div
                                    className={'bg-[#CBCBCB] gap-3 left-4 p-4 bg-opacity-20 col-start-3 flex items-start rounded-xl col-span-8'}>
                                    <div className={''}>
                                        <img src={'/pitch/neuro.png'}/>
                                    </div>
                                    <div className={'flex w-[90%] flex-col gap-2'}>
                                        <p className={'text-white text-sm font-bold'}>ESFP Personality Type</p>
                                        <p className={'text-white text-sm font-light font-roboto leading-[100%]'}>Talk
                                            with a friend or colleague and approach the task playfully. Engaging with
                                            others might make it all come together.</p>
                                    </div>
                                    <p className={'text-xs font-light opacity-50'}>7:31</p>
                                </div>
                                <div
                                    className={'bg-[#CBCBCB] gap-3 left-4 p-4 bg-opacity-20 col-start-4 flex items-start rounded-xl col-span-8'}>
                                    <div className={''}>
                                        <img src={'/pitch/neuro.png'}/>
                                    </div>
                                    <div className={'flex w-[90%] flex-col gap-2'}>
                                        <p className={'text-white text-sm font-bold'}>INFP Personality Type</p>
                                        <p className={'text-white text-sm font-light font-roboto leading-[100%]'}>Align
                                            tasks with your values and passions. Prioritize them based on your
                                            intuition, and dont hesitate to seek emotional support.</p>
                                    </div>
                                    <p className={'text-xs font-light opacity-50'}>7:31</p>
                                </div>
                                <div
                                    className={'absolute w-24 top-60 -left-14 z-[50] text-2xl aspect-square rounded-full text-white font-roboto uppercase font-black white-grad flex items-center justify-center backdrop-blur-xl'}>
                                    INFP
                                </div>
                                <div
                                    className={'absolute w-24 top-2 right-20 z-[50] text-2xl aspect-square rounded-full text-white font-roboto uppercase font-black white-grad flex items-center justify-center backdrop-blur-xl'}>
                                    INTJ
                                </div>
                                <div
                                    className={'absolute w-24 top-36 right-0 z-[50] text-2xl aspect-square rounded-full text-white font-roboto uppercase font-black white-grad flex items-center justify-center backdrop-blur-xl'}>
                                    ESFP
                                </div>
                                <img className={'absolute  right-24'} src={'/pitch/myers_intj.svg'}/>
                                <img className={'absolute -left-12 w-60 top-32'} src={'/pitch/myers_infp.svg'}/>
                                <img className={'absolute right-4 top-8'} src={'/pitch/myers_esfp.svg'}/>
                            </div>
                        </div>
                        <div
                            className={'bg-[url("/pitch/myers_bg.svg")] grid grid-cols-4 gap-2 grid-rows-4 p-9 w-[726px] h-[440px]'}>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ENFJ</p>
                                <p className={'text-sm'}>Teacher</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>INFJ</p>
                                <p className={'text-sm'}>Counselor</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>INTJ</p>
                                <p className={'text-sm'}>Mastermind</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ENTJ</p>
                                <p className={'text-sm'}>Field Marshall</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ENFP</p>
                                <p className={'text-sm'}>Champion</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>INFP</p>
                                <p className={'text-sm'}>Healer</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>INTP</p>
                                <p className={'text-sm'}>Architect</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ENTP</p>
                                <p className={'text-sm'}>Inventor</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ESFP</p>
                                <p className={'text-sm'}>Performer</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ISFP</p>
                                <p className={'text-sm'}>Composer</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ISTP</p>
                                <p className={'text-sm'}>Operator</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ESTP</p>
                                <p className={'text-sm'}>Promoter</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ESFJ</p>
                                <p className={'text-sm'}>Provider</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ISFJ</p>
                                <p className={'text-sm'}>Protector</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ISTJ</p>
                                <p className={'text-sm'}>Inspector</p>
                            </div>
                            <div
                                className={'white-grad hover:white-grad-active cursor-pointer rounded-xl flex items-center justify-center flex-col'}>
                                <p className={'uppercase font-black font-inter text-2xl'}>ESTJ</p>
                                <p className={'text-sm'}>Supervisor</p>
                            </div>
                        </div>
                        <div className={'w-full h-full flex items-center text-xl justify-center'}>
                            Our approach is based on the globally recognized <br/>
                            Myers-Briggs personality type gradation and relies on <br/>
                            our proprietary and worldwide research.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full grid gap-6 grid-cols-2 px-24 items-center'}>
                        <div className={'flex flex-col gap-6'}>
                            <p className={'font-extrabold font-roboto text-6xl text-white'}>Database Features</p>
                            <p className={'font-inter text-xl text-white'}>Our proprietary development for storing the
                                characters knowledge, which they can
                                reference. This can include basic concepts, such as knowledge from human history, as
                                well as complex educational materials and scholarly articles.</p>
                        </div>
                        <div className={'flex flex-col gap-5'}>
                            <div className={'flex gap-5 '}>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/nutrition.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Nutrition & Healthy Eating</p>
                                </div>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/mental.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Mental Wellness & Psychology</p>
                                </div>
                            </div>
                            <div className={'flex gap-5 justify-end pr-16'}>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/blog.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Blogging & Social Media</p>
                                </div>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/sport.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Sports & Fitness</p>
                                </div>
                            </div>
                            <div className={'flex gap-5 '}>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/travel.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Travel & Exploration</p>
                                </div>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/partner.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Entrepreneurship & Business</p>
                                </div>
                            </div>
                            <div className={'flex gap-5 justify-end pr-16'}>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/photo.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Photography & Videography</p>
                                </div>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/fashion.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Fashion & Beauty</p>
                                </div>
                            </div>
                            <div className={'flex gap-5 '}>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/technology.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Technology & Gadgets</p>
                                </div>
                                <div className={'flex items-center p-4 relative rounded-lg gap-4 white-grad'}>

                                    <img className={'w-5 aspect-square'} src={'/pitch/art.svg'}/>
                                    <p className={'font-inter text-white text-lg'}>Art & Creativity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full grid gap-6 grid-cols-2 px-36 items-center'}>
                        <div className={'flex flex-col relative gap-4'}>
                            <img className={'absolute -left-28 top-16'} src={'/pitch/arrow1.svg'}/>
                            <img className={'absolute -left-32 top-20'} src={'/pitch/arrow2.svg'}/>
                            <img className={'absolute -left-32 top-20'} src={'/pitch/arrow3.svg'}/>
                            <div
                                className={'bg-[#A34EDF] mb-12 gap-3 left-4 p-4 bg-opacity-20 flex items-start rounded-xl w-4/6'}>
                                <div className={''}>
                                    <img src={'/pitch/max.png'}/>
                                </div>
                                <div className={'flex w-[90%] flex-col gap-2'}>
                                    <p className={'text-white text-sm font-bold'}>Max</p>
                                    <p className={'text-white text-sm font-light font-roboto'}>
                                        I am trying to figure out the tasks for the project, but everything is
                                        getting mixed up in my head, and I dont know what to do. What should I do?
                                    </p>
                                </div>
                                <p className={'text-xs font-light opacity-50'}>7:30</p>
                            </div>
                            <div className={'flex font-roboto font-light gap-1 items-start'}>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/13.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        I am trying
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/15.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p>to <span className={'font-bold'}> figure out</span></p>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/13.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p><span className={'font-bold'}>the tasks</span> for the project,</p>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/13.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p>but</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex font-roboto font-light gap-1 items-start'}>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/9.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p><span className={'font-bold'}>everything is getting mixed up </span>in my
                                            head,</p>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/8.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p>and <span className={'font-bold'}>I dont know </span></p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex font-roboto font-light gap-1 items-start'}>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/8.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p><span className={'font-bold'}>what to do.</span></p>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-2 w-fit items-center'}>
                                    <img className={'w-7'} src={'/emotions/15.png'}/>
                                    <div
                                        className={'flex w-fit items-center rounded-lg justify-center white-grad px-1'}>
                                        <p>What should I do?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-6'}>
                            <p className={'font-extrabold font-roboto text-6xl text-white'}>Text analysis </p>
                            <p className={'font-inter text-xl text-white'}>We analyze text using neural networks and our
                                plugins, interpreting not only meanings and emotions but also phonemes and the emotional
                                tone of the text.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 grid grid-cols-1 grid-rows-2 items-center'}>
                        <div className={'grid gap-20 items-center grid-cols-5'}>
                            <div className={'flex flex-col col-span-2 gap-6'}>
                                <p className={'font-extrabold font-roboto text-5xl text-white'}>Audio analysis</p>
                                <p className={'font-inter text-xl text-white'}>Our audio analysis includes segmentation
                                    by
                                    phonemes, intonations, and emotions. This is conducted using our own developed tools
                                    for
                                    a deeper understanding of human conditions.</p>
                            </div>
                            <div className={'flex col-span-3 flex-col gap-5'}>
                                <img className={'w-5/6'} src={'/pitch/audio_temp.svg'}/>
                            </div>
                        </div>
                        <div className={'grid gap-20 items-center grid-cols-5'}>

                            <div className={'flex col-span-3 flex-col gap-5'}>
                                <img className={'w-5/6'} src={'/pitch/temp_brain.svg'}/>
                            </div>
                            <div className={'flex flex-col col-span-2 gap-6'}>
                                <p className={'font-extrabold font-roboto text-5xl text-white'}>Brain activity
                                    analysis</p>
                                <p className={'font-inter text-xl text-white'}>Through neurointerfaces, we collect and
                                    analyze brain waves, giving us additional insights into the humans visual,
                                    auditory, and textual activity, enhancing our ability to recognize their emotions
                                    and state.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 grid grid-cols-2 gap-12 grid-rows-1 items-center'}>
                        <div className={'flex flex-col gap-12'}>
                            <p className={'text-5xl font-black font-roboto'}>Wearable device analysis</p>
                            <p className={'font-inter text-xl font-light'}>We also analyze hand movements, pressure, and
                                other parameters from wearable devices,
                                enhancing our ability to understand the humans condition.</p>
                            <p className={'font-inter text-xl font-bold text-[#D630FF]'}>All this data collectively
                                allows us to more efficiently train our models in
                                understanding the full spectrum of human emotions, even in cases of limited information,
                                such as text and audio only.</p>
                        </div>
                        <div className={'flex items-center gap-4'}>
                            <img src={'/pitch/watch.png'}/>
                            <div
                                className={'rounded-xl overflow-hidden white-grad aspect-square relative w-full'}>
                                <div className={'absolute left-0 top-0 w-full h-full'}>
                                    <Acceleration accelerationLevel={80}></Acceleration>
                                </div>
                            </div>
                            <div
                                className={'rounded-xl overflow-hidden white-grad aspect-square relative w-full'}>
                                <div className={'absolute left-0 top-0 w-full h-full'}>
                                    <HeartRate heartRateLevel={76}></HeartRate>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 gap-10 flex flex-col justify-center items-center'}>
                        <img className={'w-[900px]'} src={'/pitch/temp_dashboard.svg'}/>
                        <p className={'text-center font-roboto font-black text-5xl'}>AI’s output based on all collected
                            data</p>
                        <p className={'font-inter font-light text-center w-4/5'}>Based on the information gathered, the
                            character decides how to respond: Through Facial
                            Expressions, Body Movements, the meaning to be conveyed in the reply, relying on their own
                            data and personality, as well as the nature of the opponent, and also the tone to be chosen.
                            All of this can be tracked in our cutting-edge dashboard.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full bg-[#19191A] py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 gap-10 flex flex-col justify-center items-center'}>
                        <div className={'grid grid-cols-3 items-center gap-8'}>
                            <img src={'/pitch/character/1.gif'}/>
                            <img src={'/pitch/character/2.gif'}/>
                            <img src={'/pitch/character/3.gif'}/>
                        </div>
                        <p className={'text-center font-roboto font-black text-5xl'}>Character Video output</p>
                        <p className={'font-inter font-light text-center w-4/5'}>We create 5 distinct types of character
                            animations with an extensive array of rigs for both the face and body. This enables the
                            algorithm to control the character model with the utmost precision and finesse.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className={'w-full bg-[url("/pitch/usecase_bg.png")] py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 gap-10 flex flex-col justify-center items-center'}>
                        <p className={'font-roboto text-5xl font-black'}>Use Cases</p>
                        <div className={'grid grid-cols-5 gap-4 w-[1200px]'}>
                            <div className={'flex flex-col gap-5'}>
                                <div className={'rounded-lg h-96 flex flex-col items-center relative white-grad'}>
                                    <div className={'w-full rounded-lg h-2/3 absolute bottom-0 usecase-orange'}>

                                    </div>
                                    <img className={'absolute scale-125 bottom-[34px]'} src={'/pitch/usecase1.png'}/>
                                </div>
                                <p className={'text-center font-bold text-xl font-roboto'}>Interactive in-game
                                    advertising</p>

                            </div>
                            <div className={'flex flex-col gap-5'}>
                                <div className={'rounded-lg h-96 flex flex-col items-center relative white-grad'}>
                                    <div className={'w-full rounded-lg h-2/3 absolute bottom-0 usecase-green'}>

                                    </div>
                                    <img className={'absolute scale-110 bottom-4 right-[11px]'}
                                         src={'/pitch/usecase2.png'}/>
                                </div>
                                <p className={'text-center font-bold text-xl font-roboto'}>Customer consultation
                                    in stores</p>

                            </div>
                            <div className={'flex flex-col gap-5'}>
                                <div
                                    className={'rounded-lg h-96 flex overflow-hidden flex-col items-center relative white-grad'}>
                                    <div className={'w-full rounded-lg h-2/3 absolute bottom-0 usecase-blue'}>

                                    </div>
                                    <img className={'absolute scale-105'} src={'/pitch/usecase3.png'}/>
                                </div>
                                <p className={'text-center font-bold text-xl font-roboto'}>Psychological support</p>
                                <ul className={'list-disc flex flex-col items-center flex-col text-center font-roboto font-light'}>
                                    <li>
                                        Virtual friends
                                    </li>
                                    <li>
                                        Rehabilitation groups
                                    </li>
                                    <li>
                                        Deceased person simulation
                                    </li>
                                </ul>

                            </div>
                            <div className={'flex flex-col gap-5'}>
                                <div className={'rounded-lg h-96 flex flex-col items-center relative white-grad'}>
                                    <div className={'w-full rounded-lg h-2/3 absolute bottom-0 usecase-purple'}>

                                    </div>
                                    <img className={'absolute scale-150 bottom-[56px]'} src={'/pitch/usecase4.png'}/>
                                </div>
                                <p className={'text-center font-bold text-xl font-roboto'}>Content creation (series,
                                    movies, animations)</p>

                            </div>
                            <div className={'flex flex-col gap-5'}>
                                <div className={'rounded-lg h-96 flex flex-col items-center relative white-grad'}>
                                    <div className={'w-full rounded-lg h-2/3 absolute bottom-0 usecase-yellow'}>

                                    </div>
                                    <img className={'absolute scale-125 bottom-[32px] left-[29px]'}
                                         src={'/pitch/usecase5.png'}/>
                                </div>
                                <p className={'text-center font-bold text-xl font-roboto'}>Interactive course
                                    hosts/personal tutors</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full pl-24 gap-10 flex flex-col justify-center items-center'}>
                        <div className={'grid grid-cols-7 items-center'}>
                            <div className={'col-span-4 flex gap-8 flex-col'}>
                                <p className={'font-black font-roboto text-5xl'}>Interactive<br/>
                                    In-Game Advertising</p>
                                <p className={'font-inter text-xl w-5/6 font-light'}>Placing NPC characters in games
                                    enables brands to build <br/>relationships with users through unique stories and
                                    quests.
                                    <br/><br/>
                                    Emotional intelligence allows for<br/>
                                    personalized interactions with each user.</p>
                                <div className={'grid grid-cols-4 gap-5 items-center grid-rows-2'}>
                                    <div
                                        className={'col-span-3 p-3 flex items-center gap-6 justify-center row-span-1 rounded-lg h-full white-grad'}>
                                        <p className={'font-gilroy font-extrabold text-5xl'}>$715 BLN</p>
                                        <p className={'font-roboto text-lg font-light leading-[105%]'}>Company <br/>
                                            advertising spend</p>
                                    </div>
                                    <div
                                        className={'col-span-1 flex flex-col items-center justify-between p-5 aspect-square row-span-2 rounded-lg h-full white-grad'}>
                                        <img className={'w-24 aspect-square'} src={'/pitch/ads_logo.svg'}/>
                                        <p className={'font-roboto text-lg text-center font-light leading-[105%]'}>Companies
                                            using <br/>
                                            our technology</p>
                                    </div>
                                    <div
                                        className={'col-span-3 p-3 flex overflow-hidden items-center gap-6 justify-center row-span-1 rounded-lg relative h-full white-grad'}>
                                        <div
                                            className={'w-full h-[85%] opacity-60 absolute bottom-0 left-0 usecase-purple'}>

                                        </div>
                                        <p className={'font-gilroy font-extrabold text-5xl'}>2.6 BLN</p>
                                        <p className={'font-roboto text-lg font-light leading-[105%]'}>Gaming
                                            <br/>
                                            audience</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-span-3 relative'}>
                                <img className={'absolute -left-60 top-20'} src={'/pitch/quest.svg'}/>
                                <img className={'h-full w-full'} src={'/pitch/in-game_sprite.png'}/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full relative px-24 gap-10 flex flex-col justify-center items-center'}>
                        <img className={'absolute w-full left-0 -top-12 h-screen z-[-1]'}
                             src={'/pitch/customer_bg.png'}/>
                        <div className={'grid grid-cols-7 items-center'}>

                            <div className={'col-span-3 relative'}>
                                <img className={'absolute -left-20 top-20'} src={'/pitch/customer_help.svg'}/>
                                <img className={'h-full w-full'} src={'/pitch/consultant.png'}/>
                            </div>
                            <div className={'col-span-4 flex gap-8 flex-col'}>
                                <p className={'font-black font-roboto text-5xl'}>Customer Consultation <br/>
                                    in Stores and Exhibitions</p>
                                <p className={'font-inter text-xl w-5/6 font-light'}>Interactive panels with cameras
                                    enable classification <br/> of customers and their state, as well as interactive
                                    engagement <br/> through consultations.
                                    <br/> <br/>
                                    The emotional intelligence module and the characters lively emotions ensure a more
                                    positive experience when communicating with a consultant.</p>
                                <div className={'grid grid-cols-6 gap-5 items-center grid-rows-2'}>
                                    <div
                                        className={'col-span-5 p-3 flex items-center gap-6 justify-center row-span-1 rounded-lg h-full white-grad'}>
                                        <p className={'font-gilroy font-extrabold text-5xl'}>70+</p>
                                        <p className={'font-roboto text-lg font-light leading-[105%]'}>Number of<br/>
                                            malls in UAE</p>
                                    </div>
                                    <div
                                        className={'col-span-5 p-3 flex items-center gap-6 justify-center row-span-1 rounded-lg h-full white-grad'}>
                                        <p className={'font-gilroy font-extrabold text-5xl'}>1000+</p>
                                        <p className={'font-roboto text-lg font-light leading-[105%]'}>Number of <br/>
                                            stores in UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full pl-24 gap-10 flex flex-col justify-center items-center'}>
                        <div className={'grid grid-cols-7 h-full items-center'}>
                            <div className={'col-span-3 flex gap-8 flex-col'}>
                                <p className={'font-black font-roboto text-5xl'}>Providing<br/>
                                    Psychological Support</p>
                                <p className={'font-inter text-xl w-full font-light'}>Accessible basic psychological
                                    assistance. These characters cannot replace professional psychologists and
                                    psychiatrists, but they can help address fundamental issues.</p>
                                <p className={'font-black font-roboto text-3xl'}>Some possible scenarios:</p>
                                <div
                                    className={'w-full p-4 gap-5 white-grad rounded-lg flex flex-col items-start px-12'}>
                                    <div className={'flex items-center gap-8'}>
                                        <img className={'w-16 aspect-square'} src={'/pitch/scenario1.svg'}/>
                                        <p className={'font-roboto font-light text-xl'}>Establishing personalized <br/>rehabilitation
                                            groups</p>
                                    </div>
                                    <div className={'flex items-center gap-8'}>
                                        <img className={'w-16 aspect-square'} src={'/pitch/scenario2.svg'}/>
                                        <p className={'font-roboto font-light text-xl'}>Creating a virtual copy of a
                                            deceased <br/> person to help cope with loss</p>
                                    </div>
                                    <div className={'flex items-center gap-8'}>
                                        <img className={'w-16 aspect-square'} src={'/pitch/scenario3.svg'}/>
                                        <p className={'font-roboto font-light text-xl'}>Creating virtual friends
                                            for <br/>better child socialization</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-span-4 flex h-full items-center justify-center relative'}>
                                {/*<img className={'absolute -left-60 top-20'} src={'/pitch/quest.svg'}/>*/}
                                <img className={'h-full w-full'} src={'/pitch/psycho_sprite.png'}/>
                                <div className={'absolute bottom-0 flex flex-col items-center'}>
                                    <img className={'w-72'} src={'/pitch/replica_logo.png'}/>
                                    <p className={'font-roboto font-light'}>Companies using this technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full relative px-24 gap-10 flex flex-col justify-center items-center'}>
                        <img className={'absolute w-full left-0 -top-12 h-screen z-[-1]'}
                             src={'/pitch/courses_bg.png'}/>
                        <div className={'grid grid-cols-8 items-center'}>

                            <div className={'col-span-3 relative'}>
                                <img className={'absolute -right-72 -top-10'} src={'/pitch/courses_help.svg'}/>
                                <img className={'h-full w-full'} src={'/pitch/courses.png'}/>
                            </div>
                            <div>

                            </div>
                            <div className={'col-span-4 flex gap-8 flex-col'}>
                                <p className={'font-black font-roboto text-4xl'}>Personal Tutors <br/>
                                    and Course Hosts</p>
                                <p className={'font-inter text-lg leading-[105%] w-5/6 font-light'}>Based on a students
                                    test results, a personalized virtual <br/> tutor is created/selected, tailored for
                                    effective work with the students personality type. <br/> <br/>

                                    The AI-driven tutor can learn and implement new teaching <br/> methods and support
                                    students. The ability to give the <br/> character a personalized appearance also
                                    influences the <br/> level of trust and learnability of the student.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full pl-24 gap-10 flex flex-col justify-center items-center'}>
                        <div className={'grid grid-cols-7 h-full items-center'}>
                            <div className={'col-span-3 flex gap-8 flex-col'}>
                                <p className={'font-black font-roboto text-5xl'}>Unique Content Creation</p>
                                <p className={'font-inter text-xl w-full font-light'}>Combining proprietary technologies
                                    for managing characters emotions and actions, along with ChatGPT with an emotional
                                    intelligence management plugin, and 3D object generation technologies, it is
                                    possible to create endless, unique content upon any users request.</p>
                                <div
                                    className={'w-full p-4 gap-5 white-grad rounded-lg flex flex-col items-start px-12'}>
                                    <div className={'flex items-center gap-8'}>
                                        <img className={'w-16 aspect-square'} src={'/pitch/content.svg'}/>
                                        <p className={'font-roboto font-light text-xl'}>We launched a text-based online series with five different characters and are now developing a virtual environment for them</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-span-4 flex h-full items-center justify-center relative'}>
                                {/*<img className={'absolute -left-60 top-20'} src={'/pitch/quest.svg'}/>*/}
                                <img className={'w-full'} src={'/pitch/content.png'}/>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full px-24 gap-10 flex flex-col justify-center items-center'}>
                        <img className={'w-3/5'} src={'/pitch/partners.svg'}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full py-12 bg-[url("/pitch/tokenomic_bg.svg")] h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full flex flex-col px-24 justify-center items-center'}>
                        <div className={'grid grid-cols-2 items-start'}>
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-roboto text-4xl font-black'}>Our Ask & Use of Funds</p>
                                <div
                                    className={'w-3/4 h-24 p-3 flex overflow-hidden items-center gap-6 justify-center row-span-1 rounded-lg relative h-full white-grad'}>
                                    <div
                                        className={'w-full h-[85%] opacity-60 absolute bottom-0 left-0 usecase-purple'}>

                                    </div>
                                    <p className={'font-gilroy font-extrabold text-5xl'}>500,000$</p>
                                    <p className={'font-roboto text-lg font-light leading-[105%]'}>The amount <br/>
                                        we ask for</p>
                                </div>
                                <div
                                    className={'w-3/4 h-24 p-3 flex items-center gap-6 justify-center row-span-1 rounded-lg h-full white-grad'}>
                                    <p className={'font-gilroy font-extrabold text-5xl'}>10$ MLN</p>
                                    <p className={'font-roboto text-lg font-light leading-[105%]'}>Valuation</p>
                                </div>

                            </div>
                            <div className={'w-full'}>
                                <img src={'/pitch/tokenomic.svg'}/>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-screen flex items-center justify-center'}>
                    <div className={'w-full h-full pl-24 gap-10 flex flex-col justify-center items-center'}>
                        <div className={'grid grid-cols-7 w-full h-full items-center'}>
                            <div className={'col-span-3 flex gap-8 flex-col'}>
                                <p className={'font-black font-gilroy text-5xl'}>Maxim Gogolev</p>
                                <div className={'flex flex-col gap-8'}>
                                     <div className={'flex items-center gap-3'}>
                                         <img className={'aspect-square w-10'} src={'/pitch/phone.png'}/>
                                         <p className={'font-light text-2xl font-roboto'}>+90 507 985 49 28</p>
                                     </div>
                                    <div className={'flex items-center gap-3'}>
                                        <img className={'aspect-square w-10'} src={'/pitch/mail.png'}/>
                                        <p className={'font-light text-2xl font-roboto'}>mog@adsplatform.tech</p>
                                    </div>
                                    <div className={'flex items-center gap-3'}>
                                        <img className={'aspect-square w-10'} src={'/pitch/linked.png'}/>
                                        <p className={'font-light text-2xl font-roboto'}>linkedin.com/in/maxim-gogolev</p>
                                    </div>
                                    <div className={'w-60 opacity-50 rounded-lg bg-[#D9D9D9] aspect-square'}>

                                    </div>
                                </div>

                            </div>
                            <div className={'col-span-4 w-full h-full flex items-center justify-center relative'}>
                                <img className={'h-full absolute bottom-0 w-full'} src={'/pitch/max_bg.png'}/>
                                <img className={'absolute bottom-0 w-4/5'} src={'/pitch/gogolev.png'}/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}
