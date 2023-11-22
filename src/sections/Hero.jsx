// import React from 'react'
// import yellowstar from '../assets/images/yellowStar.svg'
// import herobgimg from '../assets/images/herobgimg.svg'

// const Hero = () => {
//     return (
//         <section className='select-none w-full relative'>
//             <div className='flex justify-center'>
//                 <img src={herobgimg}
//                     alt=""
//                     className='absolute -z-10 top-16'/>
//             </div>

//             <div className='flex flex-col justify-center items-center'>
//                 <img src={yellowstar}
//                     alt="star img"
//                     className='mb-3'
//                     height={25}
//                     width={25}
//                 />
//                 <h1 className='font-Inter font-black text-[80px] tracking-wide leading-tight text-primary'>REVEAL</h1>
//                 <div className='flex justify-between w-full px-20  mb-6 relative'>
//                     <div className='flex gap-2 text-[12px] text-primary items-center '>
//                         <p>act</p>
//                         <span className='w-6 h-[1px] bg-primary'></span>
//                         <p>together</p>
//                     </div>
//                     <h1 className='font-Inter font-black text-[80px] tracking-wide leading-tight text-primary'>THE BE[A]ST</h1>
//                     <div className='flex gap-2 text-[12px] text-primary items-center '>
//                         <p>create</p>
//                         <span className='w-6 h-[1px] bg-primary'></span>
//                         <p>your story</p>
//                     </div>
//                 </div>
//                 <div className='items-center relative'>
//                         <p className=' bg-primary text-black text-xs py-[2px] pl-1 pr-4 rounded-sm tracking-[1px]'>HYPEREALIST</p>
//                         <div className='absolute top-0 w-[191px] -right-52 space-y-4 '>
//                             <p className='text-xs font-thin uppercase text-primary tracking-wider'>(h muet) \ipɛʁealist\</p>
//                             <p className='text-primary text-lg'>Agence spécialisée
//                                 en stratégie de marque
//                                 et brand content</p>
//                         </div>
//                     </div>

//             </div>











{/* <div className='flex justify-between items-center px-20 relative'>
                <div className='flex gap-2 text-[12px] text-primary items-center'>
                    <p>act</p>
                    <span className='w-6 h-[1px] bg-primary'></span>
                    <p>together</p>
                </div>

                <div className='sticky left-[50%] translate-x-[-50%] flex flex-col items-center space-y-8'>
                    <img src={yellowstar}
                        alt="star img"
                        className=''
                        height={23}
                        width={23}
                    />

                    <h1 className='font-Inter font-black text-[80px] tracking-wide leading-tight text-primary text-center'>REVEAL<br />THE BE[A]ST</h1>

                    <div className='text-white items-center relative'>
                        <p className=' bg-primary text-black text-xs py-[2px] pl-1 pr-4 rounded-sm tracking-[1px]'>HYPEREALIST</p>
                        <div className='absolute top-0 w-[193px] -right-52 space-y-4 '>
                            <p className=' text-xs uppercase text-primary'>(h muet) \ipɛʁealist\</p>
                            <p className='text-primary text-lg'>Agence spécialisée
                                en stratégie de marque
                                et brand content</p>
                        </div>
                    </div>

                </div>
                <div className='flex gap-2 text-[12px] text-primary items-center '>
                    <p>create</p>
                    <span className='w-6 h-[1px] bg-primary'></span>
                    <p>your story</p>
                </div>

            </div>
            <div className='flex justify-center'>
                <img src={herobgimg}
                    alt=""
                    className='absolute top-[46%] -z-10 ' />
            </div> */}












{/* <img src={yellowstar}
                alt="star img"
                className='m-auto mb-16'
            />

            <div className='flex justify-center items-center relative'>
                <img src={herobgimg} alt="" className='m-auto' />
                <h1 className='font-Inter font-black text-[80px]  leading-none text-primary absolute -top-[11%]'>REVEAL</h1>

                <div className='absolute flex w-full justify-between items-center px-20'>
                    <div className='flex gap-2 items-center text-[12px] text-primary'>
                        <p>act</p>
                        <span className='w-6 h-[1px] bg-primary'></span>
                        <p>together</p>
                    </div>
                    <h1 className='font-Inter font-black text-[80px]  leading-none text-primary'>THE BE[A]ST</h1>
                    <div className='flex gap-2 items-center text-[12px] text-primary'>
                        <p>create</p>
                        <span className='w-6 h-[1px] bg-primary'></span>
                        <p>your story</p>
                    </div>
                </div>
            </div>

            <div className='text-white flex justify-center '>
                <p className='text-white'>HYPEREALIST</p>
                <div>
                    <p>(h muet) \ipɛʁealist\</p>
                    <p>Agence spécialisée
                        en stratégie de marque
                        et brand content</p>
                </div>
            </div> */}
{/* </section >
    )
}
export default Hero; */}


import React from 'react';
import YellowStarImage from '../assets/images/yellowStar.svg';
import HeroBackgroundImage from '../assets/images/herobgimg.svg';

const Hero = () => {
    const Title = ({ text }) => (
        <h1 className='font-Inter font-black text-[80px] tracking-wide leading-tight text-primary'>
            {text}
        </h1>
    );

    const Divider = () => (
        <div className='flex gap-2 text-[12px] text-primary items-center'>
            <p>act</p>
            <span className='w-6 h-[1px] bg-primary'></span>
            <p>together</p>
        </div>
    );

    const TextBlock = ({ text }) => (
        <div className='flex gap-2 text-[12px] text-primary items-center'>
            <p>{text}</p>
            <span className='w-6 h-[1px] bg-primary'></span>
            <p>your story</p>
        </div>
    );

    return (
        <section className='select-none w-full relative'>
            <div className='flex justify-center'>
                <img src={HeroBackgroundImage} alt='' className='absolute -z-10 top-16' />
            </div>

            <div className='flex flex-col justify-center items-center'>
                <img src={YellowStarImage} alt='star img' className='mb-3' />
                <Title text='REVEAL' />
                <div className='flex justify-between w-full px-20 mb-6 relative'>
                    <Divider />
                    <Title text='THE BE[A]ST' />
                    <TextBlock text='create' />
                </div>
                <div className='items-center relative'>
                    <p className='bg-primary text-black text-xs py-[2px] pl-1 pr-4 rounded-sm tracking-[1px]'>
                        HYPEREALIST
                    </p>
                    <div className='absolute top-0 w-[191px] -right-52 space-y-4 '>
                        <p className='text-xs font-thin uppercase text-primary tracking-wider'>
                            (h muet) \ipɛʁealist\</p>
                        <p className='text-primary text-lg'>Agence spécialisée en stratégie de marque et brand content</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;




