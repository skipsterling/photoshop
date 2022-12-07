import React from 'react'

export default function SidebarItem({ name }) {
  return (
    <div>
      <button className='sidebar-item'>{name}</button>
    </div>
  )
}
