
export function openModal({modalComponent, size="lg"}) {
  return {
    type: "OPEN_MODAL",
    payload: {
      open:true,
      size,
      modalComponent,
    }
  }
}
export function closeModal() {
  return {
    type: "CLOSE_MODAL",
  }
}

