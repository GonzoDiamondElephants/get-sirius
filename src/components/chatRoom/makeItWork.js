
import { useAuth0 } from '@auth0/auth0-react';

export default function lenaIsTheBest(){
  const { isAuthenticated } = useAuth0();
  return isAuthenticated;
}
