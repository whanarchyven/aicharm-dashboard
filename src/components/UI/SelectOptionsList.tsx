import React, {useState} from 'react';
import {classList} from "@/helpers/classList";

interface selectOptionsInterface {
    currentValue: string,
    variants: Array<string>,
    setCurrentValue: (item: string) => any,
    inputStyle?:boolean,
    title?:string,
    className?:string
}

const SelectOptionsList = ({currentValue, title, inputStyle, className, setCurrentValue, variants}: selectOptionsInterface) => {

    const [isOpen, setIsOpen] = useState(false)

    const translateIcon=()=>{
        if(isOpen){
            return ' rotate-0 '
        }
        else{
            return ' -rotate-90 '
        }
    }

    const toggleAnimation=()=>{
        if(isOpen){
            return ' animate-fade-in-down '
        }
        else{
            return ' animate-fade-in-up '
        }
    }

    return (
        <div className={classList(className?className:'')}>
            {title?<div className={classList('flex w-full items-center mb-2 justify-between')}>
                <div>
                    <p className={'text-white text-lg font-bold'}>{title}</p>
                </div>
            </div>:null}
            <div className={classList(!inputStyle?'min-w-32 p-2 h-8 rounded-full flex items-center dark:border-0 transition-colors duration-300 dark:bg-black-offset justify-center border-white border-[1px]':'placeholder:text-white placeholder:opacity-50 w-full flex items-start text-white p-3 rounded-xl bg-white bg-opacity-20')}>
                <div className={'w-full relative text-white font-semibold text-center'} onClick={()=>{setIsOpen(!isOpen)}}>
                    <div className={'flex cursor-pointer justify-between items-center px-3'}>
                        <p>{currentValue}</p>
                        <img src={'/images/icons/close_burger.svg'} className={'transition-all duration-300 rounded-full ml-3 bg-white bg-opacity-[0.15] w-5 h-5 p-1 '+translateIcon()}/>
                    </div>
                    {isOpen ? <div className={classList(!inputStyle?'duration-300 transition-transform duration-300 absolute text-left pl-3 p-3 dark:bg-black-offset dark:text-white bg-white text-black z-50 min-w-32 left-0 top-9 rounded-xl':'uration-300 transition-transform duration-300 absolute text-left pl-3 p-3 w-full z-50 min-w-32 left-0 top-9 rounded-xl rounded-xl bg-[rgba(255,255,255,0.20)] backdrop-blur-xl',toggleAnimation())}>{variants.map((item) => {
                        if(item!=currentValue){
                            return <p key={item} onClick={()=>{setCurrentValue(item)}} className={'my-2 whitespace-nowrap hover:bg-black dark:border-white hover:bg-opacity-5 cursor-pointer border-b-[1px]'}>{item}</p>
                        }
                    })}</div> :null}
                </div>
            </div>
        </div>
    );
};

export default SelectOptionsList;