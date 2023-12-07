class ReactContainer extends React.Component{
    render () {
        return (
            <div>
                Hello! Welcome to Kalvium!
                <div>Let's Rock and Roll - this is babel</div>
            </div>
        )
    }
}

let container = document.getElementById("react-container");

// ReactDOM.render(<ReactContainer />, container);

function ReactContainer2 () {
    return(
        <div>
                Hello! Welcome to Kalvium!
                <div>Let's Rock and Roll - this is babel</div>
        </div>
    )
}

ReactDOM.render(<ReactContainer2 />, container);