import React from 'react'

interface Props {

    title: string
    content: string
    commentsQty: number
    tags: string[]
    // 8 - enum
    category: Category
}

export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript',
    P = 'Python',
}

const Destructuring = ({title, content, commentsQty, tags, category}:Props) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Comments: {commentsQty}</p>
        <div>
            {tags.map((element) => (
                <span>#{element}</span>
            ))}
        </div>
        <h4>{category}</h4>
    </div>
  )
}

export default Destructuring