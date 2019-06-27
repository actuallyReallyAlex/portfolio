export const smoothlyScroll = elementId => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.log(`Could not locate element: ${elementId}`)
  }
}
