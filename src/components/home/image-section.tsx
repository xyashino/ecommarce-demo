import { cn } from '@/lib/utils'
import Image from 'next/image'
type ImageSectionProps = {
  reverse?: boolean
  children?: React.ReactNode
  image: {
    alt: string
    src: string
  }
  content: {
    title: string
    description: string
  }
}

export function ImageSection({
  content,
  image,
  reverse = false,
  children
}: ImageSectionProps) {
  return (
    <section
      className={cn(
        'flex gap-10 place-items-center flex-row',
        reverse && 'flex-row-reverse'
      )}
    >
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-4xl font-bold capitalize">{content.title}</h2>
        <p className="text-md">{content.description}</p>
        {children}
      </div>
      <div
        className={cn('w-full flex justify-start', reverse && 'justify-center')}
      >
        <Image
          {...image}
          alt={image.alt}
          className="w-full max-w-[500px]"
          draggable={false}
          width={500}
          height={500}
          quality={100}
        />
      </div>
    </section>
  )
}
