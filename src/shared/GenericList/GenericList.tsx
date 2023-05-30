import React from 'react';
import styles from './genericlist.css';
import {merge} from "../../utils/js/merge";
import {generateId} from "../../utils/react/generateRandomIndex";

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a'| 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
          {list.map(({As= 'div', text, onClick, className, id, href}) => (
            <As
              className={className}
              onClick={() => onClick(id)}
              key={id}
              href={href}
            >
              {text}
            </As>
          ))}
        </>
    )
}
// const LIST = [
//     {text: 'some', id: 'value'},
//     {text: 'other some', id: 'other value'},
// ].map(generateId)
// <GenericList list={LIST.map(merge({ onClick: () =>{ console.log('click')}}))} />