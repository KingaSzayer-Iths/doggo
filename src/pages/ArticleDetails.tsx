import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

function ArticleDetails() {
    const { id } = useParams();

    const article = articles.find(
        (item) => item.id === Number(id)
    );

    if (!article) {
        return (
            <main id="main-content">
                <p>Artikeln kunde inte hittas.</p>
            </main>
        );
    }

    return (
        <main id="main-content">
            <section className="details-hero">
                <img
                    src={article.image}
                    alt={article.title}
                    className="details-image"
                    loading="lazy"
                />
                <div className="details-content">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    {article.tips && article.tips.length > 0 && (
                        <div className="details-tips">
                            <h2>Tips</h2>
                            <ul>
                                {article.tips.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                        
                    )}
                    
                    {/* <p>Här kan användaren läsa mer om ämnet,
                        få tips och inspiration.</p> */}

                    <button type="button">
                    Spara artikel
                    </button>
                </div>
            </section>
        </main>
    );
}

export default ArticleDetails;