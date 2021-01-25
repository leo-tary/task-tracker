import PropTypes from 'prop-types';

import Button from './Button';

const Header = ( { title ,  toggleAddTaskPanel , buttonTxt} ) => {

	return (
		<header className="header">
			<h2>{title}</h2>
            <Button onClick={toggleAddTaskPanel} text={buttonTxt} buttonCustomClass="btn" />
		</header>
	);
};


Header.defaultProps = {
    title: "Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header;
