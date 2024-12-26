import React from 'react'

const Dpage = async(props:any) => {
  const url =await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
    const data = await url.json();
    console.log( "single book response",data);
  
  return (
    <div className='w-full h-screen bg-white  flex flex-col items-center '>
        <h1  className='text-5xl font-bold'>Post Detail</h1>
        <div className='mt-24 w-[60%] h-screen bg-gray-200 px-5'>
        {/* {props.params.id} */}
        <br/>
       <h1 className='text-4xl  font-bold uppercase'>{data.title}</h1> 
        <br/>
        <p className='text-2xl text-justify'>{data.body}</p>
        </div>
      
      
    </div>
  )
}



export default Dpage
