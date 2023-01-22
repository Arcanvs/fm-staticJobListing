import btnRemove from '../assets/icon-remove.svg';

const Filter = ({selectedDetail}) => {
  return (
    <div className="card__content filter">
        <div className={!selectedDetail ? 'card__hide' : 'card__body' }>
            <div className="body__content filter">
              <div className="buttons">
                <span>
                  Frontend
                  <img src={btnRemove} alt="ico_romve" />
                </span>
                <span>CSS</span>
                <span>JavasScript</span>
              </div>
              <span>Clear</span>
            </div>
        </div>
    </div>
  )
}

export default Filter