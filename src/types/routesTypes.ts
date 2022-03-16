import React from 'react';

export interface IRoute {
    path: string;
    elem: React.ElementType<{}>;
    inHeader?: string;
    k: string;
}