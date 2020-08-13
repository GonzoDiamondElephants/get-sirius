import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/student/studentAction.js';

const HogwartStudent = (props) => {
  const { getStudent, student } = props;

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  console.log('we are in student .js', student);
  let dumbledoresArmy = [];
  for (let i = 0; i < student.length; i++) {
    dumbledoresArmy.push(<div key={i}>{student[i].name}</div>);
  }

  return <div>{dumbledoresArmy}</div>;
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  getStudent: (data) => dispatch(getUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HogwartStudent);
