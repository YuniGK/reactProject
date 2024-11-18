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
        , gcTime: 5000//캐시 관리하는 시간 5초가 지나면 캐시를 삭제한다. -> 기본값은 5분
        /* state 상태에서는 캐시가 삭제되지 않는다. 다른페이지로 이동 시, 상태가
        inactive로 변경되면서 5초가 지나면 캐시가 삭제된다. 
        하위버전에서는 cacheTime라고 사용됨 
        
        ReactQuery 라이프 사이클
        fetching - api 호출 시
        fresh - 데이터 도착 시, 해당 상태에서는 api 호출을 다시 하지 않는다.
            해당 상태를 길게 두면 api 호출이 아닌 캐시의 데이터를 가져온다.
        state - 데이터 도찰 후 시간이 지난 상태, 해당 상태에서 다시 api호출이 가능하다.
        inactive - 데이터를 사용하지 않는 상태
        deleted 
        */
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