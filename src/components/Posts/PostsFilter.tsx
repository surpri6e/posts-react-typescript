import React from 'react'
import { IFilter } from '../../types/filterTypes'
import { IOption } from '../../types/selectOptionTypes';
import Input from '../UI/inputs/Input';
import Select from '../UI/selects/Select';

import './PostsFilter.css'

interface PostsFilterProps {
    filter: IFilter;
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
    options: IOption[];
}

const PostsFilter: React.FC<PostsFilterProps> = ({filter, setFilter, options}) => {
  return (
    <div className={'postsfilter'}>
        <Input
            placeholder={'Search...'}
            value={filter.search}
            type={'text'}
            change={(ev: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, search: ev.target.value})}
        />
        <Select
            options={options}
            value={filter.sorted}
            change={selectedSort => setFilter({...filter, sorted: selectedSort})}
        />
    </div>
  )
}

export default PostsFilter