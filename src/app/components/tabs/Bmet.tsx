import Image from 'next/image';
import React from 'react';

const Bmet = () => {
    return (
        <div className='px-4 md:px-0 flex flex-col md:flex-row md:mt-8'>
            <div className='flex-1'>
                <p className='mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]'>Ami Probashi revolutionized migrant registration by digitizing BMET’s manual processes. Our 2021 launch enabled aspiring migrants to bypass long queues and hidden fees through hassle-free online registration. Over 3.5 million migrants have registered through our platform, a 500% increase from manual methods </p>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className='mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]'>In 2023 we introduced of e-emigration clearance. By eliminating physical queues and paperwork, we've streamlined the process for both migrants and agencies. Our automated system verifies data, offers real-time tracking, and instantly issues QR-code smart cards. This empowers aspiring migrant workers to bypass middlemen and save significantly on hidden fees</p>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className='mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]'>The government's dedicated portal facilitates efficient application tracking and approval. Our data analytics enable them to identify trends, address bottlenecks, allocate resources effectively, and optimize the migration proces<a className='text-[#187E7D] text-sm md:text-lg font-semibold underline' href=''> Learn More</a></p>
            </div>
            <div className='min-w-full md:min-w-[493px]'>
                <Image className='w-full md:w-[493px] h-auto' src="/stackholders/bmet.svg" width={493} height={470} alt="" />
            </div>
        </div>
    );
};

export default Bmet;