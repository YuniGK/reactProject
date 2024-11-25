import React, { useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');

  const [loading, setLoading] = useState(true);
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword});

  console.log(data)

    if(isLoading){
      <ClipLoader
        color="#000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(isError){
      <Alert key="danger" variant="danger">{error.message}</Alert>
    }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>필터</Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}><MovieCard movie={movie} /></Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage