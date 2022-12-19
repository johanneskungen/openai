"use client"

import React from 'react'
import { useAiContext } from '../Context'

function page() {
    const {aiResponses} = useAiContext()
    const list = [...new Set(aiResponses)]

    console.log(list)
    
  return (
    <div>
        {list.map(text => (
            <p key={text.length}>{text}</p>
        ))}
    </div>
  )
}

export default page