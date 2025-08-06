import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest'
import AddNewRecord from '@/components/AddNewRecord'
import { checkUser } from '@/lib/checkUser'

const page = async () => {
  const user=await currentUser();
  checkUser();
  

  if(!user){
      return (
        <Guest></Guest>
      )

  }
  return (
  <AddNewRecord></AddNewRecord>
  )
}

export default page