import React, { useState } from 'react';
import MemberList from './MemberList';
import AddMemberForm from './AddMemberForm';

const test = {
  name:'brezner',
  info:{
    age:19,
    birthdate:'20/12/2001'
  }
}


const MembersInfo = () => {
  const {
    name,
    info:{age}
  }  = test;
  return (
    <div>
      <h2>{age}</h2>
      <MemberList/>
      <AddMemberForm/>
    </div>
  );
}

export default MembersInfo;