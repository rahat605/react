import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password:"",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]:[event.target.value] };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      password:"",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="firstname">First name : </label>
      <input
        type="text"
        placeholder="Type your first name"
        value={formData.firstName}
        onChange={handleInputChange}
        id="firstname"
        name="firstName"
      />
      <br />
      <label htmlFor="lastname">Last name : </label>
      <input
        type="text"
        placeholder="Type your last name"
        value={formData.lastName}
        onChange={handleInputChange}
        id="lastname"
        name="lastName"
      />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        type="password"
        placeholder="Type your password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Search</button>
    </form>
  );
}
