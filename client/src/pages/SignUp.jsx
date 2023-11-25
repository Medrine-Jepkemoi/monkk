import React, { useState } from 'react'
import TextInput from '../components/TextInput'

const SignUp = () => {
    
    const [firstName, setFirstName] = useState("")

    const handleOnChange = (e) =>{
        setFirstName(e.target.value)
    }



  return (
    <div>
        <form action="">
            <TextInput
                id = {1}
                type="text"
                value={firstName}
                placeholder="firstname"
                onChange={handleOnChange}
            />
            {/* <TextInput
                id = {2}
                type="text"
                value={firstName}
                placeholder="firstname"
                onChange={handleOnChange}
            /> */}
        </form>
    </div>
  )
}

export default SignUp