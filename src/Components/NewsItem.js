const NewsItem =(props)=> {
    return (
      <div className='my-3'>
        <div className="card" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'black', border:'solid white 2px'}}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger">
              {props.publisher}
            </span>
          </div>
          <img src={props.imageUrl ? props.imageUrl : "https://img.freepik.com/premium-vector/badge-news-logo-modern-flat-pictogram-business-marketing-internet-concept-symbol-website-design-buttons-mobile-app-news-vector-icon-globe-symbol-world_340607-38.jpg?w=740"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"} on {props.publishDate} </small></p>
            <a href={props.url} className={`btn btn-sm btn-${props.mode}`} style={{border:props.mode==='light'?'black solid 1px':'white solid 1px'}}>Read More</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItem
