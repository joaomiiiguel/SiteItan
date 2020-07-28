import React, { useState } from 'react';
import './enquetes.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function enquetes() {
    
    return (
        <div className="containerEnq">
            <p className="tituloEnq">Qual a sua formação?</p>
            <RadioGroup aria-label="gender" name="gender1" >
                <FormControlLabel value="female" control={<Radio />} label="Ensino Médio" />
                <FormControlLabel value="male" control={<Radio />} label="Ensino Técnico" />
                <FormControlLabel value="other" control={<Radio />} label="Ensino Superior" />
            </RadioGroup>
        </div>
    )
}
