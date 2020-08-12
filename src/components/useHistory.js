import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UseHistory = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log('user', user);
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>{user.name}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    )
  );
};

export default UseHistory;

// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';

// const Auth0ProviderWithHistory = ({ children }) => {
//   const history = useHistory();

//   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
//   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
//   const audience = process.env.REACT_APP_AUDIENCE;

//   const onRedirectCallback = (appState) => {
//     history.push(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//       audience={audience}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };
// export default Auth0ProviderWithHistory;
