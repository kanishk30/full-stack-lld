
function ConditionRendering(props) {
    console.log(props.person)
    console.log(props.isLoggedin)

    const { person, isLoggedin } = props;
    console.log(person, isLoggedin);
    // person {name: alice, age = 30} , true

    return (
        <div>
            {isLoggedin
                ? <h1>
                    Welcome {person.name}
                </h1>
                : <h2>Please login to continue</h2>
            }
        </div>
    )

}

export default ConditionRendering