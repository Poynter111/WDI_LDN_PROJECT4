/* global google */
import React from 'react';

class AutoComplete extends React.Component {

  componentDidMount(){
    this.autoComplete = new google.maps.places.Autocomplete(this.input);

    this.autoComplete.addListener('place_changed', () => {
      const place = this.autoComplete.getPlace();
      this.props.handlePlaceChange(place);
    });
  }

  render() {
    const rest = { ...this.props };
    delete rest.handlePlaceChange;
    return(
      <input ref={el => this.input = el}
        {...rest}
      />
    );
  }
}

export default AutoComplete;
