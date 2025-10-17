import Color from "@/components/Color"; // make dir first


export default function Home() {


  const number = 20;
  console.log(number + 20); // for inspect console


  const colors = ['red', 'green', 'blue'];


  function buttonClicked(color) {
    alert(color);
  }


  return (
    <div> Hello World! {number}
      <ul>
        {colors.map((value, index) => {
          // return <li key={index}>{value}</li>; // key for console error
          return <Color buttonClicked={() => buttonClicked(value)}
                        key={index}
                        color={value}
                        fontSize={20}/>
        })}
      </ul>
      <Color color="black" fontSize={14}/> {/*outside color.js so yea */}
      {/* <button onClick={buttonClicked}>
        Click me!
      </button> */}
    </div>




  )
}
