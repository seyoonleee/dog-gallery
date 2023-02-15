import React from 'react';
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper';
import Buttons from '../../components/Buttons';

const queryClient = new QueryClient(); // queryClient 생성

const Main = () => {
  console.log('Main Render!');
  return (
    // Gallery에 QueryClient 제공
    <QueryClientProvider client={queryClient}>
      {/* {console.log('queryClient', queryClient)} */}
      <Gallery />
    </QueryClientProvider>
  );
};

const Gallery = () => {
  console.log('-----↓↓↓↓↓-----');
  console.log('Gallery Render!');
  console.log('queryClient', queryClient);
  // useQuery 함수는 data, error, isLoading ....등의 키값을 가진 객체를 반환한다.
  // console.log('useQuery()', useQuery());

  // useQuery함수의 반환값에서 필요한 데이터 구조분해할당으로 초기화
  // const { isLoading, error, data }
  const chunk = (data = [], size = 1) => {
    const arr = [];

    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }

    return arr;
  };

  const res = useQuery({
    queryKey: ['dogImageData'],
    queryFn: () => {
      return axios('https://dog.ceo/api/breeds/image/random/10').then(
        res => res.data.message
      );
      // return fetch(
      //   'https://api.github.com/repos/tannerlinsley/react-query'
      // ).then(res => res.json());
    },
  });

  // console.log(res);

  // console.log('isLoading', isLoading);
  // console.log('error', error);
  // console.log('data', data);
  // console.log('res', res);
  // console.log('res.isLoading', res.isLoading);
  if (res.isLoading) return 'Loading...';

  // console.log('res.error', res.error);
  if (res.error) return 'An error has occured: ' + res.error.message;

  // console.log('res.data', res.data);

  // const { data } = res;
  const data = chunk(res.data, 2);
  console.log('data', data);

  return (
    <Container>
      <Buttons queryClient={queryClient}>query caching</Buttons>
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

// const Wrapper = styled.div`
//   display: flex;
//   border: 1px solid;
//   width: 500px;

//   > img {
//     width: calc(100% / 2);
//     height: 250px;
//     object-fit: cover;
//   }
// `;

export default Main;
