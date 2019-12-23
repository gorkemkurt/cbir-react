import React, { Component } from 'react';
import './SelectBox.css'


class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Color + Texture' };
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
        this.props.onSelectValue(e.target.value);
    }

    render() {
        return (
            <div>
                <label className="select-box-component"
                    htmlFor="select">{this.props.label}
                </label>
                <select id="select"
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}>
                    {this.props.options.map(option => {
                        return <option value={option} key={option} >{option}</option>
                    })}
                </select>
            </div>

        )
    }
}

export default SelectBox;
