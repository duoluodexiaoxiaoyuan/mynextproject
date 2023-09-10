import React from 'react'

// const getEveryWord = () => {
//   return fetch(`https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json`)	
//   .then(response => response.json())
// }
const getEveryWord = () => {
  return fetch(`http://localhost:12600/ziji`)	
  .then(response => response.json())
}

async function EveryWord() {
  
  const data =await getEveryWord()
  console.log(data)
  return (
    <div>EveryWords{data.name} </div>
  )
}

export default EveryWord