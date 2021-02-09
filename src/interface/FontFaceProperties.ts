type FontFeatureSettings = "normal" | string;
type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";

type FontStretch = | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded" | string;

type FontStyle = "italic" | "normal" | "oblique" | string;

type FontVariant =
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | string

type FontVariationSettings = "normal" | string;

type FontWeight = "bold" | "normal" | number | string;

export interface FontFaceProperties {
    MozFontFeatureSettings: FontFeatureSettings;
    fontDisplay: FontDisplay;
    fontFamily: string;
    fontFeatureSettings: FontFeatureSettings;
    fontStretch: FontStretch;
    fontStyle: FontStyle;
    fontVariant: FontVariant;
    fontVariationSettings: FontVariationSettings;
    fontWeight: FontWeight;
    src: string;
    unicodeRange: string;
}
