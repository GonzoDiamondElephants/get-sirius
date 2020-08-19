import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Axios from 'axios';

const LoginButton = () => {

  // const [currentUser, setCurrentUser] = useState('');
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // useEffect(() => {
  //   if (!user) return;
  //   const checker = async () => {
  //     let currentStudent = await Axios.get(
  //       `${process.env.REACT_APP_API}/student/find/${user.sub}`
  //     );
  //     if (currentStudent) {
  //       setCurrentUser({ currentUser: currentStudent.data });
  //     }
  //     console.log('current user state inside longing button ', currentUser);
  //     // if (currentStudent) {
  //     //   Axios.post(`${process.env.REACT_APP_API}/student`, user)
  //     //     .then((response) => {
  //     //       return response.data.name;
  //     //     })
  //     //     .catch((e) => {
  //     //       console.error(e);
  //     //     });
  //     // }
  //   };
  //   checker();
  // });

  return (
    !isAuthenticated && (
      <div>
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      </div>
    )
  );
};
export default LoginButton;
