import { ImageResponse } from "next/server";

export const runtime = "edge";

export default async function Image() {
  const spaceGroteskBold = fetch(
    new URL("./SpaceGrotesk-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: 48,
          fontWeight: 600,
        }}
      >
        <p>John Rhule</p>
      </div>
    ),
    {
      width: 800,
      height: 400,
      fonts: [
        {
          name: "Space Grotesk",
          data: await spaceGroteskBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
