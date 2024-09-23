import React, { useState } from 'react'
import backIcon from '../../../Dashboard/assets/backIcon.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/delete.svg'
import EditItem from './EditItem'
import AddItem from './AddItem'
import ItemAddedSuccessfully from './ItemAddedSuccessfully'

const ViewItems = ({ viewItemList, setViewItemList }) => {
  const [editItem, setEditItem] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showItemAddedSuccess, setShowItemAddedSuccess] = useState(false)

  return (
    <div className='w-full flex flex-col'>
      {editItem ?
        <EditItem editItem={editItem} setEditItem={setEditItem} /> : null}
      {showAddModal ?
        <AddItem setShowAddModal={setShowAddModal}  setShowItemAddedSuccess={setShowItemAddedSuccess}/> : null}

      {showItemAddedSuccess ?
        <ItemAddedSuccessfully setShowItemAddedSuccess={setShowItemAddedSuccess} /> : null}

      <div data-aos="fade-right" data-aos-duration="3000" className=' mt-[50px] w-full flex flex-col '>
        <div className='w-full flex justify-between'>
          <img onClick={() => setViewItemList(null)} src={backIcon} alt="backIcon" className='cursor-pointer w-[36.06px] h-[36.06px] transform transition-all ease-in-out duration-300 hover:opacity-70' />
          <button onClick={() => setShowAddModal(true)} className=' w-auto h-[48px] px-[22px] bg-[#51336A] rounded-[10px] font-semibold text-[20px] text-white shadow-dashboard'>Add Item</button>
        </div>

        {/**Items */}
        <div className='w-full flex flex-col'>
          <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Items</h1>
          <div className=' mt-[32px] w-full flex flex-col'>
            {/**Item*/}
            <div className='w-full py-[20px] flex items-center justify-between border-solid border-t-[1px] border-t-black'>
              <h1 className=' font-light text-[24px]'>Bucket (<span className=' font-bold'>₵10</span>)</h1>
              <div className='w-auto flex gap-[30px]'>
                <button type='button' onClick={() => setEditItem(1)}><img src={editIcon} alt="edit" className=' w-[30px] h-[30px]' /></button>
                <button type='button' ><img src={deleteIcon} alt="delete" className=' w-[30px] h-[30px]' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewItems
