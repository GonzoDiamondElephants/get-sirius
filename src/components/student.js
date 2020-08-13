import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/student/studentAction.js';

const hogwartStudent = (props) => {
  console.log('student', props.student);
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  getStudent: (data) => dispatch(getUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(hogwartStudent);
