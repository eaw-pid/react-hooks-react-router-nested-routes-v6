import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();
  const user = users.find(user => user.id === parseInt(params.id))

  // useEffect(() =>{
  //   fetch(`http://localhost:4000/users/${userId}`)
  //   .then(r => r.json())
  //   .then(data => setUser(data))
  //   .catch(error => console.error(error));
  // }, [userId]);

  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;