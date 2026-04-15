import "../../styles/home.css";
import image from "/images/Noah-f-2.jpg";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">
        🌱 The Beginning — Subtle, But Intentional
      </span>

      <div className="biography-txt">
        <div>
          <span>
            Every story starts somewhere. But not every story announces itself.
          </span>
          <span>
            Noah Fearnley’s journey feels less like a sudden spark and more like
            a slow build—one shaped by curiosity, instinct, and a willingness to
            explore without needing immediate recognition.
          </span>

          <span>
            There’s something different about people who don’t rush the process.
          </span>
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>

        <div>
          <span>
            They observe more. <br />
            They absorb more. <br />
            They grow without needing validation at every step.
          </span>
          <span>
            And when they finally step forward, there’s already depth there.
          </span>
          <span>
            That’s what makes the foundation interesting—not just what is being
            built, but how it’s being built.
          </span>
        </div>
      </div>
    </section>
  );
}
