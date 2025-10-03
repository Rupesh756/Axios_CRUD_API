import { useState } from "react"
import { postData } from "../../api/PostApi"


const Form = ({data ,addData}) => {
  const [addNewData, setNewData] = useState({
    title: "",
    body: "",
  })


  const handleInputChange=(e)=>{
     const name= e.target.name
     const value= e.target.value

      setNewData((prev)=>{
        return{
          ...prev,[name]:value
        }
      });
  }


  const addPostData=async()=>{
     const res=await postData(addNewData);
     console.log(res);
    //  if(!addData.title) return;
     
     if (res.status===201){
      addData([...data,res.data]);
      setNewData({title:"",body:""});
     }
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    addPostData();
  }

  return (
 
    <form onSubmit={handleFormSubmit} > 
      <section className=' bg-sky-700 p-3 flex justify-center gap-3 rounded-xl pl-15 pr-25 w-3xl'>
        <label htmlFor="title"></label>
        <input type="text"
         name="title"
          autoComplete="off"
           id="title"
            placeholder="Add Title"
            className='rounded-xs bg-amber-50 w-2/3 pl-5 outline-none'
          value={addData.title}
          onChange={handleInputChange}
        />


        <label htmlFor="body"></label>
        <input type="text"
        name="body"
        autoComplete="off"
        id="body"
        placeholder='Add Post'
        className='rounded-xs bg-amber-50 w-2/3 pl-5 outline-none'
        value={addData.body}
        onChange={handleInputChange}
        />
        <button className='bg-green-400 h-12 p-3 rounded-xs w-1/3'>ADD</button>
      </section>
      </form>

  )
}

export default Form
