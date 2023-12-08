import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberValidation.css'
import ghana from './assets/ghana.svg'

const PhoneNumberValidation = ({ setMobileNumber, setErrorMessage }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  //   const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    const pattern = /^\+?[1-9]\d{1,14}$/;
    if (value.length < 10 || !pattern.test(value)){
      setErrorMessage("Invalid Phone Number")
    }
    else{
      setErrorMessage("")
    }
    setPhoneNumber(value);
    setMobileNumber(value)
    // setValid(validatePhoneNumber(value));
  };

  //   const validatePhoneNumber = (phoneNumber) => {
  //     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

  //     return phoneNumberPattern.test(phoneNumber);
  //   };

  return (
    <div className={ `w-full ${phoneNumber.length < 2 ?" -mt-1":""}`}>
      <div className={` ${phoneNumber.length > 0 ? "hidden" : " mt-[15px] flex w-fit relative z-[10] -mb-[29px] ml-[23px]"}`}>
          <img src={ghana} alt="" />
        </div>
      <label>
        <PhoneInput
          buttonStyle={{ "borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px", "backgroundColor": "#D9D9D9", "width": "70px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}
          inputStyle={{ "backgroundColor": "#E5E5E5", "width": "100%", "display": "flex", "borderRadius": "30px", "height": "40px", "paddingLeft": "75px" }}
          dropdownStyle={{ "marginTop": "260px", "marginLeft": "240px" }}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
          placeholder='+233 50 567 990'
        />
      </label>
      {/* {!valid && alert("Please enter a valid phone number.")} */}
    </div>
  );
};

export default PhoneNumberValidation;