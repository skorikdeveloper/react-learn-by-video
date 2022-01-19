import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Поиск...'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Сортировка по'}
                options={[
                    {name: 'По названию', value: 'title'},
                    {name: 'По описанию', value: 'body'}
                ]}
            />
        </div>
    );
};

export default PostFilter;