import { getPost } from './api/PostApi';
import { Post } from './component/Post';


const App = () => {
  console.log(getPost());


  return (
    <>
      <section className="bg-slate-800 p-10 flex flex-col justify-center items-center"> 
        <Post/>
      </section>
    </>

  )
}

export default App
