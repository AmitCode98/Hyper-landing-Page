import React from 'react'
import CircleImage from '../assets/images/CircleImg.svg'
// import RingImg from '../assets/images/ringimg1.svg'
import BrandImg1 from '../assets/images/brandImg4.png'
import BrandImg2 from '../assets/images/brandImg3.png'
import BrandImg3 from '../assets/images/brandImg2.png'
import BrandImg4 from '../assets/images/brandImg1.png'
import PointIcons1 from '../assets/icons/pointIcon1.svg'
import PointIcons2 from '../assets/icons/pointIcon2.svg'
import PointIcons3 from '../assets/icons/pointIcon3.svg'
import PointIcons4 from '../assets/icons/pointIcon4.svg'

const data = [
    {
        id: 1,
        brandImg: BrandImg1,
        pointIcons: PointIcons1,
        name: 'Sacré Armand',
        tags: ['copywriting', 'Stratégie éditoriale', 'Brand content']
    },
    {
        id: 2,
        brandImg: BrandImg2,
        pointIcons: PointIcons2,
        name: 'Smoteo',
        tags: ['Stratégie de marque', 'Copywriting', 'Design']
    },
    {
        id: 2,
        brandImg: BrandImg3,
        pointIcons: PointIcons3,
        name: 'Niir',
        tags: ['Communication', 'Stratégie de marque', 'Stratégie éditoriale']
    },
    {
        id: 2,
        brandImg: BrandImg4,
        pointIcons: PointIcons4,
        name: 'Yokitup',
        tags: ['Stratégie éditoriale', 'Stratégie de marque', 'Design', 'Copywriting', 'Brand content']
    },

    // Add more objects as needed
];

const Brands = () => {
    return (
        <section className='text-white w-full'>
            <div className='flex justify-between items-end px-20 mt-40'>
                <div className='flex  gap-5'>
                    <div className=' text-[28px] italic'>
                        <p>Work</p>
                    </div>
                    <div className='text-[56px] uppercase font-thin leading-none p-0 '>
                        <p>creating</p>
                        <p className='flex items-center'>L<span><img src={CircleImage} alt="" className='' /></span>ve brands</p>
                    </div>
                </div>
                <div className=''>
                    <button className='border px-5 py-4 rounded-full uppercase font-black relative '>nous contacter</button>
                    <div
                        className='bg-white h-9 w-9 flex absolute -mt-4 ml-44'>
                    </div>

                </div>
            </div>



            <div className='w-full px-20 mt-16'>
                <div className='grid grid-cols-2 gap-x-5 gap-y-11'>
                    {data.map((item) => (
                        <div key={item.id} className='space-y-2'>
                            <img src={item.brandImg} alt="brand img" />
                            <div className='flex items-center gap-3'>
                                <img src={item.pointIcons} alt="icons" />
                                <p className='text-lg font-black'>{item.name}</p>
                            </div>
                            <div className='flex gap-2'>
                                {item.tags.map((tag, index) => (
                                    <p key={index} className='bg-white text-black pl-1 py-[2px] pr-4 rounded-sm text-xs font-medium flex items-center'>
                                        {tag}
                                    </p>

                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>


    )
}

export default Brands



