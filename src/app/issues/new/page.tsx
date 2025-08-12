import React from 'react'
import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'

const NewIssuepage = () => {
  return (
    <div className='max-w-xl space-y-3'>


       <TextField.Root placeholder="Title" />
        <TextArea placeholder='description'/>
        <Button>Submit New Issue </Button>
  


    </div>
  )
}

export default NewIssuepage