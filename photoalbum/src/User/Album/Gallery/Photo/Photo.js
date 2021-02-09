import React from 'react';

const Photo = ({ photos, albumId }) => {
    const ref = React.useRef(null);
    const focus = (id, count) => {
        let range = 622;
        ref.current.scrollTo(0, id % count * range)
    }
    let counter = 0;

    return (
        <>
            {photos.map((photo, index) => {
                if (photo.albumId === albumId) {
                    counter++;
                    return <span onClick={() => focus(index, counter)}><a href={"#modal"}><img id="link" className="image" src={photo.thumbnailUrl} title={photo.title} alt={photo.title} /></a></span>
                }
            })}
            <section id="modal" ref={ref} className="modal-window">
                <div className="modal-content">
                    {photos.map(photo => {
                        if (photo.albumId === albumId) {
                            return <p><img id={photo.id} className="image-full" src={photo.url} title={photo.title} alt={photo.title} /></p>
                        }
                    })}
                    <a style={{ position: "fixed", top: "0", color: "white" }} href="#">Закрыть</a>
                </div>
            </section>
        </>
    );
}

export default Photo;
