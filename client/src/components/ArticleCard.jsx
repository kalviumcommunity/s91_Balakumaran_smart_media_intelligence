function ArticleCard({ title, author, category }) {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ArticleCard;