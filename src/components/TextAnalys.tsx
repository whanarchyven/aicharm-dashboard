"use client"
import React, {useEffect, useState} from 'react';
import InfoTab from "@/components/InfoTab";
import {classList} from "@/helpers/classList";
import axios from "axios";

interface textAnalysInterface {
    emotionalContext: any,
}

const TextAnalys = ({emotionalContext}: textAnalysInterface) => {

    const [userMessage, setUserMessage] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const [messages, setMessages] = useState([])

    const url = 'https://ptq.pw/mg/aicharm/loh3ohNgiZohc3buch8hahwieshuy4xe/test/1/chat';

    const fetchMessages = async () => {
        axios.get(url).then((res) => {
            console.log(res.data)
            if (res.data) {
                setMessages(res.data.messages)
            }
        })
    }

    useEffect(() => {
        fetchMessages();
    }, [isLoading])

    return (
        <InfoTab className={'px-4'} icon={'brain'} title={'Text analytics'}>
            <div className={'h-full px-4 relative py-4 pb-0 overflow-y-scroll items-end'}>
                {messages.map((item: any, counter) => {
                    return (
                        <div key={counter}
                             className={'bg-[#A34EDF] my-3 bg-opacity-20 gap-0 rounded-lg grid items-start p-3 grid-cols-12 w-full'}>
                            <div
                                className={classList('col-span-1 flex justify-center', counter == messages.length - 1 ? 'opacity-100' : 'opacity-10')}>
                                <p>{item?.emoticon}</p>
                            </div>
                            <p className={classList('col-span-10 pl-3 font-light')}>{item.text}</p>
                            <p className={classList('col-span-1 flex text-xs justify-end font-extralight')}>{item.role}</p>
                        </div>
                    )
                })}
                <div
                    className={'bg-[#A34EDF] w-full bottom-0 left-0 h-16 flex items-center gap-3 rounded-xl px-4 py-2 sticky'}>
                    <div className={'w-full h-full rounded-xl border-2 border-white'}>
                        <textarea onChange={(event) => {
                            setUserMessage(event.target.value)
                        }}
                                  className={classList('w-full h-full bg-transparent outline-none p-2', isLoading ? 'opacity-50' : 'opacity-100')}></textarea>
                    </div>
                    {isLoading ? <img src={'/loading.svg'} className={'w-12 animate-spin p-2 aspect-square'}/> : <div
                        className={'w-12 bg-white p-2 rounded-full flex items-center justify-center cursor-pointer aspect-square'}
                        onClick={() => {
                            setIsloading(true);
                            // axios.post(url,{
                            //     text:userMessage,
                            //     emotionalContext:emotionalContext
                            // },{headers: {"Access-Control-Allow-Origin": "*"}}).then((res)=>{
                            //     console.log(res);
                            //     setIsloading(false)
                            // })

                            fetch("https://ptq.pw/mg/aicharm/loh3ohNgiZohc3buch8hahwieshuy4xe/test/1/chat", {
                                method: "POST",
                                body: JSON.stringify({text:userMessage,emotionalContext:emotionalContext})
                            }).then((res)=>{
                                console.log(res)
                            })

                        }}>
                        <img src={'/send.svg'}/>
                    </div>}

                </div>
            </div>
        </InfoTab>
    );
};

export default TextAnalys;