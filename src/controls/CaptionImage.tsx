import { Box, ButtonBase, Typography } from "@mui/material"

type LabelImageProps = {
  id?: string
  src: string
  label?: string
  onClick?: () => void
  title?: string
}

export function CaptionImage(props: LabelImageProps) {
  function getImageContent() {
    return (
      <>
        <img
          id={props.id}
          style={{ verticalAlign: "middle" }}
          src={props.src}
        />
        {props.title && (
          <Box
            position="absolute"
            width="100%"
            p={2}
            bottom={0}
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(1,1,1,0) 100%)",
              display: { xs: "none", md: "block" },
              overflow: "hidden",
            }}
          >
            <Typography color="white" variant="h5" sx={{ fontWeight: 500 }}>
              {props.title}
            </Typography>
          </Box>
        )}
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

  function getContent() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          position="relative"
          sx={{
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {getImageContent()}
        </Box>
        {/* Mobile: Remaining lines of title below image */}
        {props.title && (
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              p: 2,
            }}
          >
            <Typography
              color="textPrimary"
              variant="h5"
              sx={{ fontWeight: 500 }}
            >
              {props.title}
            </Typography>
          </Box>
        )}
      </Box>
    )
  }

  if (props.onClick)
    return (
      <ButtonBase
        sx={{
          textAlign: "left",
          borderRadius: 4,
          overflow: "hidden",
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
        textAlign: "left",
      }}
    >
      {getContent()}
    </Box>
  )
}
