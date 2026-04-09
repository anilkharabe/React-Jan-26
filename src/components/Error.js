import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const error = useRouteError();
    console.log('error', error)

    return(
        <div className="error-div">
            <h1>Opps</h1>
            <h2>Error occured</h2>
            <h3>{error.status} : {error.statusText}</h3>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"></img>
        </div>
    )
}

export default Error;