import React from 'react'

const NewsItem = (props) => {
    let { title, desc, imgSrc, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="card my-3" style={{ width: "20rem" }}>
                <span className="badge bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-3%', top: '-2%' }}>
                    {source.length > 15 ? source.slice(0, 13) + ".." : source}
                </span>
                <img src={imgSrc} className="card-img-top" height={"160rem"} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{ height: "4.2rem" }}>{desc}</p>
                    <p className="card-text" style={{ height: "2.8rem" }}><small className="text-muted">By {author} on {new Date(date).toUTCString().slice(4)}</small></p>
                    <div className="d-flex justify-content-center">
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-md btn-dark text-center">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem;
