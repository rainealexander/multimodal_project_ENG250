import React from 'react';

export default function Intro() {

    window.addEventListener('scroll', () => {
        let back = document.getElementById('intro-parallax');
        back.style.transform = 'translateY(-' + (window.pageYOffset * 1.2) + 'px)';
        let imgafter = document.getElementById('cookie-jar');
        imgafter.style.transform = 'translateY(-' + (window.pageYOffset * 0.2) + 'px)';
    });
    return (
        <div
            id='cookie-jar'
            className=' z-0 relative bg-cookieJar h-max bg-cover bg-center bg-no-repeat'
        >
            <section
                id='intro-parallax'
                className=' z-20 relative h-[100vw] my-8 pb-12 bg-slate-100'
            >
                <div
                    className='relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 md:flex md:h-screen md:items-center md:px-8 bg-slate-100'
                >
                    <div className=' p-28 py-40 max-w-screen-lg max-h-full mx-auto text-center flex flex-col items-center' >
                        <h1 className=' mb-5 text-4xl block font-bold text-black sm:text-2xl'>
                            Cookies, Cookies, Everywhere.
                        </h1>
                        <p className=' indent-12 text-left text-xl text-black md:text-lg'>
                            Such an innocent term, cookies. It brings to mind a sweet treat paired with a glass of milk,
                            but in reality what you think is chocolate chip turns out to be... raisin.
                        </p>
                        <span className=' text-center px-10 py-8 my-8 mx-auto text-xl italic font-mono border-2 border-slate-600 rounded-md shadow-md'>
                            "This site uses Cookies."
                        </span>
                        <p className=' indent-12 text-left text-xl text-black md:text-lg'>
                            Most of us see these cookie notices multiple times a day, but how often do you stop to think before clicking "OK?"
                            While cookies can be used to save site preferences and improve the user experience, they can also expose a lot of information to the site you're visiting.
                        </p>
                        <p className=' indent-12 text-left text-xl text-black md:text-lg'>
                            Cookies can be used to identify your device across internet access points, tracking your general location without  needing GPS.
                            Some cookies also record what websites you visit. This information can be used solely for targeted advertising, but is often used to track user activity across the web.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
