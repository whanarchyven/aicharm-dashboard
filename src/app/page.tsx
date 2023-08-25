"use client"
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Pagination, Mousewheel} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Typewriter from 'typewriter-effect';
import React, {useCallback, useRef, useState} from "react";
import Emotions from "@/components/Emotions";
import Acceleration from "@/components/Acceleration";
import HeartRate from "@/components/HeartRate";
import TextAnalys from "@/components/TextAnalys";
import FaceVideo from "@/components/FaceVideo";
import FaceEmotions from "@/components/FaceEmotions";
import InfoTab from "@/components/InfoTab";
import BrainAnalytics from "@/components/BrainAnalytics";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import axios from "axios";


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


    const [showMore, setShowMore] = useState(false)

    const swiperRef = useRef<any>(null)

    const [showPop, setShowPop] = useState(false)

    const params = useSearchParams().get('speed');

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')

    const [loadingStatus,setLoadingStatus]=useState('none')


    return (
        <main className="flex justify-center items-center pitch-bg min-h-screen">
            <div className={'sm:max-w-[1920px] w-full max-w-auto'}>
                <div className={'w-full h-full sm:h-screen bg-[url("/form_bg.png")] grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-32 px-4 py-6 items-center justify-center sm:px-24'}>
                    <div
                        className={'flex flex-col sm:col-start-1 gap-4 sm:gap-6 items-center w-full backdrop-blur-xl p-8 bg-white bg-opacity-20 rounded-lg'}>
                        <input value={name} onChange={(event) => {
                            setName(event.target.value)
                        }} placeholder={'Your name'}
                               className={'w-full text-white placeholder:text-white placeholder:opacity-50 outline-none text-sm p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg'}/>
                        <input value={phone} onChange={(event) => {
                            setPhone(event.target.value)
                        }} placeholder={'Email'}
                               className={'w-full text-white placeholder:text-white placeholder:opacity-50 outline-none text-sm p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg'}/>
                        <input value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} placeholder={'Phone number'}
                               className={'w-full text-white placeholder:text-white placeholder:opacity-50 outline-none text-sm p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg'}/>
                        <input value={company} onChange={(event) => {
                            setCompany(event.target.value)
                        }} placeholder={'Company name'}
                               className={'w-full text-white placeholder:text-white placeholder:opacity-50 outline-none text-sm p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg'}/>
                        <input value={role} onChange={(event) => {
                            setRole(event.target.value)
                        }} placeholder={'Role'}
                               className={'w-full text-white placeholder:text-white placeholder:opacity-50 outline-none text-sm p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg'}/>
                        <div onClick={() => {
                            setLoadingStatus('pendind');
                            axios.post(`https://script.google.com/macros/s/AKfycbzIyhYXCIRfJFe_HJaN9CiLH3HBXX-UC_AUXysZPsm0HycDOGp0DtAypGStjpp2HIqC1g/exec?p1=${name}&p2=${email}&p3=${phone}&p4=${company}&p5=${role}`, {}, {
                                headers: {
                                    'Content-Type': 'text/plain;charset=utf-8',
                                },
                            }).then((res) => {
                                setLoadingStatus('sended');
                            })
                        }}
                             className={'text-white cursor-pointer font-inter shadow-xl font-normal sm:text-xl flex items-center bg-[#D630FF] sm:w-60 w-full p-3 rounded-lg sm:h-16 justify-center'}>
                            {loadingStatus=='none'?'Test Beta':null}
                            {loadingStatus=='pendind'?<img className={'w-9 aspect-square animate-spin'} src={'/loading.svg'}/>:null}
                            {loadingStatus=='sended'?'Successfully sended!':null}
                        </div>
                    </div>
                    <div className={'flex sm:col-start-2 row-start-1 items-start flex-col gap-3'}>
                        <img


                            className={'w-96'} src={'/pitch/logo.svg'}/>
                        <div


                            className={'bg-white text-black font-inter text-xs sm:text-2xl rounded-lg items-center p-2 sm:p-4 sm:px-6 w-full flex justify-between'}>
                            <Typewriter options={{
                                strings: ['Characters with AI, EI, and personality ', 'Characters with AI, EI, and personality '],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}/>
                            <img className={'w-5 sm:w-10 aspect-aquare'} src={'/pitch/send_message.svg'}/>
                        </div>
                        <p


                            className={'text-white font-inter text-xs sm:text-xl w-full sm:w-4/5 font-light'}>We create software that
                            allows for the creation and integration of more human-like and empathetic virtual
                            assistants into products, complete with their own personalities and traits, as well
                            as their own knowledge.
                        </p>

                    </div>
                </div>
            </div>
        </main>
    )
}
