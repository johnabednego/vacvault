import React, { useEffect, useState } from 'react'
import PhoneNumberValidation from '../PhoneNumberValidation/PhoneNumberValidation'

const BookingForm = () => {
    /**
     * Iron
Laundry basket (small)
Kettle
Mob
Long broom
     */
    //Items
    const [errorMessage, setErrorMessage] = useState('')
    const [luggageQuantity, setLuggageQuantity] = useState()
    const [luggageDesc, setLuggageDesc] = useState()
    const [fridgeQuantity, setFridgeQuantity] = useState()
    const [fridgeDesc, setFridgeDesc] = useState()
    const [otherQuantity, setOtherQuantity] = useState()
    const [otherDesc, setOtherDesc] = useState()
    const [bucketQuantity, setBucketQuantity] = useState()
    const [bucketDesc, setBucketDesc] = useState()
    const [ironQuantity, setIronQuantity] = useState()
    const [ironDesc, setIronDesc] = useState()
    const [laundryBasketSmallQuantity, setLaundryBasketSmallQuantity] = useState()
    const [laundryBasketSmallDesc, setLaundryBasketSmallDesc] = useState()
    const [totalAmount, setTotalAmount] = useState(0)

    const data = {
        'Luggage': { price: 100, quantity: luggageQuantity, setQuantity: setLuggageQuantity, desc: luggageDesc, setDesc: setLuggageDesc },
        'Fridge': { price: 80, quantity: fridgeQuantity, setQuantity: setFridgeQuantity, desc: fridgeDesc, setDesc: setFridgeDesc },
        'Other(s)': { price: 0, quantity: otherQuantity, setQuantity: setOtherQuantity, desc: otherDesc, setDesc: setOtherDesc },
        'Bucket': { price: 10, quantity: bucketQuantity, setQuantity: setBucketQuantity, desc: bucketDesc, setDesc: setBucketDesc },
        'Iron': { price: 10, quantity: ironQuantity, setQuantity: setIronQuantity, desc: ironDesc, setDesc: setIronDesc },
        'Laundry basket (small)': { price: 10, quantity: laundryBasketSmallQuantity, setQuantity: setLaundryBasketSmallQuantity, desc: laundryBasketSmallDesc, setDesc: setLaundryBasketSmallDesc },
    }

    const [selectedItems, setSelectedItems] = useState([]);
    const [remainingItems, setRemainingItems] = useState([
        'Luggage', 'Fridge', 'Other(s)', 'Bucket', 'Iron', 'Laundry basket (small)'
    ]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState()
    const [selectedDesc, setSelectedDesc] = useState()

    const [itemsInSchool, setItemsInSchool] = useState('')
    const [school, setSchool] = useState('')
    const [hallOrHostel, setHallOrHostel] = useState('')
    const [capitalCity, setCapitalCity] = useState('')
    const [town, setTown] = useState('')
    const [area, setArea] = useState('')
    const [canCall, setCanCall] = useState('')
    const [callingNumber, setCallingNumber] = useState('')
    const [phonumberErrorMesage, setPhonumberErrorMesage] = useState('')
    const [period, setPeriod] = useState('')
    const [pickupdate, setPickupdate] = useState('')

    // Function to handle item selection
    const handleItemSelect = async (e) => {
        e.preventDefault()
        if (selectedItem && selectedQuantity) {
            if (selectedItem !== 'Other(s)') {
                data[`${selectedItem}`].setQuantity(selectedQuantity)
                data[`${selectedItem}`].setDesc(selectedDesc)
                setSelectedQuantity('')
                setSelectedItems([...selectedItems, selectedItem]);
                setRemainingItems(remainingItems.filter((item) => item !== selectedItem));
                setSelectedDesc('')
                setErrorMessage('')
                setSelectedItem('');
            }
            else {
                if (selectedDesc) {
                    data[selectedItem]?.setQuantity(selectedQuantity)
                    setSelectedQuantity('')
                    setSelectedItems([...selectedItems, selectedItem]);
                    setRemainingItems(remainingItems.filter((item) => item !== selectedItem));
                    setSelectedDesc('')
                    setErrorMessage('')
                    setSelectedItem('');
                }
                else {
                    setErrorMessage('Description is Required.')
                }
            }
        }
        else if (selectedItem && !selectedQuantity) {
            setErrorMessage('Quantity Required.')
        }
    };



    // Function to handle item removal
    const handleItemRemove = (item) => {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        setRemainingItems([...remainingItems, item]);
    };

    const handleItemsInSchool = (value) => {
        setItemsInSchool(value)
        setSchool('');
        setCapitalCity('')
        setTown('')
        setArea('')
        setHallOrHostel('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedItems.length < 1) {
            setErrorMessage('selectedItems')
        }
        else if (phonumberErrorMesage === '' && selectedItems.length > 0) {
            const items = []
            selectedItems.map((item) => {
                return items.push({ name: item, price: data[item]?.price, quantity: data[item]?.quantity, desc: data[item]?.desc })
            })
            let locationInfo = []
            if (itemsInSchool === 'Yes') {
                locationInfo.push(
                    { name: 'school', value: school },
                    { name: 'hallOrHostel', value: hallOrHostel }
                )
            }
            else {
                locationInfo.push(
                    { name: 'capitalCity', value: capitalCity },
                    { name: 'town', value: town },
                    { area: 'area', value: area }
                )
            }
            const final_data = {
                items: items,
                itemsInSchool: itemsInSchool,
                locationInfo: locationInfo,
                canCall: canCall,
                callingNumber: callingNumber,
                period: period,
                pickupdate:pickupdate
            }
            console.log(final_data)
            setErrorMessage('')
        }
    }

    useEffect(() => {
        let amount = 0
        selectedItems.map((item) => {
            return amount = amount + (data[item]?.price * data[item]?.quantity)
        })
        setTotalAmount(amount)
    }, [selectedItems])

    useEffect(() => {
        // Calculate tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
    
        // Format the date as 'YYYY-MM-DD' (compatible with input type="date")
        const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    
        // Set the minimum date for the input
        document.getElementById('pickupdate').setAttribute('min', tomorrowFormatted);
      }, []);

    const phoneNumberStyle = { buttonStyle: { "backgroundColor": "#D9D9D9", "width": "70px", "display": "flex", "alignItems": "center", "justifyContent": "center" }, inputStyle: { "backgroundColor": "#ffffff", "display": "flex", "height": "40px", "paddingLeft": "75px" }, dropdownStyle: { "marginTop": "260px", "marginLeft": "240px" } }

    const periodOptions = [];

    for (let i = 1; i <= 15; i++) {
        const weekLabel = i === 1 ? 'week' : 'weeks';
        const monthLabel = i === 4 ? 'month' : 'months'
        if (i <= 3) {
            periodOptions.push(<option key={i} value={`${i} ${weekLabel}`}>{`${i} ${weekLabel}`}</option>);
        } else if (i < 15) {
            periodOptions.push(<option key={i} value={`${i - 3} ${monthLabel}`}>{`${i - 3} ${monthLabel}`}</option>);
        }
        else {
            periodOptions.push(<option key={i} value={`1 year`}>{`1 year`}</option>);
        }
    }


    return (
        <div className={` w-full  sm:w-[528px] rounded-bl-[30px] rounded-tr-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative`}>

            <div className=' mb-[29px]'>
                <h1 className='text-[18px] font-bold '>Your Luggage, Our Care</h1>
                <h1 className=' mt-1 text-[14px] text-[#707070] font-normal'>Booking Information</h1>
            </div>
            <div className=''>
                <div className=' box-border flex flex-wrap '>
                    <div className=' box-border  max-w-full '>
                        {/** Booking Form */}
                        <div className='box-border  max-w-full'>
                            <form method='post' onSubmit={handleSubmit}>
                                <div className=' box-border flex flex-wrap items-center'>
                                    <div className=' box-border flex flex-col gap-3'>
                                        {errorMessage === "selectedItems" ? <h1 className=' text-[#EB0728] text-[14px] font-normal'>Click on "<span className=' text-[16px] font-bold'>Add</span>" to add at least one item.</h1> : null}
                                        {/**Selecting Items */}
                                        <div className='w-full'>
                                            <div className=" w-[250px] xs:w-auto mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2">Select Items</label>
                                                <div className="flex flex-wrap gap-3 xs:gap-1 justify-center xm:justify-start xm:flex-nowrap space-x-2">
                                                    <select required={selectedItems.length < 1 ? true : false} value={selectedItem} onChange={(e) => { setSelectedItem(e.target.value); setErrorMessage('') }} className=" max-w-[150px] bg-white border border-gray-400 rounded px-2 py-1 focus:outline-[#51336A]">
                                                        <option value='' disabled> Choose an item</option>
                                                        {remainingItems.sort().map((item) => (
                                                            <option key={item} value={item} className=' appearance-none hover:bg-[#51336A]'>
                                                                {item === "Other(s)" ? item : item + ' -> ₵' + data[item]?.price}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className='flex flex-col gap-1'>
                                                        {selectedItem === '' ? null : <input required value={selectedQuantity} onChange={(e) => { setSelectedQuantity(e.target.value >= 1 || e.target.value === '' ? e.target.value : 1); setErrorMessage('') }} type="number" name="" id="" placeholder='Quantity' className={` ${errorMessage === 'Quantity Required.' ? 'border-[#EB0728]' : 'border-gray-400'} focus:outline-[#51336A]  pl-3 w-[100px] bg-white border  rounded px-2 py-1 `} />}
                                                        {errorMessage === 'Quantity Required.' ? <h1 className=' text-[10px] text-[#EB0728]'>{errorMessage}</h1> : null}
                                                    </div>
                                                    <button onClick={handleItemSelect} className=" xs:m-0 bg-[#51336A] opacity-90 hover:opacity-100 hover:bg-[#51336A] text-white font-bold py-1 px-4 rounded"> Add </button>
                                                </div>
                                                <div className=' mt-4 xm:mt-0 flex flex-col gap-1'>
                                                    {selectedItem === '' ? null : <textarea value={selectedDesc} onChange={(e) => setSelectedDesc(e.target.value)} placeholder={`${selectedItem === 'Other(s)' ? 'List and describe Other(s)' : 'Tell us what we need to know about your ' + selectedItem}`} name="other(s)" id="other(s)" cols="30" rows="5" className={` ${selectedItem === 'Other(s)' && errorMessage === 'Description is Required.' ? 'border-[#EB0728]' : 'border-gray-400'} mt-1 resize-none bg-white border  rounded px-2 py-1 focus:outline-[#51336A]`}></textarea>}
                                                    {errorMessage === 'Description is Required.' ? <h1 className=' text-[10px] text-[#EB0728]'>{errorMessage}</h1> : null}
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className=' w-full flex gap-3 items-center justify-between'>
                                                    <label className="block text-gray-700 text-sm font-bold">Selected Items</label>
                                                    <h1 className=' font-bold text-[30px] text-[#51336A]'>₵{totalAmount}</h1>
                                                </div>
                                                <div className=" w-full flex flex-wrap gap-3   ">
                                                    {selectedItems.map((item) => (
                                                        <div key={item} className=" items-center w-[50] mt-4 bg-gray-200 flex relative  rounded-full pl-3 py-1">
                                                            {item}
                                                            <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>{data[item]?.quantity}</h1>
                                                            <button onClick={() => handleItemRemove(item)} className=" ml-1 -mt-[20px] relative flex items-center justify-center text-center  rounded-full w-[20px] h-[20px] p-1 bg-[#EB0728] text-white text-[15px] cursor-pointer"><h1 className=' -mt-1'>x</h1></button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/**A University Student */}
                                        <div className='flex flex-col'>
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Are the items in School (eg. University)?</label>
                                            <select required name="itemsInSchool" id="itemsInSchool" value={itemsInSchool} onChange={(e) => { handleItemsInSchool(e.target.value) }} className=" w-[200px] bg-white border border-gray-400 rounded px-2 py-1 focus:outline-[#51336A]">
                                                <option value='' disabled> Choose a Yes/No</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        {/**Select a University */}
                                        <div className=' w-full flex flex-wrap gap-3'>
                                            {itemsInSchool === 'Yes' ?
                                                <div className='w-full flex flex-wrap gap-3'>
                                                    <select value={school} onChange={(e) => setSchool(e.target.value)} required type="text" name="University name" id="University name" data-cy="University name" placeholder="University name" className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`}>
                                                        <option value='' disabled> Choose the school</option>
                                                        <option value="UG">UG</option>
                                                        <option value="KNUST">KNUST</option>
                                                        <option value="UCC">UCC</option>
                                                        <option value="UPSA">UPSA</option>
                                                    </select>
                                                    {/**Hall or Hostel */}
                                                    <input value={hallOrHostel} onChange={(e) => { setHallOrHostel(e.target.value); }} required type="text" name="hallOrHostel" id="hallOrHostel" data-cy="hallOrHostel" placeholder="Name of Hall or Hostel" className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`} />
                                                </div>
                                                :
                                                <div className='w-full flex flex-wrap gap-3'>
                                                    {/** Location */}
                                                    <select disabled={itemsInSchool === 'Yes' ? true : false} value={capitalCity} onChange={(e) => { setCapitalCity(e.target.value); }} required type="text" name="University name" id="University name" data-cy="University name" placeholder="University name" className={` w-[200px]  focus:outline-[#51336A]  pl-3 ${itemsInSchool === 'Yes' ? "bg-[#f0f0f0] text-[#999999] opacity-70" : "bg-white"} border  rounded px-2 py-1`}>
                                                        <option value='' disabled>Select Capital Town</option>
                                                        <option value="Accra">Accra</option>
                                                        <option value="Kumasi">Kumasi</option>
                                                        <option value="Cape Coast">Cape Coast</option>
                                                    </select>
                                                    {/**Town and Area */}
                                                    <input value={town} onChange={(e) => { setTown(e.target.value); }} required type="text" name="Town" id="Town" data-cy="Town" placeholder="Town, eg. Legon" className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`} />
                                                    <input value={area} onChange={(e) => { setArea(e.target.value); }} required type="text" name="Area" id="Area" data-cy="Area" placeholder="Area, eg. Legon Police Station" className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`} />
                                                </div>
                                            }

                                        </div>
                                        {/**Can we call you on this */}
                                        <div className='flex flex-col'>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">Can we call you on this <span className=' font-bold text-[16px] text-[#51336A]'>0247157301</span>?</label>
                                            <div className=' w-full flex gap-3 flex-wrap'>
                                                <select required name="canCall" id="canCall" value={canCall} onChange={(e) => setCanCall(e.target.value)} className=" w-[200px] bg-white border border-gray-400 rounded px-2 py-1 focus:outline-[#51336A]">
                                                    <option value='' disabled> Choose a Yes/No</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                                {canCall === "No" ?
                                                    <div className='flex flex-col '>
                                                        <label className="block text-gray-700 text-sm font-medium mb-2">Enter your calling number</label>
                                                        <PhoneNumberValidation setMobileNumber={setCallingNumber} setErrorMessage={setPhonumberErrorMesage} phoneNumberStyle={phoneNumberStyle} />
                                                        {phonumberErrorMesage === "Invalid Phone Number" ? <h1 className=' text-[#EB0728] text-[14px] font-normal'>{phonumberErrorMesage}</h1> : null}
                                                    </div> : null}
                                            </div>
                                        </div>

                                        {/**Pickup Date */}
                                        <div className='flex flex-col'>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">Pickup Date</label>
                                            <input value={pickupdate} required type="date" name="pickupdate" id="pickupdate" onChange={(e)=>setPickupdate(e.target.value)} className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`} />
                                        </div>
                                        {/**Period */}
                                        <div className='flex flex-col'>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">How long do you want us to keep your items?</label>
                                            <select value={period} onChange={(e) => setPeriod(e.target.value)} required type="text" name="University name" id="University name" data-cy="University name" placeholder="University name" className={` w-[200px]  focus:outline-[#51336A]  pl-3  bg-white border  rounded px-2 py-1`}>
                                                <option value='' disabled> Choose the period</option>
                                                {periodOptions}
                                            </select>
                                        </div>
                                        {/**Submit */}
                                        <div className=' w-full flex items-center justify-center'>
                                            <button type="submit" className=" mt-3  rounded-sm shadow-inner bg-[#51336A] opacity-90 hover:opacity-100 hover:bg-[#51336A] text-white font-bold py-1 px-4">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
