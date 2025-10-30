export default function Button() {
    return (
        <div>
            <button onDoubleClick={handleDblClick} onClick={handleClick}>
                Get Offer
            </button>
        </div>
    )
}

function handleClick(){
    console.log("Hello");
}

function handleDblClick(){
    console.log("Double Click Detected!");
}