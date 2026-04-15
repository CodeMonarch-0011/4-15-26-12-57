import "../../styles/home.css";
import image from "/images/Noah-f-3.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">🎭 Presence Over Performance</span>

      <div className="rise-main">
        <div className="rise-txt">
          <span>Some people perform to be seen.</span>
          <span>Others simply exist—and that’s what draws attention.</span>
          <span>Noah leans into the second.</span>
          <span>
            There’s no sense of overreaching. No exaggerated effort to impress.
            Instead, there’s a kind of natural rhythm to how he shows up—whether
            it’s in conversations, creative expression, or the way he carries
            himself.
          </span>
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>

      <div className="rise-main-extra">
        <span>It feels unforced.</span>
        <span>
          And in a world where so much is curated and polished, that kind of
          ease stands out more than perfection ever could.
        </span>
        <span>People don’t connect to flawless—they connect to real.</span>
      </div>
    </section>
  );
}
