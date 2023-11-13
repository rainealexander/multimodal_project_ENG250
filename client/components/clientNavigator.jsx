import React from "react";
import { getClientData } from "../helpers";

const isObjectEnpty = (obj) => {
    return (
        objectName &&
        Object.keys(obj).length === 0 &&
        obj.constructor === Object
    );
};

export default function ClientNavigator() {

    const displayClientData = () => {
        let data = getClientData();
        let dataList = [];
        for (const key in data) {
            dataList.push(<li>{key + ': ' + data[key]}</li>)
        }
        // for (let i = 0; i < dataEntries.length; i++) {
        //     dataList.push(<li>{dataEntries[i]}</li>);
        //     let innerKeys = Object.keys(data[dataEntries[i]]);
        //     if (innerKeys.length > 0) {
        //         let innerList = Object.entries(data[dataEntries[i]])
        //         console.log(`InnerList: ${innerList}`)
        //         for (let j = 0; j < innerList.length; j++) {
        //             dataList.push(<ul><li>{innerList[j]}</li></ul>);
        //         }
        //     }
        //     //dataList.push(<p>{JSON.stringify(userData[obj])}</p>);
        //     // dataList.push(<ul>);
        //     // for (const sub in data[obj]) {
        //     //     dataList.push(<li>{data[obj][sub]}</li>)
        //     // }
        //     // dataList.push(</ul>);
        // }
        return dataList;
    }

    return (
        <>
            <ul>
                {displayClientData()}
            </ul>
        </>
    )
};
