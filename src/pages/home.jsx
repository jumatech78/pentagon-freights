import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Pentagon Freights"
        content="We deal in Transportation & Logistics"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
