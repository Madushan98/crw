import React from 'react';

import './custom-button.style.scss'

import { CustomButtonStyles } from './custom-button.styles'

const CustomButton = ({ children, ...props }) => (

    <CustomButtonStyles {...props}>
        {children}
    </CustomButtonStyles>


);

export default CustomButton;