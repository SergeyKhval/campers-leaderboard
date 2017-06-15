import React from "react";
import PropTypes from "prop-types";
import Camper from "../Camper";

function Campers({campers}) {
  return (
    <table>
      <thead>
      <tr>
        <th>Avatar</th>
        <th>Username</th>
        <th>Recent</th>
        <th>All time</th>
      </tr>
      </thead>
      <tbody>
      {campers.map(c => <Camper {...c} key={c.username}/>)}
      </tbody>
    </table>
  );
}

Campers.propTypes = {
  campers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Campers;