import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const AddWeight = props => {

  const [startDate, setStartDate] = useState(Date.now());

  return(<div>
    <button>Get Weights</button>
    <h2>Weights</h2>
    <ul>blah</ul>
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

export default AddWeight;