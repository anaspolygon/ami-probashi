import Image from 'next/image';
import React from 'react';

const Expatriate = () => {
    return (
       <div className='px-4 md:px-0'>
         <div className='flex flex-col md:flex-row gap-6 p-4 md:py-6  md:px-8 border border-[#187E7D] rounded-lg md:mt-8'>
            <div className='flex-1'>
                <p className='roboto font-normal text-lg leading-7 text-[#334155] mb-8'>Ami Probashi’s partnership with BRAC focuses on providing comprehensive training programs and support services to aspiring and returning migrants alike. BRAC’s extensive experience in educational and vocational training ensures high-quality, relevant courses are available through the Ami Probashi platform. Together, they offer a range of skill development opportunities, from technical training to language courses, all aimed at improving employability. This collaboration also involves joint initiatives to support returnee migrants, helping them reintegrate into the local economy. </p>
                <p className='roboto font-normal text-lg leading-7 text-[#334155]'>
                The combined efforts of Ami Probashi and BRAC ensure that individuals are well-prepared for overseas employment, enhancing their chances of success.</p>
            </div>
            <div className='min-w-full md:min-w-[260px] mt-3 md:mt-0'>
                <Image className='w-full  md:w-[260px] h-auto' src="/partnership/partnership.svg" width={260} height={216} alt=''/>
            </div>
        </div>
       </div>
    );
};

export default Expatriate;