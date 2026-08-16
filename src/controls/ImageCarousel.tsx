import { Box, IconButton } from "@mui/material"
import { useState, useEffect } from "react"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

type CarouselImage = {
  src: string
  caption?: string
}

type ImageCarouselProps = {
  images: (string | CarouselImage)[]
  title?: string
}

export function ImageCarousel(props: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [hoverPaused, setHoverPaused] = useState(false)

  const getCurrentImage = () => {
    const img = props.images[currentIndex]
    if (typeof img === "string") {
      return { src: img, caption: undefined }
    }
    return img
  }

  const currentImage = getCurrentImage()

  useEffect(() => {
    if (!isAutoPlay || hoverPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % props.images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, hoverPaused, props.images.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? props.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % props.images.length)
  }

  const handleMouseEnter = () => {
    setShowControls(true)
    setHoverPaused(true)
  }

  const handleMouseLeave = () => {
    setShowControls(false)
    setHoverPaused(false)
  }

  return (
    <Box
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50vh",
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    >
      <img
        src={currentImage.src}
        style={{
          height: "100%",
          width: "auto",
          maxWidth: "100%",
          display: "block",
          objectFit: "contain",
        }}
        alt={currentImage.caption || `Carousel image ${currentIndex + 1}`}
      />
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Right Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
      {(props.title || currentImage.caption) && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
            color: "white",
            padding: "24px 16px 16px",
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          {currentImage.caption || props.title}
        </Box>
      )}
      <IconButton
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          opacity: 0.5,
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        {isAutoPlay ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        {props.images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "white",
              opacity: index === currentIndex ? 1 : 0.5,
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
