import { useState } from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);
    let [clicks,setClicks] = useState(0);

    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    let likeStyle = {color:"blue"}

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-thumbs-up" style={likeStyle}></i> 
                ):( <i className="fa-regular fa-thumbs-up"></i>)}<span>{clicks}</span>
               </p> 
        </div>
    )
}