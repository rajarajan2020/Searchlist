import React, { Component } from 'react';
import Feature from './Feature';

function FeatureList(props){
    // let flags = props.flags.map((flag, i)=> {
    let dataList = props.filteredList.map((data, i)=> {
        return <Feature key={i} title={data.title} img={data.img} location={data.location}/>
    })
    
    return(
        <div>
            {dataList}
        </div>
    )
}

export default FeatureList;