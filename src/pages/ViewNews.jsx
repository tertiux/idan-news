import React from 'react'

function ViewNews(props) {
  return (
    <div className='view-news'>
      <div className="content">
        <div className="news-type">
            <span>Breaking News</span>
            <span style={{
                textTransform: "capitalize"
            }}>{props.news.newsType}</span>
        </div>
        <div className="heading">
            <div className="title">
                <h1>    
                    {props.news.headline}
                </h1>
            </div>
        </div>
        <div className="body">
            <div className="about">
                {props.news.subHeadline}
                <div className="read-more">
                    <span>
                        Read More
                    </span>
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>
            {props.news.imgUrl.length > 1 && <img src={props.news.imgUrl} alt="failed to load" />}
            {props.news.imgFile.length > 1 && <img src={props.news.imgFile} alt="an error occured" />}
            {props.news.imgFile.length < 1 && props.news.imgUrl.length < 1 && <img src="img/comrade.jpeg" alt="site didn't load completely" />}
        </div>
        <div className="share">
            <a href="https://www.facebook.com/dialog/share?app_id=205604876116272&display=popup&href=https://idan-tv.netlify.app" target="_blank" rel='noreferrer'>
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/intent/tweet?url=https://idan-tv.netlify.app" target="_blank" rel='noreferrer'>
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://api.whatsapp.com/send?text=https://idan-tv.netlify.app" target="_blank" rel='noreferrer'>
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
        <div className="end">
            © idan.tv 2023
        </div>
      </div>
    </div>
  )
}

export default ViewNews
