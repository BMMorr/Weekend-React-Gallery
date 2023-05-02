import { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
    const [like, setLikes] = useState([props.likes]);
    const [status, setStatus] = useState([false]);

    const likeButton = () => {
        axios({
            method: 'PUT',
            url: '/gallery/like/:id'
        }).then((response) => {
            setLikes(Number(like) + 1);
        })
    }

    const picScript = () => {
        if (!status) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }

    const showElement = () => {
        if (!status) {
            return (
                <p className='descript'>{props.description}</p>

            )
        } else {
            return (
                <img
                    src={props.path}
                    alt=""
                    onClick={picScript}
                />
            );
        }
    }


    return (
        <div className='box' >
            <div key={props.id}>
                <div onClick={picScript}>
                    {showElement()}
                </div>
                <p>This has {like} likes.</p>
                <button onClick={likeButton}>Like</button>
            </div>
        </div>
    );
}

export default GalleryItem;