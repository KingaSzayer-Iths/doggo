import { Link, useParams } from "react-router-dom";
import { activities } from "../data/activities";

function ActivityDetails() {
  const { id } = useParams();

  const activity = activities.find(
    (item) => item.id === Number(id)
  );

  if (!activity) {
    return (
      <main id="main-content">
        <section className="activity-page">
          <h1>Aktiviteten kunde inte hittas</h1>

          <Link className="button" to="/activities">
            ← Tillbaka till aktiviteter
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content">
      <article className="activity-page">
        {/* Aktivitetens rubrik och introduktion */}
        <header className="activity-header">
          <p className="eyebrow">{activity.category}</p>

          <h1>{activity.title}</h1>

          {activity.intro && (
            <p>{activity.intro}</p>
          )}
        </header>

        {/* Aktivitetens huvudbild */}
        <figure className="activity-figure">
          <img
            src={activity.image}
            alt={activity.alt}
            loading="lazy"
          />

          <figcaption>
            {activity.description}
          </figcaption>
        </figure>

        {/* Praktisk information */}
        <section
          className="activity-info"
          aria-labelledby="activity-info-heading"
        >
          <h2 id="activity-info-heading">
            Praktisk information
          </h2>

          <dl className="activity-details">
            <dt>Plats</dt>
            <dd>{activity.location}</dd>

            {activity.date && (
              <>
                <dt>Datum</dt>
                <dd>{activity.date}</dd>
              </>
            )}

            {activity.time && (
              <>
                <dt>Tid</dt>
                <dd>{activity.time}</dd>
              </>
            )}

            {activity.duration && (
              <>
                <dt>Längd</dt>
                <dd>{activity.duration}</dd>
              </>
            )}

            {activity.price && (
              <>
                <dt>Pris</dt>
                <dd>{activity.price}</dd>
              </>
            )}

            {activity.suitableFor && (
              <>
                <dt>Passar för</dt>
                <dd>{activity.suitableFor}</dd>
              </>
            )}
          </dl>
        </section>

        {/* Utförligare beskrivning */}
        {activity.about && (
          <section
            className="activity-description"
            aria-labelledby="activity-description-heading"
          >
            <h2 id="activity-description-heading">
              Om aktiviteten
            </h2>

            {activity.about.map((paragraph, index) => (
              <p key={`${activity.id}-about-${index}`}>
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {/* Dagens program visas endast om aktivitet har program */}
        {activity.program && (
          <section
            className="activity-program"
            aria-labelledby="activity-program-heading"
          >
            <h2 id="activity-program-heading">
              Dagens program
            </h2>

            <ol>
              {activity.program.map((item, index) => (
                <li key={`${activity.id}-program-${index}`}>
                  {item}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Tips inför aktiviteten */}
        {activity.tips && (
          <section
            className="activity-tips"
            aria-labelledby="activity-tips-heading"
          >
            <h2 id="activity-tips-heading">
              Att tänka på
            </h2>

            <ul>
              {activity.tips.map((tip, index) => (
                <li key={`${activity.id}-tip-${index}`}>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Frågor visas endast om informationen finns */}
        {activity.questions && (
          <section
            className="activity-questions"
            aria-labelledby="activity-questions-heading"
          >
            <h2 id="activity-questions-heading">
              Har du frågor?
            </h2>

            <p>{activity.questions}</p>
          </section>
        )}

        {/* Tillbaka till aktivitetslistan */}
        <footer className="activity-footer">
          <Link className="button" to="/activities">
            ← Tillbaka till aktiviteter
          </Link>
        </footer>
      </article>
    </main>
  );
}

export default ActivityDetails;