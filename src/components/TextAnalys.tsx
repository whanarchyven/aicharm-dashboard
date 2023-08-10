import React from 'react';
import InfoTab from "@/components/InfoTab";
import {classList} from "@/helpers/classList";

interface textAnalysInterface {
    messages:Array<{
        time:string,
        emotion:number,
        text:string
    }>
}

const TextAnalys = ({messages}:textAnalysInterface) => {
    return (
        <InfoTab icon={'brain'} title={'Text analytics'}>
            <div className={'h-full py-4 justify-end flex flex-col gap-3 items-end'}>
                {messages.map((item,counter)=>{
                    return(
                        <div key={counter} className={'bg-[#415165] gap-0 rounded-lg grid items-start p-3 grid-cols-12 w-full'}>
                            <div className={classList('col-span-1 flex justify-center',counter==messages.length-1?'opacity-100':'opacity-10')}>
                                <img className={'w-8'} src={`/emotions/${item.emotion}.png`}/>
                            </div>
                            <p className={classList('col-span-10 pl-3 font-light')}>{item.text}</p>
                            <p className={classList('col-span-1 flex text-xs justify-end font-extralight')}>{item.time}</p>
                        </div>
                    )
                })}
            </div>
        </InfoTab>
    );
};

export default TextAnalys;