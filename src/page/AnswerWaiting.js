import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import axios from "axios";

function AnswerWaiting(props) {

    const [showResult, setShowResult] = useState(false);

    const handleClick = async () => {


        // const apiUrl = "https://owq5kkdv09.execute-api.us-east-1.amazonaws.com/default/dumyEchoLambda";
        // console.log("apiUrl : "+ apiUrl);
        //
        // axios.get(apiUrl,{ params : {"text" : inputs.value}})
        //     .then(response => {
        //         console.log("response : "+ response.data);
        //         alert(response.data);
        //
        //     })
        //     .catch(error => console.log("error: "+error));

    };


    useEffect(() => {
        console.log("input : "+props.input)
        const timeoutId = setTimeout(() => {

            const apiUrl = "https://owq5kkdv09.execute-api.us-east-1.amazonaws.com/default/dumyEchoLambda";
            console.log("apiUrl : "+ apiUrl);

            axios.get(apiUrl,{ params : {"text" : props.input}})
                .then(response => {
                    console.log("response : "+ response.data);
                    alert(response.data);

                })
                .catch(error => console.log("error: "+error));

            setShowResult(true);
        }, 5000);
        return () => clearTimeout(timeoutId);
    }, [props.input]);

    return (
        <div>
            <h2>대답이 오는중..</h2>
            {showResult && <Answer />}
        </div>
    );
}

export default AnswerWaiting;