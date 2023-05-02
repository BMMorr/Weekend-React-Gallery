import { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
    const [like, setLikes] = useState([props.likes]);
    const likeButton = () => {
        axios({
            method: 'PUT',
            url: '/gallery/like/:id'
        }).then((response) => {
            setLikes(Number(like) + 1);
        })
    }

    return (
        <div className='box' >
            <div key={props.id}>
                <img src={props.path} alt="" />
                <p>This has {like} likes.</p>
                <button onClick={likeButton}>Like</button>
            </div>
        </div>
    );
}

export default GalleryItem;