import Image from 'next/image';
import React from 'react';

const Government = () => {
    return (
        <div className='px-4 md:px-0 flex flex-col md:flex-row justify-between md:gap-16 md:mt-8'>
            <div className='flex-1'>
                <div className='mb-4 md:mb-6'>
                    <h2 className='barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1'>BMET Registration</h2>
                    <p className='roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] '>Skip queues and securely register into Bangladesh’s migrant database from the comfort of your home with our digital registration. Get your QR-code registration card instantly for easy verification and access. <a className='text-[#187E7D] text-sm md:text-lg font-semibold underline' href=''> Learn More</a></p>
                </div>
                <div className='mb-4 md:mb-6'>
                    <h2 className='barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1'>PRE-Departure Orientation (PDO)</h2>
                    <p className='roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] '>Enroll into PDO classes, attend via biometric verification and receive your QR-code certificate directly on your phone. Pre-departure orientation ensures informed and orderly migration. <a className='text-[#187E7D] text-sm md:text-lg font-semibold underline' href=''> Learn More</a></p>
                </div>
                <div className='mb-4 md:mb-6'>
                    <h2 className='barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1'>General Training </h2>
                    <p className='roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] '>Apply directly to your desired courses through a seamless, paperless process with over 200K courses available at 120 technical training centers nationwide. Get certified training and upskill yourself to find the best employment opportunities abroad.<a className='text-[#187E7D] text-sm md:text-lg font-semibold underline' href=''> Learn More</a></p>
                </div>
                <div className='mb-4 md:mb-6'>
                    <h2 className='barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1'>Emigration Clearance</h2>
                    <p className='roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] '>Apply for Emigration clearance digitally, avoiding queues, middlemen, hidden fees and long processing times. Track your application online and instantly receive your QR-code Emigration card, required to pass airport emigration<a className='text-[#187E7D] text-sm md:text-lg font-semibold underline' href=''> Learn More</a></p>
                </div>
            </div>
            <div className='min-w-full md:min-w-[433px] pt-8 md:pt-[78px]'>
               <Image className='w-full md:w-[433px] h-auto' src="/workers/government_service.svg" width={433} height={487} alt=""/>
            </div>
        </div>
    );
};

export default Government;