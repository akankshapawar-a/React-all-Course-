// import React ,{useContext} from 'react'
// import UserContext from '../context/UserContext'

// const profile = () => {
//     const {user}=useContext(UserContext)

//     if(!user) return <div>please login</div>

//     return <div>Welcome {user.username}</div>
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default profile

import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
};

export default Profile;

