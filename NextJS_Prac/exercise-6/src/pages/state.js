import { useState } from "react"


export default function State() {
    const [state, setState] = useState("Hello");
    // state can use int string n other dtype
    function buttonClicked() {
        setState(state + " Hi");
        // setState ((previousState) => {
        //     return previousState + 1;
        // });
    }


    return (
        <div>
            <button
                onClick={buttonClicked}
                className="mt-2 border-1 p-1">
                Click me!
            </button>
            <div>
                {state}
            </div>
        </div>




    )


}
