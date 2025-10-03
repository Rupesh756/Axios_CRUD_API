import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import Form from "./UI/Form";

export const Post = () => {
    const [data, setData] = useState([]);
    // get method
    const getPostData = async () => {
        const res = await getPost();
        console.log(res);
        setData(res.data)
    }

    useEffect(() => {
        getPostData();
    }, []);

// DELETE METHOD
    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const updatedPost = data.filter((curPost) => {
                    return curPost.id !== id;
                })
                setData(updatedPost);
            } else {
                console.log("Failed to Delete:", res.status );
                
            }
        } catch (error) {
            console.log(error);

        }

    }


    return (
        <>
            <section>
                <Form data={data} addData={setData}/>
            </section>
            <section>
            <ol className="grid grid-cols-3 gap-25 p-10 " dir='ltr'>
                {
                    data.map((curElem) => {
                        const { id, title, body } = curElem;
                        return (
                            <li key={id} className='bg-sky-700 p-5 flex flex-col gap-3 rounded-2xl text-amber-50 border-l'>
                                <div><p>{id}.</p></div>
                                <p>Title: {title}</p>
                                <p>Body: {body}</p>
                                <div className='flex gap-2'>
                                    <button className='bg-green-400 h-12 p-3 rounded-xs '>EDIT</button>
                                    <button className='bg-red-500 h-12 p-3 rounded-xs ' onClick={() => { handleDeletePost(id) }}>DELETE</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
            </section>
        </>
    )
}
