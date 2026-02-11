import React from "react";

interface MapViewProps {
  lat: number;
  lng: number;
  title?: string;
}

export const MapView: React.FC<MapViewProps> = ({ lat, lng, title }) => {
  const marker = `${lat},${lng}`;
  const zoom = 14;
  const src = `https://www.openstreetmap.org/export/embed.html?&marker=${encodeURIComponent(
    marker
  )}&zoom=${zoom}`;

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-neutral-100">
      <iframe
        title={title || "Mapa do imóvel"}
        src={src}
        className="h-72 w-full"
        loading="lazy"
      />
    </div>
  );
};

