
function Data(props) {
    console.log(props);
    const { fruitsArr, personObj } = props; // destrcuring of object
    return (
        <div>
            <h3>Fruits list:</h3>
            {/* render fruits from fruits array... */}
            {/* {props.fruits[0]}
            {props.fruits[1]}
            {props.fruits[2]} */}
            <ul>
                {/* {props.fruits.map((fruit, i) => {
                    return <li>{fruit}</li>
                })} */}
                {fruitsArr.map((fruit, i) => <li>{fruit}</li>)}
            </ul>

            <h3>Person info</h3>
            {/* shpw name and age of person */}
            <p>Name: {personObj.name}</p>
            <p>age: {personObj.age}</p>
        </div>
    )
}

export default Data;