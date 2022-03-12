import React from 'react'
import { IOption } from '../../../types/selectOptionTypes'
import cl from './Select.module.css'

interface SelectProps {
    options: IOption[];
    change: (item:  string) => void;
    defaultText: string;
    value: string;
}

const Select: React.FC<SelectProps> = ({options, change, defaultText, value}) => {
  return (
    <select className={cl.sel} value={value} onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => change(ev.target.value)}>
        <option disabled={true} value={'default'}>{defaultText}</option>
        {
            options.map(option => 
                <option key={option.value} value={option.value}>{option.text}</option>    
            )
        }
    </select>
  )
}

export default Select