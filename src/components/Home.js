import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase/setup'



function Home(props) {

    const [news, setNews] = useState([])

    const addNews = async(data) =>{
        const newsDoc = doc(database,"News",`${data.url.substr(-10,10)}`)
        try{
            await setDoc(newsDoc,{
                title:data.title,
                description:data.description
            })
        }catch(err){
            console.error(err)
        }
    }



    const getNews = () => {
        fetch(`https://newsapi.org/v2/everything?q=${props.menu ? props.menu : "All"}&sortBy=popularity&apiKey=5c72f98ae15346cc833605f485d65a45`)
            .then(res => res.json())
            .then(json => setNews(json.articles))
    }


    useEffect(() => {
        getNews()
    }, [props.menu])



    return (
        <div className='mt-12 p-5 grid grid-cols-4'>
            {news?.filter(data => data.title.includes(props.search)).map((data) => {
                return <>
                    <Link onClick={()=>addNews(data)} to="/details" state={{data:data}}><div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={data.urlToImage} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{data.title}</div>
                            <p class="text-gray-700 text-base">
                               {data.content}
                            </p>
                        </div>
                    </div>
                    </Link>
                </>
            })}
        </div>
    )
}

export default Home
