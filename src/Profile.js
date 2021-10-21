import React from 'react'
import { useLocation } from 'react-router'

const Profile = () => {
    const params = useLocation()
    const { name,picture, dob, location, email } = params.state.item
    return (
        <div style={{display:'flex', marginTop:'10%' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h4>{name.first}{" "}{name.last}</h4>
          <img src={picture.large} alt={name.first} height='200px' width='190px' />
          <span style={{margin:'7px'}}>{dob.age}{" "}/{" "}{location.country}</span>
            <span>{email}</span>
        </div>
    )
}

export default Profile
