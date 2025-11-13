import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [lastName, setLastName] = useState("");

  let handleChange = (event) => {
    setFullName(event.target.value);
  };

   let handleLastNameC = (event) => {
    setLastName(event.target.value);
  };

  return (
    <form action="" className="formForUser">
      <label htmlFor="firstname">First name : </label>
      <input
        type="text"
        placeholder="Type your first name"
        value={fullName}
        onChange={handleChange}
        id="firstname"
      />
      <br />
      <label htmlFor="lastname">Last name : </label>
      <input
        type="text"
        placeholder="Type your last name"
        value={lastName}
        onChange={handleLastNameC}
        id="lastname"
      />
      <button>Search</button>
    </form>
  );
}
