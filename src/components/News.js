import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const apiKey = "497bdce0b7dc4928bc42f1ab59871614"

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const handleBackTop = async () => {
        setPage(page);
        setArticles([]);
        updateNews();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className="text-center" style={{ marginTop: "4.5rem" }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spiner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spiner />}
            >
                <div className="container my-2">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center" key={element.url} >
                                <NewsItem title={element.title === null ? "No title here" : element.title.slice(0, 45) + "..."} desc={element.description === null ? "No description here" : element.description.slice(0, 90) + "..."} imgSrc={!element.urlToImage ? "" : element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News