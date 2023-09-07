import Photo from "@/components/frame"
import Modal from "@/components/modal"
import Photos from "@/app/photo"
export default function PhotoModal ({params: {id: photoId}}) {
  const photo = photoId && Photos.find(photo => photo.id === photoId)

  return (
    <Modal>
      <Photo photo={photo}/>
    </Modal>
  )
}