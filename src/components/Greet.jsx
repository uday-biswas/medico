function Greet(props){
    const classy = props.className;
    const name = props.name;          //the javascript variable can be used within the jsx code.
    return (
        <div>
        <div className={classy}>Hello {name}, Here are our psychiatrists , if you need help !!</div>
        </div>
    )
}

export default Greet;