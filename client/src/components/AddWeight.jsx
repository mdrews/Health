import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const AddWeight = () => {

  const [startDate, setStartDate] = useState(Date.now());

  return(<div>
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