import React from 'react'

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-muted text-lg max-w-md">
      This page is under development as part of the PricePulse AI foundation.
    </p>
  </div>
)

export const Market = () => <PlaceholderPage title="Commodity Market" />
export const Alerts = () => <PlaceholderPage title="Price Alerts" />
export const Locality = () => <PlaceholderPage title="Locality Intelligence" />
export const Awareness = () => <PlaceholderPage title="Disaster & Supply Awareness" />
export const About = () => <PlaceholderPage title="About PricePulse AI" />
