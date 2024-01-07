import { Box, ButtonBase, Typography } from "@mui/material"

type LabelImageProps = {
  src: string
  label?: string
  onClick?: () => void
}

export function CaptionImage(props: LabelImageProps) {
  return (
    <ButtonBase
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        textAlign: "left",
      }}
      disabled={!props.onClick}
      onClick={props.onClick}
    >
      <img style={{ verticalAlign: "middle" }} src={props.src} />
      {props.label && (
        <Box
          position="absolute"
          width="100%"
          p={1}
          pt={2}
          bottom={0}
          sx={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(1,1,1,0) 100%)",
          }}
        >
          <Typography color="white" variant="caption" whiteSpace="break-spaces">
            {props.label}
          </Typography>
        </Box>
      )}
    </ButtonBase>
  )
}
