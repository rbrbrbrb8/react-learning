import React,{useState,useEffect} from 'react';
import axios from 'axios';


function MemberList(props) {
 const [members,setMembers] = useState([]);
 useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    const resMembers = res.data;
    console.log('got members');
    setMembers(resMembers);

  })
 },[])
  return (
    <div>
      <ul>
        {members.map((member,index) =>
          <li key={index}>{member.name}</li>
        )}
      </ul>
    </div>
  );
}

export default MemberList;