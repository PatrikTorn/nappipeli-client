import React from 'react';
import { Icon } from '../Icon/Icon';
import './List.css';

export const List = ({ data, headings }) => {
    return (
        <div className="list">

            <div className="list-row">
                {(headings || []).map((heading, i) => (
                    <div key={i} className="list-heading">{heading}</div>
                ))}
            </div>
            {(data || []).map((row, i) =>
                <div key={i} className="list-row">
                    {row.map((item, ci) => (
                        <div key={ci} className="list-item">
                            {item.type === 'icon' ?
                                <Icon type={item.duckType} />
                                : item}
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}