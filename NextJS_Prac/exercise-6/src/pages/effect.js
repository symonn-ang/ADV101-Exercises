import { useEffect, useState } from "react"
// careful with import dont forget
export default function Effect() {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    let [isStarted, setIsStarted] = useState(false);
    let [isStarted2, setIsStarted2] = useState(false);
    // was const before

    useEffect(() => {
        // console.log('page loaded');
        if (isStarted) {
            let interval = setInterval(() => {
                setCounter(counter + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        }


    }, [counter, isStarted]); // in inspect console

    useEffect(() => {
        if (isStarted2) {
            let interval2 = setInterval(() => {
                if (counter2 < 99) {
                    setCounter2(counter2 + 1);
                } else {
                    setCounter2(counter2 - 100);
                }
            }, 8.5);

            return () => {
                clearInterval(interval2);
            }
        }


    }, [counter2, isStarted2]);



    function buttonClicked() {
        // setCounter(counter + 1);
        setIsStarted(!isStarted); // concat ? works too iirc
        setIsStarted2(!isStarted2);
    }
    function buttonReset() {
        setCounter(counter = 0);
        setCounter2(counter2 = 0);
        setIsStarted(isStarted = false);
        setIsStarted2(isStarted2 = false);

    }


    return (
        <center>
            <div>
                <div>
                    <button
                        onClick={buttonClicked}
                        className="mt-2 border-1 p-1">
                        {isStarted ? 'Stop' : 'Start'}
                    </button>
                    <button
                        onClick={buttonReset}
                        className="mt-2 border-1 p-1">
                        {"Reset"}
                    </button>
                    Timer: {counter} : {counter2}
                </div>


            </div>
        </center>
    )


}
