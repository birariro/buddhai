import React,{ useState } from 'react';
import './../css/common.css';

function Home() {

    const [inputs, setInputs] = useState({
        value: ''
    });
    const {input} = inputs;

    const onTextChange = (e) => {
        //e: 이벤트 객체
        console.log(">>" + e.target.value)
        setInputs({
            value: e.target.value
        });


    }

    const onClick = () => {
        setInputs('1');
    }

    const [apiResult, setApiResult] = useState('');
    const handleClick = async () => {
        console.log(">>" + inputs.value)
        // try {
        //     const response = await fetch('http://localhost:8080');
        //     const data = await response.text();
        //     setApiResult(data);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="title">타이틀</div>
                <div className="subtitle">보조 타이틀</div>
            </div>
            <div className="body">
                <textarea className="input-field" type="text" onChange={onTextChange} placeholder="클릭히얼 &#13;&#10;내용 플리즈" onFocus={onClick} onblur={onClick} />
                <button className="button" onClick={handleClick}>버튼</button>
            </div>
        </div>
    );
}


export default Home;