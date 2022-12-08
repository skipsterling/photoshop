import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import SidebarItem from './components/SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },

{
  name: 'Saturation',
  property: 'saturation',
  value: 100,
  range: {
    min: 0,
    max: 200
  },
  unit: '%'
},

{
  name: 'Greyscale',
  property: 'greyscale',
  value: 0,
  range: {
    min: 0,
    max: 100
  },
  unit: '%'
},

{
  name: 'Sepia',
  property: 'sepia',
  value: 0,
  range: {
    min: 0,
    max: 100
  },
  unit: '%'
},

{
  name: 'Hue Rotate',
  property: 'hue-rotation',
  value: 0,
  range: {
    min: 0,
    max: 360
  },
  unit: 'deg'
},

{
  name: 'Blur',
  property: 'blur',
  value: 0,
  range: {
    min: 0,
    max: 20
  },
  unit: 'px'
}
]

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  return (
    <div className='container'>
      <div className='main-image' />
      <div className='sidebar'> 
         {options.map((option, index) => {
         return ( 
         <SidebarItem
          key={index}
          name={option.name}
          active={index === selectedOptionIndex}
          handleClick={() => setSelectedOptionIndex(index) }
          />
         )
         })}
      </div>
      <Slider 
      
      /> 
    </div>
  )
}  

export default App;
