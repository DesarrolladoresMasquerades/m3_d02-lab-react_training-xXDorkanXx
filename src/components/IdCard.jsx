export default function IdCard(props){

    const options = {weekday: "short", day: "numeric", month: "short", year: "numeric"};

    return(
        <div className="idCard">
            <img src={props.picture} alt="profileImg" width={150}></img>
            <div>
                <span><b>First name: </b>{props.firstName}</span>
                <span><b>Last name: </b>{props.lastName}</span>
                <span><b>Gender: </b>{props.gender}</span>
                <span><b>Height: </b>{props.height}cm</span>
                <span><b>Birth: </b>{props.birth.toLocaleDateString("en-US", options)}</span>
            </div>
        </div>
    )
}