import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">🎯 Authenticity Without Effort</span>
      <div className="personal-life-txt">
        <span>
          There’s a difference between trying to be authentic and actually being
          authentic.
        </span>

        <span>One feels like a performance.</span>
        <span>The other feels like truth.</span>

        <span>
          Noah doesn’t seem interested in shaping himself into something he’s
          not just to fit expectations.
        </span>

        <span>
          There’s no obvious attempt to follow trends or mimic what works for
          others.
        </span>

        <span>
          Instead, there’s a consistency in how he shows up. <br />
          And consistency builds trust. <br />
          It tells people: what you see isn’t temporary—it’s real.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>
    </section>
  );
}
