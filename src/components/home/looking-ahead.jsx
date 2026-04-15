import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">🔚 Not an Ending — Just a Pause</span>

      <span>
        If you’ve made it all the way down here, then you already understand
        something:
      </span>

      <span>This isn’t about hype.</span>
      <span>It’s not about creating a larger-than-life image.</span>
      <span>
        It’s about recognizing something quieter—but just as powerful.
      </span>

      <div>
        A presence that doesn’t demand attention… yet earns it anyway. <br />
        A personality that doesn’t need to be exaggerated… because it’s already
        enough. <br />
        A story that isn’t rushing to be told… because it’s still unfolding.{" "}
        <br />
        And maybe that’s what makes Noah Fearnley worth watching. Not because
        he’s trying to be everywhere. But because wherever he is… He feels real.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
