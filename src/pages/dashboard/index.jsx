import React from 'react'
import Products from '../../components/Products'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
function Dashboard() {
  const { user } = React.useContext(GlobalContext)
  // React.useEffect(()=>{
  //   setTimeout()
  // })
  return (
    <div className='px-10 py-5'>
      <Products />
    </div>
  )
}

export default Dashboard