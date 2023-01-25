import btnRemove from '../assets/icon-remove.svg';

const Filter = ({selectedDetail, onClearAllTags, onClearTag}) => {
  const handleClearAllFilter = () => {
    onClearAllTags([]);
  }
  const handleClearFilter = (delTag) => {
    onClearTag(delTag);
  }
  /* 
  <span key={index}>
                        {tag}
                        <img src={btnRemove} alt="ico_romve" onClick={() => handleClearFilter(tag)} />
                      </span>
  */
  return (
    <div className="filter">
        <div className={selectedDetail.length > 0 ? 'card' : 'card__hide' }>
          <div className='card__body filter'>
            <div className="body__content filter">
                <div className="button__group">
                  { selectedDetail && selectedDetail.map((tag, index) => {
                    return(
                      <div className='button__filter' key={index}>
                        <div className='button__title'>
                          {tag}
                        </div>  
                        <div className='button__ico'>
                          <img src={btnRemove} alt="ico_romve" onClick={() => handleClearFilter(tag)} />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='button__clear'>
                  <span onClick={handleClearAllFilter}>Clear</span>
                </div>
              </div>
          </div>
          </div>  
    </div>
  )
}

export default Filter