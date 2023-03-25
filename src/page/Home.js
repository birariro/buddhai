import React,{ useState } from 'react';
import './../css/common.css';
import axios from "axios";

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

        const apiUrl = "https://owq5kkdv09.execute-api.us-east-1.amazonaws.com/default/dumyEchoLambda";
        console.log("apiUrl : "+ apiUrl);

        axios.get(apiUrl,{ params : {"text" : inputs.value}})
            .then(response => {
                console.log("response : "+ response.data);
                alert(response.data);

            })
            .catch(error => console.log("error: "+error));

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