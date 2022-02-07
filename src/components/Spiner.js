import React from 'react'
import loading from './loading.gif'

const Spiner = () => {
  return (
    <div className="text-center" >
      <img className="my-4" src={loading} alt="Loading" />
    </div>
  )
}
export default Spiner;

