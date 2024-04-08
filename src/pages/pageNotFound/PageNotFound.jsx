import React from 'react'
import './pageNotFound.css'
import { GoBackButton } from '../../components'

const PageNotFound = () => {
  return (
    <main className='creatic__pageNotFound'>
      <h1>404 Page Not Found</h1>
      <GoBackButton />
    </main>
  )
}

export default PageNotFound

