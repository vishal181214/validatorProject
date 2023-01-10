import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Country() {
    const [value, setValue] = useState('')
    const [state, setState] = useState('');
    const options = useMemo(() => countryList().getData(), [])
    const statedata = [
        in:{
            "delhi",
            "Maharashtra",
            "Kerla"
        }
    ]
    const changeHandler = value => {
      setValue(value)
    }

    console.log(value.label);
  
    return (
        <>
            <Select options={options} value={value} onChange={changeHandler} />
            <Select options={statedata} value={state} onChange={(e)=>{setState(state)}}/>
        </>
    )
}

export default Country