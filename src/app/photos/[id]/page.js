import photos from "@/app/photo";
import Photo from "@/components/frame";

export default function PhotoPage ( {params} ) {
  const photo = photos.find(photo => photo.id === params.id)

  return (
    <div className={"container mx-auto my-10"}>
      <div className={"w-1/2 mx-auto border border-amber-600"}>
        <Photo photo={photo}/>
      </div>
    </div>
  )
}