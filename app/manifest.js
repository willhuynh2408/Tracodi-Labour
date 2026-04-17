export default function manifest() {
  return {
    name: "Tracodi Labour",
    short_name: "Tracodi",
    description: "Structured labor export services for Labour employers and workers.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f9",
    theme_color: "#b90014",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
