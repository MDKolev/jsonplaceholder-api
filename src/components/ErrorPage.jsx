import React from 'react'
import './errorPage.css'

const ErrorPage = () => {
  return (
    <>
    <div className='header'>
      <div>
        <h1 className='title'>JSONPlaceholder</h1>
        <div className='error-container'>
          <span className='error-occured'>An Error has occured!</span>
          <span className='error-message'>error message</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ErrorPage
