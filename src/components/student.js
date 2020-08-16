import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/student/studentAction.js';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const HogwartStudent = (props) => {
  const { getStudent, student, user } = props;

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  // console.log('we are in student .js', student);

  const { isAuthenticated } = useAuth0();

  // const storeUserInDatabase = async () => {
  //   let result = await Axios.get(`/student/${user.sub}`)
  //   console.log('in student.js getting user sub', result.data)
  // }; 

  // if (isAuthenticated) {
  //   storeUserInDatabase();
  // }
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
