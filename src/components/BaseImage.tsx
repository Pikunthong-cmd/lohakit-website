import NextImage from 'next/image'
import type { ImageProps } from 'next/image'

export default function BaseImage(props: ImageProps) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const { src, ...rest } = props

  const normalizedSrc =
    typeof src === 'string' && src.startsWith('/')
      ? (prefix + src) as typeof src
      : src

  return <NextImage src={normalizedSrc} {...rest} />
}
