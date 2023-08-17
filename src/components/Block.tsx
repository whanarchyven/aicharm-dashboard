import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

const Block = (props:any) => {
    return (
        <SwiperSlide className={'w-full h-screen '}>
            <div className={'w-full h-full flex items-center justify-center'}>
                {props.children}
            </div>
        </SwiperSlide>
    );
};

export default Block;