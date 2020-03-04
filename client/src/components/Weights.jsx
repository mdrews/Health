import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { getWeights, addWeight } from '../actions/weightActions';

const Weights = health => {

  useEffect(() => {
    health.getWeights()
  })

  console.log(health);

  const [weight, setWeight] = useState();
  const [startDate, setStartDate] = useState(Date.now());

  return(<div>

    <button onClick={() => health.getWeights()}>Get Weights</button>

    {health.weights && <div>weights!</div>}
    <ul>
      {health.weights && health.weights.map(weight => { return(
        <li key={weight._id}>{weight.weight} {weight.dateRecorded}</li>
      )})}
    </ul>
    <br />
    
    Date: 
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    Weight: 
    <input value={weight} onChange={e => setWeight(e.target.value)} />
    <button onClick={() => health.addWeight(weight, startDate)}>Add Weight</button>
  </div>);
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeights: () => {
      console.log('dispatch: getWeights');
      dispatch(getWeights());
    },
    addWeight: (weight, startDate) => {
      console.log(`dispatch: addWeight ${weight} ${startDate}`);
      dispatch(addWeight({weight: weight, user: 1, dateRecorded: startDate}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weights);