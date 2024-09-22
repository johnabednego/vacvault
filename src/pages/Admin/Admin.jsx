import React, { useState } from 'react'
import AdminNav from '../../components/Nav/AdminNav'
import Management from './Management'
import Footer from '../../components/Footer/Footer'

const Admin = () => {
    const [adminSwitch, setAdminSwitch] = useState(0)
    return (
        <div>
            <AdminNav adminSwitch={adminSwitch} setAdminSwitch={setAdminSwitch} />
            <div className='pt-[112px] pb-5 px-[6%] md:px-[2%] lg:px-[4%] xl:px-[8%]'>
                {adminSwitch === 0 ? <Management /> : null}
            </div>
            <Footer/>
        </div>
    )
}

export default Admin
