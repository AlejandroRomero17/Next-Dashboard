'use client'

import React from 'react'
import { useState } from 'react'


interface Props {
  value?: number;
}

const CartCounter = ({ value = 0}: Props) => {

  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{`${count}`}</span>
      <div className="flex">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 text-white transition-all bg-gray-900 rounded-xl hover:bg-gray-600 w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 text-white transition-all bg-gray-900 rounded-xl hover:bg-gray-600 w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter
