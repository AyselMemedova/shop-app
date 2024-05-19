import React, { useContext } from 'react'
import "./detail.css"
import { useParams } from 'react-router-dom'
import MainContext from '../../../context/context'

const Detail = () => {
  const { _id } = useParams()
  const { product } = useContext(MainContext)
  const item = product.find((x)=> x._id == _id)
  return (
    <div>
      <div className='detail_all'>
        <div className="detail_left">
          <img width={'200px'} height={"200px"} src={item.image} alt="...." />
        </div>

        <div className="detail_right">
          <h1>
            Title:{item.title}
          </h1>
          <p>Price: {item.price}$</p>
        </div>

      </div>
    </div>
  )
}

export default Detail
