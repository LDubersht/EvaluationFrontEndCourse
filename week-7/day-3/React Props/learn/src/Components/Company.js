import React from 'react';
import SubCompany from './SubCompany';

const Company = (props) => {
return (
    <SubCompany name={props.name} revenue = {props.revenue} />
)
}

export default Company;