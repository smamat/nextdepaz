import { useRouter } from "next/router"

const article = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      <h3>Hi there, article no {id}</h3>

    </div>
  )
}

export default article