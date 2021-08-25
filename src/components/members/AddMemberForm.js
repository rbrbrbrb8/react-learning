import React, { useState } from 'react';

const AddMemberForm = () => {
  const submitName = memberName => {
    console.log(memberName)
  };
  return (
    <div>
      <form onSubmit={() => submitName(memberName)}>
        <input type="text" placeholder="enter member name"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AddMemberForm;