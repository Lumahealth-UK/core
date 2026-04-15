import Image from 'next/image'
import { Section } from '@/components/primitives/Section'

const LOGOS = [
  {
    name: 'University of Manchester',
    src: '/Images/Universities/uofm.gif',
    width: 200,
    height: 56,
  },
  {
    name: "King's College London",
    src: "/Images/Universities/King'sCollegeLondon.png",
    width: 220,
    height: 56,
  },
  {
    name: 'University of Edinburgh',
    src: '/Images/Universities/UniversityofEdinburgh.png',
    width: 240,
    height: 56,
  },
  {
    name: 'University of Bristol',
    src: '/Images/Universities/UniversityofBristol.png',
    width: 210,
    height: 56,
  },
  {
    name: 'University of Leeds',
    src: '/Images/Universities/UniversityofLeeds.png',
    width: 240,
    height: 56,
  },
  {
    name: 'UCL',
    src: '/Images/Universities/UCL.jpg',
    width: 210,
    height: 56,
  },
]

export function LogoCloud() {
  return (
    <Section className="bg-beige pt-8 pb-12 sm:pt-10 md:pt-14 md:pb-16 lg:pt-16">
      <p className="mb-8 text-center text-sm font-medium text-muted-text">Trusted by students at</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="flex h-16 items-center justify-center opacity-80 transition-opacity hover:opacity-100 md:h-20"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain md:h-14"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
