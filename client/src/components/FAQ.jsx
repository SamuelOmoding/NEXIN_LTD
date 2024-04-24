import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
function FAQ({ThemeStyles}) {
    const [isCollapsed, setIsCollapsed]=useState(true) //define collapsed state
    const [feedbacks, setFeedbacks]=useState([])

    function toggleCollapsed(index){  //function opens the files as per the index
      setFeedbacks(prevFeedbacks => {
        const updatedFeedbacks = [...prevFeedbacks];
        updatedFeedbacks[index].isCollapsed = !updatedFeedbacks[index].isCollapsed;
        return updatedFeedbacks;
      });
  
    }
console.log(feedbacks)
    useEffect(()=>{
fetch('https://api.npoint.io/50119392bff49c1a1767/Feedbacks') //fetch the feedbacks
.then(res=>res.json())
.then(data=>setFeedbacks(data))
    },[])
    console.log(feedbacks)
  return (
    <div>
    <h1 className='text-2xl m-3'>Feedbacks and FAQs</h1>
    <div>
       {
feedbacks.map((feeds,index)=>{
    return(
        <div className='accordition flex rounded-sm shadow-xl justify-between p-3 bg-zinc-900 w-3/4 m-2' key={index}>

        <div className={feeds.isCollapsed?"maxHeight":"minHeight"}>
        <h3 className="text-lg text-emerald-300 font-semibold">{feeds.Name}</h3>
        <h5  className={feeds.isCollapsed?"Visible":"Unvisible"}>{feeds.Feedback}</h5></div>
      
        <div>
  <button onClick={()=>toggleCollapsed(index)}>
<IconButton class='text-slate-300'>
   {feeds.isCollapsed?<ExpandLessIcon/>:<ExpandMoreIcon/>}
</IconButton>
       
        </button>
        </div>
       
        </div>
    )
})
      }
     
    </div>
     
    </div>
  )
}

export default FAQ
