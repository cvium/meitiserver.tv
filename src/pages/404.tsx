import * as React from "react"
import { Link } from "gatsby"
import { ErrorPage } from "../components/Layout"

const NotFoundPage = () => {
  return (
    <ErrorPage>
      <main className="text-center mt-10">
        <title>Not found</title>
        <p className="text-thatch-100 text-9xl font-extrabold mb-2">404</p>
        <h1 className="text-thatch-500 text-6xl font-extrabold mb-6">Page not found</h1>
        <p className="text-thatch-500 mb-4">
          Seems like we couldn't find what you were looking for.
        </p>
        <Link className="transition-colors text-thatch-300 hover:text-thatch-100 hover:underline text-2xl font-bold" to="/">Go home</Link>.
      </main>
    </ErrorPage>
  )
}

export default NotFoundPage
