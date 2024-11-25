import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({keyword}) => {
    return keyword ? 
        api.get(`/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`)
        : api.get(`/movie/popular?language=ko-KR&page=1`);
}
// 'https://api.themoviedb.org/3/search/movie?query=marvel&include_adult=false&language=en-US&page=1';


export const useSearchMovieQuery = ({keyword}) => {
    return useQuery({
       queryKey: ['search-movie', keyword] 
        , queryFn: () => fetchSearchMovie({keyword})
        , select: (result) => result.data
    });
}