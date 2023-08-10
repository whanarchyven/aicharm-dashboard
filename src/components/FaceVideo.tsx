import React from 'react';
import {classList} from "@/helpers/classList";
import InfoTab from "@/components/InfoTab";

interface faceVideoInterface {
    faceVideoLevel?:number
}

const FaceVideo = ({faceVideoLevel}:faceVideoInterface) => {


    return (
        <InfoTab icon={'face'} title={'Face video analytics'}>
            <div className={'relative flex h-44 justify-center font-bold text-7xl items-center'}>
                <img className={'h-full'} src={'/face_neuro.svg'}/>
            </div>
        </InfoTab>
    );
};

export default FaceVideo;