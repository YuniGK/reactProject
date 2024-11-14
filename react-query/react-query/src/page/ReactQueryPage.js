import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    /*
    useQuery({
        queryKey:['posts']
        , queryFn:()=>{
            //호출하고 싶은 api
            return axios.get('http://localhost:4000/posts')
        }
    });
    */
   const fetchPost = () => {return axios.get('http://localhost:4000/posts')}

   //페이지 접속 시 바로 실행 됨
   const { isLoading, data, isError, error } = useQuery({
        queryKey: ['posts']
        , queryFn: fetchPost
        , retry: 2//실패시 몇번 다시 시도할지 정해준다. 기본 3번 더 시도한다.
        , select: data => {
            return data.data//data값을 가져올 때, data값만 가져온다.
        }
    });

    console.log('isLoading ', isLoading, ' --- ', data)
    console.log('isError ', isError, ' --- ', error)//error 에러 메시지 출력

    if(isLoading){
        return <h2>Loading ...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    
  return (
    <div>
        {data.map(item => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}

export default ReactQueryPage