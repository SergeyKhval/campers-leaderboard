import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Camper({ username, img, alltime, recent }) {
  return (
    <tr>
      <td><img className="avatar" src={img} alt={username} /></td>
      <td>{username}</td>
      <td>{recent}</td>
      <td>{alltime}</td>
    </tr>
  );
}

Camper.propTypes = {
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  recent: PropTypes.number.isRequired,
  alltime: PropTypes.number.isRequired,
};

export default Camper;