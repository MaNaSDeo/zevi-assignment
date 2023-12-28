import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import './Filter.css'

import { useState } from 'react';
import { brands } from '../../FakerData/fakerData'

function Filter() {
    const [checkedValues, setCheckedValues] = useState([]);

    const testObj = [{
        id: 1,
        filterName: 'BRAND',
        filterValue: brands
    }]
    console.log(testObj);

    const handleChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
          setCheckedValues([...checkedValues, value]);
        } else {
          setCheckedValues(checkedValues.filter((v) => v !== value));
        }
    };

  return (
    <div className='filter-page'>
      {testObj.map(element => <Accordion className="filter-accordion" key={element.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={element.filterName}
        >
          <p className='accordion-heading'>{element.filterName}</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
        {element.filterValue.map(fltrValue => <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value={fltrValue}
                        onChange={handleChange}
                    />
                }
                label={fltrValue}
            />)}
        </AccordionDetails>
      </Accordion>)}
      
    </div>
  )
}

export default Filter;