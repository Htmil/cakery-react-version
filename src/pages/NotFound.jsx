import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <div className="errorPage">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>Go back to <Link to="/" >Homepage</Link>!</p>
      </div>
    </main>
  )
}
