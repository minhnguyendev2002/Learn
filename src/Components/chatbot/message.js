import * as React from 'react'; 
export default function Message(props) { 
  return (
    <> 
        <div className={props.user === "bot" ? "chatbot-machine animation" : "chatbot-machine flex-row-reverse" }>
            <div className={props.user === "bot" ? "chatbot-machine-img" : "chatbot-machine-img d-none" }>
                <img src="https://flowerfolib.netlify.app/img/logo.png" alt="/" />
            </div>
            <div className="chatbot-machine-msg">
                <span>{props.content}</span>
            </div>
        </div>
    </>
  );
}
