'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function Studio() {
    console.log("test")
  return <NextStudio config={config} />
}