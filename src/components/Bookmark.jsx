import React, {useState} from 'react';
import "./Bookmark.css";

function Bookmark() {

    const[ isBookmarked, setBookmarked ] = useState(false);

    const handleBookmarked = () => {
        setBookmarked(!isBookmarked)
    };

    return (
        <i 
            onClick={handleBookmarked} 
            className={isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}>
        </i>
    )
}

export default Bookmark;