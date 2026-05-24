/* eslint-disable */
/* global React */

const { TweaksPanel, TweakSection, TweakColor, TweakSlider, TweakRadio } = window;

window.TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C9A84C",
  "accentBright": "#E8C766",
  "base": "#050505",
  "grain": 0.08
}/*EDITMODE-END*/;

function RinTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakColor label="Accent" value={tweaks.accent} onChange={v => setTweak("accent", v)} />
        <TweakColor label="Accent (bright)" value={tweaks.accentBright} onChange={v => setTweak("accentBright", v)} />
        <TweakRadio
          label="Preset"
          value=""
          onChange={v => {
            if (v === "gold") setTweak({ accent: "#C9A84C", accentBright: "#E8C766" });
            if (v === "silver") setTweak({ accent: "#8A9BB0", accentBright: "#C0CFE0" });
            if (v === "electric") setTweak({ accent: "#00D4FF", accentBright: "#7AECFF" });
            if (v === "copper") setTweak({ accent: "#B87333", accentBright: "#E29A4E" });
          }}
          options={[
            { label: "Gold", value: "gold" },
            { label: "Silver", value: "silver" },
            { label: "Electric", value: "electric" },
            { label: "Copper", value: "copper" },
          ]}
        />
      </TweakSection>
      <TweakSection title="Base">
        <TweakColor label="Background" value={tweaks.base} onChange={v => setTweak("base", v)} />
        <TweakSlider label="Grain opacity" value={tweaks.grain} onChange={v => setTweak("grain", v)} min={0} max={0.25} step={0.01} />
      </TweakSection>
    </TweaksPanel>
  );
}

window.RinTweaks = RinTweaks;
