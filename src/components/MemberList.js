import React,{useState} from 'react';

function MemberList(props) {
  const {members} = props;
  return (
    <div>
      <ul>
        {members.map((member,index) =>
          <li key={index}>{member}</li>
        )}
      </ul>
    </div>
  );
}

export default MemberList;