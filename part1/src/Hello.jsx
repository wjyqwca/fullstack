export const Hello = (props) => {

    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div><br />
            <p style={{ color: 'red', fontSize: '20px' }}>
                Hello {props.name}, you are {props.age} years old
            </p>

            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}