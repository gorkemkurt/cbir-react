import React, { Component } from 'react';
import './App.css';
import SelectBox from './SelectBox';
import Gallery from 'react-photo-gallery';
import ImageDrop from './ImageDrop';
import axios from 'axios';

class App extends Component {

  state = {
    image: null,
    imageList: [],
    featureExtractionMethod: "0"
  };

  shoot = () => {
    let form_data = new FormData();
    form_data.append('dest_image', this.state.image, this.state.image.name);
    form_data.append('name', this.state.image.name);
    form_data.append('feature_extraction_method', this.state.featureExtractionMethod)
    let url = 'http://localhost:8000/image_search';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        this.setState({ imageList: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err))
  };

  handleImageSelect = (image) => {
    this.setState({ image: image });
  }

  handleSelectBoxSelect = (selectedValue) => {
    this.setState({ featureExtractionMethod: this.selectedFeatureIndex(selectedValue) });
  }

  selectedFeatureIndex = (selectedValue) => {
    return "Color" === selectedValue ? "1" : "Texture" === selectedValue ? "2" : "0";
  }

  render() {
    return (
      <div className="App">
        <ImageDrop onSelectImage={this.handleImageSelect} />
        <SelectBox label="Feature Extraction Method"
          onSelectValue={this.handleSelectBoxSelect}
          options={["Color + Texture", "Color", "Texture"]} />
        <button onClick={() => { this.shoot() }}>SEARCH</button>SelectBox
        <div className="Gallery">
          <Gallery photos={this.state.imageList} />
        </div>
      </div >);
  }
}

export default App;
