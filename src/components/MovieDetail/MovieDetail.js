import React ,{useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data,'MYDATA');
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    },[dispatch,imdbID])
    return (
        <div>
              movie
        </div>
    );
};

export default MovieDetail; 