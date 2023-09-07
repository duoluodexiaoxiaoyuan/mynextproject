export default function Page({params}) {
  return(
    <h1 className={"text-3xl text-green-900"}>Catch All Slug page{params.slug}</h1>
  )
}