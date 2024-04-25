import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit, impedit maxime qui commodi facilis obcaecati fugiat itaque voluptates molestias </p>

        <p>Go to the <Link to="/" >Homepage</Link>.</p>
    </div>
  )
}
