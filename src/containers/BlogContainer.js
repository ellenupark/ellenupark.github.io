import React, {useState, useEffect} from 'react';
import BlogPost from '../components/BlogPost'
import axios from 'axios';

const BlogContainer = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        retrieveRecentArticles();
    }, [])

    const retrieveRecentArticles = () => {
        return axios
            .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ellen-park?t=1612391274')
            .then(({data}) => data)
            .then(posts => {
                setArticles(posts.items.slice(0, 7))
            })
    }

    return (
        <div className='blog'>
            <h2>Blog</h2>
            <div className="cards">
                {React.Children.toArray(
                    articles.map(article => <a target="_blank" rel="noreferrer" href={article.link}><BlogPost article={article}/></a>)
                )
                }
            </div>
        </div>
    );
};

export default BlogContainer;