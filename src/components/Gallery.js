import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from 'axios';
import Wrapper from './Wrapper';
import Buttons from './Buttons';

const Gallery = () => {
  const [isFetching, setIsFetching] = useState(true);

  const chunk = (data = [], size = 1) => {
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
    return arr;
  };

  const fetchDogImg = async () => {
    const { data } = await axios('https://dog.ceo/api/breeds/image/random/10');
    return data.message;
  };

  // useQuery 함수는 data, error, isLoading ....등의 키값을 가진 객체를 반환한다.
  // useQuery함수의 반환값에서 필요한 데이터 구조분해할당으로 초기화
  // const { isLoading, error, data }
  const res = useQuery(['dogImageData'], fetchDogImg, {
    suspense: true,
    useErrorBoundary: true,
  });

  const data = chunk(res.data, 2);

  return (
    <Container>
      <Buttons isFetching={isFetching} setIsFetching={setIsFetching} />
      {data.map((urls, i) => (
        <Wrapper key={i} urls={urls} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  border: 3px solid;
  height: 100vh;
  width: 100vw;
`;

export default Gallery;
