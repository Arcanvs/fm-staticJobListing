const Card = ({jobCard}) => {
    const {company, position, postedAt, contract, location, logo} = jobCard;
    return (
    <div className="card__content job">
        <div className="card__body featured">
            <div className="body__content">
                <div className="data">
                    <div className="data__foto">
                        <img src={`../../public/${logo}`} alt={company} />
                    </div>
                    <div className="data__job">
                        <div>
                            <span className="job__company">{company}</span>
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