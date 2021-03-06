import React from 'react';
import PropTypes from 'prop-types';

const MenuTree = (props) => {


    return (
        <li hidden={!props.show} className={"display-block"}>
            <a href="#" aria-expanded={"false"}>
                <span className="nav-label">{props.label}</span>
                <span className="fa float-right"/>
            </a>
            <ul className="nav collapse">
                {props.children}
            </ul>
        </li>
    )
};

MenuTree.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  // children: PropTypes.array.isRequired
};

export default MenuTree;
