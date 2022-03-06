export default function BoxColor(props){

    const r = props.r;
    const g = props.g;
    const b = props.b;

    function getContrastColor(r, g, b) {
        const brightness = r * 0.299 + g * 0.587 + b * 0.114;
      
        return brightness > 186 ? "#000000" : "#FFFFFF";
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    const hexColor = rgbToHex(r, g, b)

    return(
        <div className="boxColor" style={{backgroundColor: hexColor, color: getContrastColor(r, g, b)}}>
            <span>rgb{"("}{r},{g},{b}{")"}</span>
            <span>{hexColor}</span>
        </div>
    )
}