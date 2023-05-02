import GalleryItem from "./../GalleryItem/GalleryItem.jsx";
function GalleryList(props) {
    return (
        <ul className='ulbox'>
            {
                props.gallery.map((album) => {
                    return (
                        <GalleryItem
                            key={album.id}
                            path={album.path}
                            description={album.description}
                            likes={album.likes} />
                    )
                })
            }
        </ul>
    );
}

export default GalleryList;