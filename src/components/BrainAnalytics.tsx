import React from 'react';
import FilteredChart from "@/components/FilteredChart";
import InfoTab from "@/components/InfoTab";

const BrainAnalytics = () => {

    const data = {

        filter2: {
            charts: [
                {
                    label: 'Mickey Mouse',
                    data: [50, 41, 43, 27, 63, 39, 28, 35, 53, 59, 38, 49, 44, 32, 20, 52, 62, 46, 57, 43]
                },
            ]
        },

    }

    return (
        <InfoTab addFilter={true} icon={'brain'} title={'Brain activity analytics'}>
            <div className={'h-28'}>
                <FilteredChart infoTab={{
                    description: 'This graph shows the number of players who entered the metaverse each day over a certain period of time.',
                    title: 'Players', icons: '/images/icons/players.svg'
                }} chart={{
                    type: 'line',
                    beginAtZero: true, steps: 500, maxValue: 2000, dataSets: [...data.filter2.charts],
                    labels: ['28.02', '01.03', '02.03', '03.03', '04.03', '05.03', '06.03', '07.03', '08.03', '09.03', '10.03', '11.03', '12.03', '13.03', '14.03', '15.03', '16.03', '17.03', '18.03', '19.03'],
                    labelFormatCallback: 'players'
                }} filtration={{type: ['monthly', 'select']}}/>
            </div>
            <div className={'w-full grid grid-cols-8'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:10</p>
                    <img className={'aspect-square w-6'} src={'/emotions/1.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:15</p>
                    <img className={'aspect-square w-6'} src={'/emotions/2.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:20</p>
                    <img className={'aspect-square w-6'} src={'/emotions/3.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:25</p>
                    <img className={'aspect-square w-6'} src={'/emotions/4.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:30</p>
                    <img className={'aspect-square w-6'} src={'/emotions/5.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:35</p>
                    <img className={'aspect-square w-6'} src={'/emotions/6.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:40</p>
                    <img className={'aspect-square w-6'} src={'/emotions/7.png'}/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-inter font-extralight text-xs'}>07:50</p>
                    <img className={'aspect-square w-6'} src={'/emotions/8.png'}/>
                </div>
            </div>
        </InfoTab>
    );
};

export default BrainAnalytics;