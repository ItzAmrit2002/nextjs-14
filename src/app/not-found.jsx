import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, this page couldn't be found!</p>
        <Link href="/">Return to Home</Link>
    </div>
  )
}

export default NotFound