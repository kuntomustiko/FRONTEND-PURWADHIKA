import React from 'react'

let ImageList = (props) => {

    // props.images = [{ alt_description, description, urls }, { alt_description, description, urls }]
    // image =  {alt_description, description, urls }
    let results = props.images.map((image) => {
        return (
            <img
                className="card"
                src={image.urls.regular}
                key={image.id}
                alt={image.alt_description} />
        )
    })
    return (
        <div className="card-columns">
            {results}
        </div>
    )
}

export default ImageList

// this.props.images
// [0].urls.regular