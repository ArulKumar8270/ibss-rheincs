"use client";

import { ReactNode } from 'react';
import { LoadingProvider } from './LoadingProvider';

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  return <LoadingProvider>{children}</LoadingProvider>;
}

