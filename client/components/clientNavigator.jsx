import React from "react";

const isObjectEnpty = (obj) => {
    return (
        objectName &&
        Object.keys(obj).length === 0 &&
        obj.constructor === Object
    );
};

export default function ClientNavigator() {

    window.addEventListener('scroll', () => {
        let back = document.getElementById('phone-data');
        let inside = document.getElementById('client-nav-data');
        back.style.transform = 'translateY(-' + (window.pageYOffset * 0.3) + 'px)';
        inside.style.transform = 'translateY(-' + (window.pageYOffset * 0.25) + 'px)';
    });

    const displayClientData = () => {
        let data = window.navigator;
        console.log('ClientNavData: ', data);
        let dataList = [];
        dataList.push(<li key={'deviceMemory'}>{'Device RAM: ' + data['deviceMemory'] + 'gb'}</li>);
        dataList.push(<li key={'browserData'}>{'Browser: ' + data['userAgentData']['brands'][0]['brand']}</li>);
        dataList.push(<li key={'mobileDevice'}>{'Mobile Device: ' + data['userAgentData']['mobile']}</li>);
        dataList.push(<li key={'devicePlatform'}>{'Platform: ' + data['userAgentData']['platform']}</li>);
        
        return dataList;
    }

    return (
        <>
            <div
                id='phone-data'
                className=' z-10 relative bg-phonePic py-12 h-max bg-cover bg-center bg-no-repeat'
            >
                <section id='client-nav-data' className=" z-20 py-20 relative flex flex-col items-center bg-slate-100">
                    <h1 className=" text-3xl font-bold mb-4">Generic Device Data</h1>
                    <p>The following information is available by default to internet browsers</p>
                    <ul className="list-disc">
                        {displayClientData()}
                    </ul>
                </section>
            </div>
        </>
    )
};
