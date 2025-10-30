export default function Form(){
    return (
        <form action="">
            <input type="text" placeholder="Type something"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

function handleSubmit(event){
    console.log("Form was submitted!");
    event.preventDefault();
}