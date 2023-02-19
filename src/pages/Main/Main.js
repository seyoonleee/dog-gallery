import React, { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Gallery from '../../components/Gallery';
import { ErrorBoundary } from 'react-error-boundary';

// queryClient 생성
const queryClient = new QueryClient();

const Main = () => {
  return (
    // Gallery에 QueryClient 제공
    <ErrorBoundary fallback={<div>ErrorBoundary 컴포넌트! Error!</div>}>
      <Suspense fallback={<div>Sumspense 컴포넌트! Loading.....</div>}>
        <QueryClientProvider client={queryClient}>
          <Gallery />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Main;
