import "../../styles/home.css";
import image from "/images/Noah-f-4.jpg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">⏳ Growth Without Pressure</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          <span>Some people chase growth like it’s a race.</span>

          <span>
            Others allow it to happen naturally. Noah feels like the second
            type.
            <br />
            There’s no sense of urgency to become something overnight. No
            pressure to constantly prove progress. <br />
            Instead, there’s a steady evolution. One that happens through
            experience, reflection, and time. And that kind of growth tends to
            last. <br />
            Because it’s not built on expectation—it’s built on reality.
          </span>
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
