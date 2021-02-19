import Skeleton from 'react-loading-skeleton';
import React from 'react';

export interface SkeletonLoadingProps {
    count: number
}

export const SkeletonLoading = ({count}: SkeletonLoadingProps) => <Skeleton count={count}/>;
