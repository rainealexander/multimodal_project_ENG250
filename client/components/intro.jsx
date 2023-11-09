import React from 'react';

export default function Intro() {

    window.addEventListener('scroll', () => {
        let elem = document.getElementById('intro-parallax');
        elem.style.transform = 'translateY(-' + (window.pageYOffset * 1.2) + 'px)';
    });
    return (
        <section
            id='intro-parallax'
            className='relative bg-slate-100'
        >
            <div
                className='relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 md:flex md:h-screen md:items-center md:px-8 bg-slate-100'
            >
                <div className=' p-28 py-40 max-w-screen-lg max-h-full mx-auto text-center flex flex-col items-center' >
                    <h1 className=' text-4xl block font-bold text-black sm:text-2xl'>
                        Cookies, Cookies, Everywhere.
                    </h1>
                    <p className=' text-sm text-black sm:text-base'>
                        Such an innocuous term, cookies. It brings to mind a sweet treat paired with a glass of milk,
                        but what you think is chocolate chip turns out to be raisin.
                    </p>
                </div>
            </div>

        </section>
    );
}
