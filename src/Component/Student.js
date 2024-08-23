import React from 'react'
import PropTypes from "prop-types"

const Student = (props) => {
  return (
    <div className='student'> 
      <table>
        <tbody>
        <tr>
            <th>Name</th>
            <td>{props.name} </td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{props.age}</td>
        </tr>
        <tr>
            <th>IsMarried</th>
            <td>{props.isMarried?"YES":"NO"}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
Student.propTypes={
    name:PropTypes.string,
    age :PropTypes.number,
    isMarried:PropTypes.bool,
};
Student.defaultProps={
    name:"No Name",
    age : 0,
    isMarried:false,
};
export default Student
