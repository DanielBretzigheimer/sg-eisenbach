import { Typography } from "@suid/material"

type LabelImageProps = {
  src: string
  label?: string
}

export function CaptionImage(props: LabelImageProps) {
  return (
    <>
      <img src={props.src} />
      <Typography variant="caption">{props.label}</Typography>
    </>
  )
}
