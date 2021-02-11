import React from 'react';


const BlogPost = (props) => {
    const formatDate = (date) => {
        const dateArray = date.split(' ')[0];
        const year = dateArray.split('-')[0].toString();
        const month = dateArray.split('-')[1].toString();
        const day = dateArray.split('-')[2].toString();

        const monthNames = {
          '01': "JANUARY", '02': "FEBRUARY", '03': "MARCH",
          '04': "APRIL", '05': "MAY", '06': "JUNE", '07': "JULY",
          '08': "AUGUST", '09': "SEPTEMBER", '10': "OCTOBER",
          '11': "NOVEMBER", '12': "DECEMBER"
        };

        return `${monthNames[month]} ${day}, ${year}`
    }
      

    return (
        <div className="card">
            <img src={props.article.thumbnail} alt="Blog Post"/>
            <h3>{props.article.title}</h3>
            <p>{formatDate(props.article.pubDate)}</p>
            <div className='categories'>
                {React.Children.toArray(
                    props.article.categories.map(category => <span>{category}</span>)
                )}
            </div>
        </div>
    );
};

export default BlogPost;