export default function Greetings(props){

    const selectedLang = props.lang
    let message = "";

    switch(selectedLang){
        case "de":
            message = "Hallo";
            break;
        case "es":
            message = "Hola";
            break;
        case "fr":
            message = "Bonjour";
            break;
        default:
            message = "Hello";
            break;
    }

    return(
        <div className="idCard">
            <span>{message} {props.children}</span>
        </div>
    )
}