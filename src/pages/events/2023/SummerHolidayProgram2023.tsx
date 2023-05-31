import { CaptionImage } from "../../../controls/CaptionImage"

export function SummerHolidayProgram2023() {
  return (
    <>
      <CaptionImage
        src="images/pages/events/2023/summer-holiday-program/summer-holiday-2023.jpg"
        onClick={() =>
          (window.location.href =
            "https://www.unser-ferienprogramm.de/obernburg/index.php")
        }
      />
    </>
  )
}
