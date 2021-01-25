import React from 'react';

import PropTypes from 'prop-types';

const Button = ( {text , buttonCustomClass , onClick} ) => {

    return (
        <button onClick={onClick} className={`${buttonCustomClass}`}>{text}</button>
    )

}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    buttonCustomClass: PropTypes.string
}


export default Button;