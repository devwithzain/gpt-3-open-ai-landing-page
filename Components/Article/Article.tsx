import Image from 'next/image';
import './Article.scss';
interface ArticleProps {
    imgUrl: string | any;
    date: string;
    title: string;
}
const Article: React.FC<ArticleProps> = ({ imgUrl, date, title }) => {
    return (
        <>
            <div className="gpt3__blog-container_article">
                <div className="gpt3__blog-container_article-image">
                    <Image src={imgUrl} alt="blog image" />
                </div>
                <div className="gpt3__blog-container_article-content">
                    <div>
                        <p>{date}</p>
                        <h3>{title}</h3>
                    </div>
                    <p>Read Full Article</p>
                </div>
            </div>
        </>
    );
};

export default Article;