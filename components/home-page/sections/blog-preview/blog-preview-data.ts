export interface BlogPost {
  title: string
  tag: string
  date: string
  href: string
  image: string
  imageAlt: string
}

export const posts: BlogPost[] = [
  {
    title: "The burnout you don't even know you're in",
    tag: 'Mental health',
    date: 'Read on Medium',
    href: 'https://medium.com/@lumahealthuk/the-burnout-you-dont-even-know-you-re-in-83de22b259bf',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*CufoQoz0juHxXd1DBmZQ-A.png',
    imageAlt: 'Illustration for Luma Health UK article about burnout',
  },
]
