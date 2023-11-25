import { useState } from "react";
const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLasttName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
  return (
    <div>
      <form>
        <label for="firstName">First Name</label><br/>
        <input value={firstName} type="firstName"/><br/>
        <label for="lastName">Last Name</label><br/>
        <input value={lastName} type="lastName"/><br/>
        <label for="role">Role</label><br/>
        <input value={role} type="role"/><br/>
        <label for="email">Email</label><br/>
        <input value={email} type="email"/><br/>
        <label for="password">Password</label><br/>
        <input value={password} type="password"/><br/>
        <label for="phone_number">Phone Number</label><br/>
        <input value={phone_number} type="phone_number"/><br/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup