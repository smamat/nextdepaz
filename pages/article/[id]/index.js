import { useRouter } from "next/router"
import Link from "next/link"

const article = ({ article }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h3>This is article no. {id}</h3>
      <Link href="/">Go back now, ok?</Link>
    </div>
  )
  
  /*
  return (
    <>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>

    </>
  )
  */
}

/*
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article: article
    }
  }
}
*/

export default article