import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { domain, handle, name } from "@/lib/identity";

export const alt = `${name} – ${domain}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const geistRegular = await readFile(
  join(process.cwd(), "assets/fonts/geist-regular.ttf"),
);
const geistSemiBold = await readFile(
  join(process.cwd(), "assets/fonts/geist-semibold.ttf"),
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          fontFamily: "Geist",
          padding: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            border: "1px solid #262626",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 80,
                fontWeight: 600,
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              {name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 32,
                fontWeight: 400,
                color: "#a3a3a3",
                letterSpacing: "-0.02em",
              }}
            >
              Software Engineer @ CredibleX
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 400,
                color: "#a3a3a3",
                letterSpacing: "-0.02em",
              }}
            >
              {domain}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 400,
                color: "#a3a3a3",
                letterSpacing: "-0.02em",
              }}
            >
              @{handle}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
