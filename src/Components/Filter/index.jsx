import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import './Filter.css'

import { useContext } from 'react';
import { brands } from '../../FakerData/fakerData'
import Rating from '../Rating'

import { ProductContext } from '../../Context/ProductContextProvider';

function Filter() {
  const { handleChange } = useContext(ProductContext);

    const ratingComponent = [];
    for(let i=5; i>=1; i--){
        ratingComponent.push(
            <FormControlLabel 
                key={i}
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value={i}
                        onChange={(e) => handleChange(e, 'rating')}
                    />
                }
                label={<Rating rating={i} />}
            />
        )
    }

  return (
    <div className='filter-page'>
      <Accordion className="filter-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id='brand'
        >
          <p className='accordion-heading'>BRAND</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
        {brands.map(fltrValue => <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value={fltrValue}
                        onChange={(e) => handleChange(e, 'brand')}
                    />
                }
                label={fltrValue}
            />)}
        </AccordionDetails>
      </Accordion>
      <Accordion className="filter-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id='price'
        >
          <p className='accordion-heading'>PRICE RANGE</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
            <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value={[0, 500]}
                        onChange={(e) => handleChange(e, 'price')}
                    />
                }
                label='Under 500'
            />
            <FormControlLabel 
                control={
                    <Checkbox
                        icon={<CropSquareIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        value={[1000, 3000]}
                        onChange={(e) => handleChange(e, 'price')}
                    />
                }
                label='1000 To 3000'
            />
        </AccordionDetails>
      </Accordion> 
      <Accordion className="filter-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id='rating'
        >
          <p className='accordion-heading'>RATINGS</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
            {ratingComponent}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Filter;