import "../../styles/home.css";
import image from "/images/Noah-f-5.jpg";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">
        🧩 The Complexity That Keeps People Curious
      </span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>Not everything about Noah Fearnley is immediately clear.</span>

          <div>
            And that’s not a flaw—it’s a strength. <br />
            Because clarity isn’t always what draws people in. Sometimes, it’s
            curiosity. The sense that there’s more beneath the surface. More to
            understand. More to discover. <br />
            That kind of intrigue keeps people engaged. Not because they’re
            confused—but because they’re interested.
          </div>
        </div>

        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
