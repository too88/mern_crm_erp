import React from 'react'
import { Spin } from 'antd'

export default function PageLoader() {
  return (
    <div className='centerAbsolute'>
        <Spin size='large'/>
    </div>
  )
}
