import { Link } from "react-router-dom";

type ActivityCardProps = {
    title: string;
    image: string;
    alt: string;
    link: string;
    location: string;
    distance: string;
    description: string;
    category: string;
};

function ActivityCard({
    title,
    location,
    distance,
    description,
    category,
    image,
    alt,
    link,
}: ActivityCardProps) {
    return (
        <article className="activity-card">
            <img
                src={image}
                alt={alt}
                className="card-image"
                loading="lazy"
            />

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <ul className="activity-meta">
                    <li>
                        <strong>Plats:</strong> {location}</li>
                    <li>
                        <strong>Avstånd:</strong> {distance}</li>
                    <li>
                        <strong>Kategori:</strong> {category}</li>
                </ul>

                <Link className="card-button" to={link}>
                    Läs mer
                </Link>
            </div>
        </article>
    );
}

export default ActivityCard;