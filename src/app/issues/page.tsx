
'use client';
import React from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

// https://localhost/api/issue 
//  we have put the routes.ts in issue folder 

const Issue = () => {
  return (
    <div><Button><Link href='/issues/new'>New Issue</Link></Button></div>
  )
}

export default Issue