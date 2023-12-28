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

function Filter() {

    const [checkedValues, setCheckedValues] = useState([]);
    console.log(checkedValues);

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
      {/* <p>Search Results</p> */}
      <Accordion className="filter-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className='accordion-heading'>BRAND</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
            <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value='H&M'
                        onChange={handleChange}
                    />
                }
                label='H&M'
            />
            <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value='Mango'
                        onChange={handleChange}
                    />
                }
                label='Mango'
            />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Filter;