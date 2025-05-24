import { IconPackage } from '@tabler/icons-react'
import Image from 'next/image'

interface ProductImageProps {
  imageUrl: string
  name: string
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  if (!imageUrl) {
    return (
      <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
        <IconPackage className="h-6 w-6 text-muted-foreground" />
      </div>
    )
  }
  return (
    <div className="w-12 h-12 relative overflow-hidden rounded-md bg-muted">
      <Image src={imageUrl} alt={name} fill className="object-cover" />
    </div>
  )
}
