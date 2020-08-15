import React, { useEffect } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { getUser } from '../store/student/studentAction.js';

const HogwartStudent = (props) => {
  const { isAuthenticated } = useAuth0();
  const { getStudent, student } = props;

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  // const storeUserInDatabase = async () => {
  //   let result = await axios.get(`/student/${user.sub}`);
  //   console.log('users sub', result.data);
  // };
  // if (isAuthenticated) {
  //   storeUserInDatabase();
  // }

  let dumbledoresArmy = [];
  for (let i = 0; i < student.length; i++) {
    dumbledoresArmy.push(<div key={i}>{student[i].name}</div>);
  }
  console.log('working', dumbledoresArmy);
  return isAuthenticated && <div>{dumbledoresArmy}</div>;
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
