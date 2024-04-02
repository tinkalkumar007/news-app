import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f6cac2a02ecd4e2496b7f620dfc8a6d4&page=${page}&pagesize=${props.pageSize}`;
        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title=`${capitalizeFirstLetter(props.category)} - News Heaven`;
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        props.setProgress(0);
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f6cac2a02ecd4e2496b7f620dfc8a6d4&page=${page+1}&pagesize=${props.pageSize}`;
        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    return (
        <div>
            <h2 className="text-center" style={{marginTop:'90px', color: props.mode==='light'?'black':'white'}} >{`News Heaven - Top ${capitalizeFirstLetter(props.category)} Headlines`}</h2>
            {loading && <Spinner />}
            <InfiniteScroll style={{ overflow: 'unset' }}
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={totalResults > articles.length}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center', color: props.mode==='light'?'black':'white'}}>
                        <b>Yay! You are up to date.</b>
                    </p>
                }
            >

                <div className='container'>
                    <div className="row my-3">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem mode={props.mode} toggleMode={props.toggleMode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} publisher={element.source.name} publishDate={new Date(element.publishedAt).toDateString()} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
export default News