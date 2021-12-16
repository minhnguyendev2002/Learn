import React, { useState, useEffect } from "react";
import '../chatbot/chatbot.css';
import Mesage from './message';
import Option from './option';
import $ from 'jquery';

function Chatbot() {

    // Begin Mảng Message
    let questions = [
        { 
            question: "Có những loại hoa gì ?",
            reply: "Hãy xem cửa hàng nhé <3"
        },
        { 
            question: "Minh có đẹp trai không ?",
            reply: "Anh ấy là người đẹp nhất" 
        },
        { 
            question: "Cửa hàng của shop ở đâu ?", 
            reply: "Đến ngay Đại học Thủy Lợi nhé",
        }
    ]

    let CustomerQuestions = [
        { 
            question:"hoa",
            reply: ['có nhiều loại lắm nhé.', 'rất hợp vào dịp tới đó bạn', 'hãy tặng nửa kia của mình nhé', 'hãy tặng cho những người yêu quý bạn nhé']
        },
        {
            question:"bánh",
            reply: ['có nhiều loại lắm nhé', 'là sự lựa chọn hoàn hảo cho dịp tới đó']
        }
    ]
    // End Mảng Message

    const [message, setMessage] = useState('')
    const [messageInput, setMessageInput] = useState( message ) 
    const [ArrayMess, setArrayMess] = useState([ {user:'bot', content:'Chúng tôi có thể giúp gì cho bạn ?'} ]);
    
    useEffect(() => {
        setMessageInput( message )
    },[message])

    const EnterMessage = () => {
        let para =  document.getElementById('input').value; 
        setMessageInput( para );
        
        setArrayMess(prev => {
            return (messageInput === '' ? [...prev] : [...prev, { user:'normal', content: messageInput }])
        })
        setMessage('')
    }  

    const Machine = (n) => {
        let YourOption = questions[n].question
        let MyReply = questions[n].reply
        setArrayMess(prev => {
            return [...prev, { user:'normal', content: YourOption }, { user:'bot', content: MyReply }]
        })

        // replys.length = 0;
        $('.option-list').empty();

        
    }


    // Begin Render UI 
    const renderMess = ArrayMess.map((human, index) => (
        <Mesage key={ index } user={ human.user } content={ human.content } />
    ));
    const renderOption = questions !== [] ? questions.map((option, index) => (
        <Option 
            key={ index } 
            question={ option.question } 
            onClick={ () => Machine(index) } 
        />
    )) : false;
    // End Render UI

    // const [machineMess, setmachineMess] = useState('')
    // useEffect(() => {
    //     setmachineMess(messageInput.toLowerCase())
    // }, [messageInput])

    // const findOranges = (CustomerQuestions) => { 
    //     return CustomerQuestions.question === machineMess;
    // }

    const MachineReply = () => {
        let CustomerMess = false
        // console.log(CustomerQuestions.find(findOranges))
    }

    return (
        <div className="chatbot">
            <div className="chatbot-box">
                <div className="chatbot-massage" id="chatbot-massage" >
                    { renderMess }
                </div>

                <ul className="option-list">    
                    { renderOption }
                </ul>   

                <div className="chatbot-customer-input">
                    <div>
                        <input id="input" type="text" placeholder="Bạn muốn nói gì" 
                            value={ message } 
                            onKeyDown={ (e) => { e.key === 'Enter' && EnterMessage(); MachineReply() } }
                            onChange={ (e) => { setMessage(e.target.value); } }
                        />
                        <button onClick={ () => { EnterMessage(); MachineReply()  } } ><i className="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
