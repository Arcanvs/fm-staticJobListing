const Filter = ({selectedDetail}) => {
  return (
    <div className="card__content filter">
        <div className={!selectedDetail ? 'card__hide' : 'card__body' }>
            Filtro jobs
        </div>
    </div>
  )
}

export default Filter