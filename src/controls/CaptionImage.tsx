import { Box, ButtonBase, Typography } from "@mui/material"

type LabelImageProps = {
  id?: string
  src: string
  label?: string
  onClick?: () => void
}

export function CaptionImage(props: LabelImageProps) {
  function getContent() {
    return (
      <>
        <img
          id={props.id}
          style={{ verticalAlign: "middle" }}
          src={props.src}
        />
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
              overflow: "hidden",
              textOverflow: "ellipsis",
              ".MuiTypography-root": {
                whiteSpace: "nowrap",
              },
              "&:hover .MuiTypography-root": { whiteSpace: "normal" },
            }}
          >
            <Typography color="white" variant="caption">
              {props.label}
            </Typography>
          </Box>
        )}
      </>
    )
  }

  if (props.onClick)
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
        {getContent()}
      </ButtonBase>
    )

  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        textAlign: "left",
      }}
    >
      {getContent()}
    </Box>
  )
}
