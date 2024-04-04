import React from 'react'

const KeywordCard = ({keyword}) => {
  return (
    <div className='w-screen h-screen/3 py-12 px-12 flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <h1 className=' font-semibold text-4xl'>{keyword?.english} = </h1>
            <input type='text' name='keyword' />
        </div>
    </div>
  )
}

export default KeywordCard
