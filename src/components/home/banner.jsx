import "../../styles/home.css";
import image from "/images/Noah-f.jpg";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Noah Fearnley</span>
        <span>The Kind of Energy You Don’t See Coming — But Don’t Forget</span>
      </div>

      <div className="banner-content">
        <span>
          There are people who walk into a space and immediately demand
          attention.
        </span>
        <span>And then there are people like Noah Fearnley.</span>
        <span>
          You don’t always notice them first—but somehow, by the end, they’re
          the only one you remember.
        </span>
        <span>
          There’s a quiet magnetism there. Not forced. Not exaggerated. Just…
          present. The kind of presence that doesn’t try to prove anything—and
          because of that, ends up feeling more real than most.
        </span>
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
