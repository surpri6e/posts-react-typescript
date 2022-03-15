import React from 'react'
import Button from './UI/buttons/Button'
import '../styles/Pagination.css';

interface PaginationProps {
    pages: number[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({pages, currentPage, setCurrentPage}) => {
    const minWidth: string = '30px'
    const marginRight = '15px'

  return (
    <div className={'pagination'}>
        {
            pages.map(page =>
                currentPage === page 
                    ?
                        <Button 
                            key={page}
                            click={() => setCurrentPage(page)}
                            _addStyle={{minWidth, marginRight, background: 'teal', border: '1px solid black', color: 'white', marginBottom: 10}}
                        >
                            {page}
                        </Button>
                    :    
                        <Button 
                            key={page}
                            click={() => setCurrentPage(page)}
                            _addStyle={{marginRight, minWidth, marginBottom: 10}}
                        >
                            {page}
                        </Button>
            )
        }
    </div>
  )
}

export default Pagination