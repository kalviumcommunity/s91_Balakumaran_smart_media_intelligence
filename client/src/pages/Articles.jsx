import DashboardLayout from "../layouts/DashboardLayout";
import ArticleCard from "../components/ArticleCard";

function Articles() {
  return (
    <DashboardLayout>
      <h1>Articles</h1>

      <div className="articles-grid">
        <ArticleCard
          title="AI in Modern Journalism"
          author="Bala kumaran"
          category="Technology"
        />

        <ArticleCard
          title="Understanding Audience Engagement"
          author="Anand"
          category="Media"
        />

        <ArticleCard
          title="The Future of Digital News"
          author="Priya"
          category="Business"
        />
      </div>
    </DashboardLayout>
  );
}

export default Articles;