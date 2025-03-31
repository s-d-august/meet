import React, {useState} from 'react';


const NumberOfEvents = ({setCurrentNOE}) => {

  const [value, setValue] = useState(32)

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setValue(value)
    setCurrentNOE(value)
  }

 return (
   <div id="number-of-events">
    <p>Number of events: </p>
    <input
    type='number'
    className='number-input'
    value={value}
    onChange={handleInputChanged}
    >
    </input>
   </div>
 )
}


export default NumberOfEvents;