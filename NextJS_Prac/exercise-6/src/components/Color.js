export default function Color({color, fontSize, buttonClicked}) {


    return (
        <div
            onClick={buttonClicked}
            style={{background: color, fontSize: fontSize}}
            className="text-[#8d8dfa] p-3 w-fit rounded-[8px] px-3"
        >  
            color: {color} fontsize: {fontSize}
            </div>
        // can only return one element
    )


}
