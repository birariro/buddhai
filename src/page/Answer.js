import React,{ useState } from 'react';
import './../css/common.css';

function answer() {


    return (
        <div className="container">
            <div className="header">
                <div className="title">해답 타이틀</div>
                <div className="subtitle">해답 보조 타이틀</div>
            </div>
            <div className="body">
                <button className="button">공유</button>
            </div>
        </div>
    );
}


export default answer;