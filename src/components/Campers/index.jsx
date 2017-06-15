import React from 'react';
import PropTypes from 'prop-types';
import Camper from '../Camper';

function Campers({ campers, fetchCampers }) {
  return (
    <table>
      <thead>
      <tr>
        <th>Avatar</th>
        <th>Username</th>
        <th><a href="#" onClick={() => fetchCampers('fccusers/top/recent')}>Recent</a></th>
        <th><a href="#" onClick={() => fetchCampers('fccusers/top/alltime')}>All time</a></th>
      </tr>
      </thead>
      <tbody>
      {campers.map(c => <Camper {...c} key={c.username} />)}
      </tbody>
    </table>
  );
}

Campers.propTypes = {
  campers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchCampers: PropTypes.func.isRequired,
};

export default Campers;