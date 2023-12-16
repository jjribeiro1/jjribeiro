import { StaticImageData } from 'next/image'

export type Project = {
  name: string
  description: string
  tech: string[]
  image: StaticImageData
  repository: string
  deployUrl: string
}
