import React,{ useState } from 'react';
import './../css/common.css';
import axios from "axios";
import AnswerWaiting from "./AnswerWaiting";

function Home() {

    const [showAnswerWaiting, setShowAnswerWaiting] = useState(false);
    const [inputs, setInputs] = useState('');

    const onTextChange = (e) => {
        //e: 이벤트 객체
        console.log(">>" + e.target.value)
        setInputs(e.target.value);
    }

    const onClick = () => {
        //setInputs('2');
    }

    const handleClick = async () => {
        setShowAnswerWaiting(true);
    };

    return (
        <div>
            {!showAnswerWaiting && (
                <div className="container">
                    <div className="header">
                        <div className="title">부처님과 대화 하세요</div>
                        <div className="subtitle">당신도 부처가 될수있음</div>
                    </div>
                    <div className="body">
                        <textarea className="input-field" type="text" onChange={onTextChange}
                                  placeholder="이곳을 클릭하여 &#13;&#10;내용 입력하십쇼" onFocus={onClick} onBlur={onClick}/>
                        <button className="button" onClick={handleClick}>여쭤보기</button>
                    </div>
                </div>
            )}
            {showAnswerWaiting && (
                <AnswerWaiting input={inputs}/>
            )}

        </div>
    );
}


export default Home;