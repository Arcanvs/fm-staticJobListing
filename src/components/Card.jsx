const Card = ({jobCard, onChangeTags}) => {
    const classes = ["card__body", jobCard.featured ? "featured" : null].join(" ");
    const handleClickTags = (value) => {
        onChangeTags(value);
    }

    return (
    <div className="card job">
        <div className={classes}>
            <div className="body__content">
                <div className="data">
                    <div className="data__foto">
                        <img src={`../../public/${jobCard.logo}`} alt={jobCard.company} />
                    </div>
                    <div className="data__job">
                        <div>
                            <span className="job__company">{jobCard.company}</span>
                            { jobCard.new && <div className="job__badge new"><span>NEW!</span></div> }
                            { jobCard.featured && <div className="job__badge featured"><span>FEATURED</span></div> }
                            
                        </div>
                        <h1>{jobCard.position}</h1>
                        <div className="job__at">
                            <span>{jobCard.postedAt}</span>
                            <span>{jobCard.contract}</span>
                            <span>{jobCard.location}</span>
                        </div>
                    </div>
                </div>
                <div className="tags">
                    { jobCard.role && <div onClick={() => handleClickTags(jobCard.role)}><span>{jobCard.role}</span></div> }
                    { jobCard.level && <div onClick={() => handleClickTags(jobCard.level)}><span>{jobCard.level}</span></div> }
                    { jobCard.languages.map((lang, index) => {
                        return <div onClick={() => handleClickTags(lang)} key={index} ><span>{lang}</span></div>
                    })} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card