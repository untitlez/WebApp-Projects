async function page({ params }) {
    const {id} = await params.id
    console.log(id);
  return (
    <>
        <h1>Params</h1>
        {id}
    </>
  )
}
export default page
