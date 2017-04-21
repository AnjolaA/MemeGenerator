import React from 'react';
import axios from 'axios';

class Pairburn extends React.Component {
  constructor() {
    super();

    this.state = {
      memeTypes: [],
      selectedMemeType: '',
      topText: '',
      bottomText: '',
      image: ''
    };

    this.onMemeTypeChange = this.onMemeTypeChange.bind(this);
    this.onTopTextChange = this.onTopTextChange.bind(this);
    this.onBottomTextChange = this.onBottomTextChange.bind(this);
    this.submitMeme = this.submitMeme.bind(this);
  }

  componentDidMount() {
    axios.get(`${window.apiUrl}images`)
      .then(({data}) => {
        this.setState({
          memeTypes: data.sort()
        })
      });
  }

  onMemeTypeChange(e) {
    this.setState({
      selectedMemeType: e.target.value
    });
  }

  onTopTextChange(e) {
    this.setState({
      topText: e.target.value
    });
  }

  onBottomTextChange(e){
    this.setState({
      bottomText: e.target.value
    });
  }

  submitMeme(){
    axios.get(`${window.apiUrl}meme`, {
      params: {
        font: 'Impact',
        font_size: '50',
        bottom: this.state.bottomText,
        meme: this.state.selectedMemeType,
        top: this.state.topText
      },
      responseType: 'blob'
    }).then(({data}) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        this.setState({
          image: dataUrl
        });
      };
      reader.readAsDataURL(data);
    });
  }

  render() {
    const options = [];

    for (let i = 0; i < this.state.memeTypes.length; i++) {
      const type = this.state.memeTypes[i];
      options.push(<option key={i}>{type}</option>);
    }

    return (
      <div className="pairburn o-layout u-width-1/2">
        <p className='c-heading-bravo'>Generate a Meme</p>
        <div className="c-form-select">
          <select className="c-form-select__dropdown" onChange={this.onMemeTypeChange}>
            {options}
          </select>
        </div>
        <input type="text" className="top-text c-form-input" placeholder="Top Text" maxLength="45" onChange={this.onTopTextChange} />
        <input type="text" className="bottom-text c-form-input" placeholder="Bottom Text" maxLength="45" onChange={this.onBottomTextChange} />
        <button className="c-btn  c-btn--secondary c-btn--full" onClick={this.submitMeme}>Generate Meme</button>
        <img className="meme u-margin-top" src={this.state.image} />
      </div>
    );
  }

}

export default Pairburn;
