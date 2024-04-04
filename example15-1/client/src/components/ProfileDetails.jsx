import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../utils/requests';

const ProfileDetails = () => {

  const { id } = useParams();
  const [keywords, setKeywords] = useState(null)
  useEffect(() => {
    const takeUser = async () => {
      const response = await getRequest(`http://localhost:3000/user/getkeywordslist/${id}`, { userId: id })

      setKeywords(response.words);
      console.log(response.words);
    }
    takeUser();
  }, [])

  return (
    <div>

      <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border py-24">
        <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
          <h1 className='text-xl text-orange-500'>Completed Words</h1>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Keyword</th>
                  <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Meanining</th>
                </tr>
              </thead>
              <tbody>
                {
                  keywords && keywords.map((element, index) => {
                    return (
                    
                <tr key={index}>
                <td className="p-2 px-14 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">{element.english}</h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">{element.turkish}</p>
                </td>
              </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
