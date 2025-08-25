
'use client'; // this makes the whole page a client component
import React, { useState } from 'react'
import {  TextField } from '@radix-ui/themes'
import { Button , Callout} from '@radix-ui/themes'

import {useForm,Controller} from "react-hook-form"
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic"; // <-- import dynamic

import axios from 'axios';


// CSS can stay here
import "easymde/dist/easymde.min.css";

//  Only import SimpleMDE dynamically (no top-level import!)
//  don’t try to render this component on the server. Wait until you’re in the browser, then load it.
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});



interface IssueForm{
  title: string ;
  description:string;
}

const NewIssuepage = () => {
  const router = useRouter();
  const {register,control,handleSubmit} = useForm<IssueForm>()

  const [error,setError] = useState('');

  return ( 
    <div className='max-w-xl '>
     {error && (
  <Callout.Root color="red" className='mb-5'>
    <Callout.Text>{error}</Callout.Text>
  </Callout.Root>
)}

    <form className='space-y-3' 
    onSubmit={handleSubmit(async (data)=> 
    
    {
      //  passing our data To the API through AXIOS 
      // AXIOS is a library to make HTTP requests

      //  error handlining :
     try {
          // Passing our data to the API through AXIOS
          const response = await axios.post("/api/issues", data);
          console.log("Issue created:", response.data);
          router.push('/issues'); //Redirect to issues page after submission
        } catch (error) {
          // console.log("Error creating issue:", error);
          setError("An unexpected error occured ");
        }
      })}
    >


       <TextField.Root placeholder="Title"{...register('title')} />
       {/*  Simple MDE will give beautiful markup editor  */}
       <Controller
  name="description"
  control={control}
  render={({field})=>
  <SimpleMDE placeholder='Description'{...field} /> }
  />
        <Button>Submit New Issue </Button>
  


    </form>
    </div>
  )
}

export default NewIssuepage