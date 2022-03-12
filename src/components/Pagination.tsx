import React from 'react'
import Button from './UI/buttons/Button'

interface PaginationProps {
    pages: number[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({pages, currentPage, setCurrentPage}) => {
    const width: string = '30px'
    const marginRight = '15px'

  return (
    <div style={{margin: '0 30px'}}>
        {
            pages.map(page =>
                currentPage === page 
                    ?
                        <Button 
                            key={page}
                            click={() => setCurrentPage(page)}
                            _addStyle={{width, marginRight, background: 'teal', border: '1px solid black', color: 'white'}}
                        >
                            {page}
                        </Button>
                    :    
                        <Button 
                            key={page}
                            click={() => setCurrentPage(page)}
                            _addStyle={{marginRight, width}}
                        >
                            {page}
                        </Button>
            )
        }
    </div>
  )
}

export default Pagination