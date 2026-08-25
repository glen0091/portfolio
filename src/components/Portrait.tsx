"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/content";

/**
 * Professional portrait.
 *
 * Shows the photo at `public/glen.jpg` when it exists; if the file is missing
 * it gracefully falls back to an "GP" monogram so the layout never breaks.
 *
 * ⚠️ TO ADD YOUR PHOTO: save your headshot as `public/glen.jpg`
 * (a portrait-oriented / 4:5-ish JPG works best). No code changes needed —
 * it will appear automatically. To use a different filename or format,
 * change PHOTO_SRC below.
 */
const PHOTO_SRC = "/glen.jpg";

export default function Portrait() {
  const [hasPhoto, setHasPhoto] = useState(true);

  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative">
      <div className="border-border-subtle bg-surface-2 relative aspect-[4/5] w-full overflow-hidden rounded-2xl border">
        {hasPhoto ? (
          <Image
            src={PHOTO_SRC}
            alt={`${site.name} — ${site.role}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
            onError={() => setHasPhoto(false)}
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,var(--accent-soft),transparent_55%),radial-gradient(120%_120%_at_90%_90%,rgba(34,211,238,0.14),transparent_55%)]"
            />
            <div className="noise-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-muted/40 text-7xl font-semibold tracking-tight">
                {initials}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Signature caption */}
      <div className="border-border-subtle bg-surface/80 absolute -bottom-4 left-6 rounded-xl border px-4 py-2.5 backdrop-blur-md">
        <p className="font-display text-sm font-semibold">{site.name}</p>
        <p className="text-muted-2 text-xs">{site.role}</p>
      </div>
    </div>
  );
}
