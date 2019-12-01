import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';


class ImageDrop extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        this.props.onSelectImage(picture[0]);
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png']}
                maxFileSize={1048576}
                label=""
                singleImage={true}
                withPreview={true}
            />
        );
    }
}

export default ImageDrop;
