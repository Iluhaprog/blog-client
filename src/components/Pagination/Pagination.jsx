import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../buttons";
import { Row } from '../containers';
import './pagination.scss';

function Pagination({ totalItems, itemsPerPage, currentPage, changePage, visiblePageLinks = 3, page }) {
    const visiblePageLinksIndexInit = Math.floor((currentPage - 1) / visiblePageLinks);
    const [visiblePageLinksIndex, setVisiblePageLinksIndex] = useState(visiblePageLinksIndexInit);
    useEffect(() => {
        setVisiblePageLinksIndex(visiblePageLinksIndexInit);
    }, [currentPage])
    const totalPagesLength = Math.ceil(totalItems / itemsPerPage);
    const visiblePageLinksIndexTotal = Math.ceil(totalPagesLength / visiblePageLinks);

    const totalPages = totalPagesLength < visiblePageLinks 
            ? totalPagesLength 
            : visiblePageLinksIndex + 1 === visiblePageLinksIndexTotal 
                ? visiblePageLinks - Math.abs(visiblePageLinks * visiblePageLinksIndexTotal - totalPagesLength)
                : visiblePageLinks;
    const pages = Array(totalPages).fill(0);
    return (
        <div className='pagination'>
            <Row justifyContent='c' alignItems='c'>
                {
                    visiblePageLinksIndex 
                        ? (
                            <PrimaryButton 
                                onClick={() => setVisiblePageLinksIndex(visiblePageLinksIndex - 1)}
                                text='<'/>
                        ) 
                        : ''
                }
                {
                    pages.map((_, index) => (
                        <NavLink 
                            key={index} 
                            to={`/admin/${page}/${index + 1 + visiblePageLinksIndex * visiblePageLinks}`}
                            onClick={() => changePage(index + visiblePageLinksIndex * visiblePageLinks)}
                            className={
                                index + 1 + visiblePageLinksIndex * visiblePageLinks === currentPage 
                                    ? 'selected-page'
                                    : '' 
                            }
                        >
                            {index + 1 + visiblePageLinksIndex * visiblePageLinks}
                        </NavLink>
                    ))
                }
                {
                    (totalPagesLength > visiblePageLinks && (visiblePageLinksIndex + 1) * visiblePageLinks < totalPagesLength ) && (
                        <PrimaryButton 
                            onClick={() => setVisiblePageLinksIndex(visiblePageLinksIndex + 1)}
                            text='>'
                        />
                    )
                }
            </Row>
        </div>
    )
}

export default Pagination;