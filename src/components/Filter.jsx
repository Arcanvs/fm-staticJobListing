import btnRemove from '../assets/icon-remove.svg';

const Filter = ({selectedDetail, onClearAllTags, onClearTag}) => {
  const handleClearAllFilter = () => {
    onClearAllTags([]);
  }
  const handleClearFilter = (delTag) => {
    onClearTag(delTag);
  }
  return (
    <div className="card__content filter">
        <div className={selectedDetail.length > 0 ? 'card__body' : 'card__hide' }>
            <div className="body__content filter">
              <div className="buttons">
                { selectedDetail && selectedDetail.map((tag, index) => {
                  return(
                    <span key={index}>
                      {tag}
                      <img src={btnRemove} alt="ico_romve" onClick={() => handleClearFilter(tag)} />
                    </span>
                  )
                })}
              </div>
              <span onClick={handleClearAllFilter}>Clear</span>
            </div>
        </div>
    </div>
  )
}

export default Filter