export default function Random(props){

    const randomNumber = Math.floor(Math.random()*(props.max - props.min + 1) + props.min)

    return(
        <div className="idCard">
            <span>Random number between {props.min} and {props.max} {"=>"} {randomNumber}</span>
        </div>
    )
}