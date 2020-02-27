import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { getWeights } from '../actions/weightActions';

const Weights = weights => {

  console.log(weights);
  const [startDate, setStartDate] = useState(Date.now());

  return(<div>

    <button onClick={() => weights.getWeight()}>Get Weights</button>

    <ul>
      {weights.map}
    </ul>
    <br />
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    <button>Add Weight</button>
  </div>);
}

const mapStateToProps = state => {
  return {
    health: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeight: () => {
      console.log('dispatch: getWeights');
      dispatch(getWeights());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weights);