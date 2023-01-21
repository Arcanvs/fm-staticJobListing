const Card = ({jobCard}) => {
    const {company, position, postedAt, contract, location} = jobCard;
    return (
    <div className="card__content job">
        <div className="card__body featured">
            <div className="body__content">
                <div className="data">
                    <div className="data__foto">
                        Foto
                    </div>
                    <div className="data__job">
                        <div>
                            {company}
                            <span>new</span>
                            <span>featured</span>
                        </div>
                        <h1>{position}</h1>
                        <div>
                            <span>{postedAt}</span>
                            <span>{contract}</span>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
                <div className="tags">
                    {company}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card