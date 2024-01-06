import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberValidation.css'
import ghana from './assets/ghana.svg'

const PhoneNumberValidation = ({ setMobileNumber, setErrorMessage, phoneNumberStyle }) => {
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
    <div className={ `w-full`}>
      <div className={` ${phoneNumber.length > 0 ? "hidden" : " flex w-fit absolute z-[10] pt-[10px] ml-[23px]"}`}>
          <img src={ghana} alt="" />
        </div>
      <label>
        <PhoneInput
          buttonStyle={phoneNumberStyle?.buttonStyle}
          inputStyle={phoneNumberStyle?.inputStyle}
          dropdownStyle={phoneNumberStyle?.dropdownStyle}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
          placeholder='233 50 567 990'
        />
      </label>
      {/* {!valid && alert("Please enter a valid phone number.")} */}
    </div>
  );
};

export default PhoneNumberValidation;