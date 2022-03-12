import React, { CSSProperties } from 'react'

interface ListProps<Type> {
    items: Type[];
    renderItem: (item: Type) => React.ReactChild;
    _addStyle?: CSSProperties;
}

export default function List<Type> (props: ListProps<Type>) {
  return (
    <div style={props._addStyle}>
        {props.items.map(props.renderItem)}
    </div>
  )
}
