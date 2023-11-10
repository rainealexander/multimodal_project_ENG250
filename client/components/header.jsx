import React from 'react';
//import dataImg from './dataimg.jpg';

export default function Header() {
    window.addEventListener('scroll', () => {
        let back = document.getElementById('header-parallax');
        let inside = document.getElementById('header-inner');
        back.style.transform = 'translateY(-' + (window.pageYOffset * 0.1) + 'px)';
        inside.style.transform = 'translateY(-' + (window.pageYOffset * 0.8) + 'px)';
    });
    return (
        <section>
            <div 
                id='header-parallax'
                className='relative bg-dataImg bg-cover bg-center bg-no-repeat'
            >
                <div
                    className='absolute inset-0 bg-black/40'
                ></div>
                <div
                    id='header-inner'
                    className=' relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 md:flex md:h-screen md:items-center md:px-8'
                >
                    <div className=' p-28 py-40 max-w-screen-lg max-h-full mx-auto text-center flex flex-col items-center border-2 border-white'>
                        <h1 className=' text-4xl block font-bold text-white'>
                            Data Collection on the World Wide Web
                        </h1>
                        <h2 className='text-4xl mt-4 max-w-lg text-white sm:text-2xl'>
                            Who's data is it anyway?
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

{/* <div className='max-w[1440px] mx-auto p-4'>
    <div className='max-h-[900px] relative'>
        <div className='absolute w-full h-full text-white bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                Data Collection
            </h1>
        </div>
        <img
            className='w-full max-h-[900px] object-cover'
            src={dataImg}
            alt='Image of window with the word "Data"'
        />
    </div>
</div> */}