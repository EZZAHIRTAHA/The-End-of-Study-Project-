import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
const NotFound = () => {
  return (
    <div className="flex m-20  justify-center items-center flex-col">
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1685309819~exp=1685310419~hmac=2ebcfcfad5a66d5e6ed9ccccf471db223cc01acd2688fe5349cabc3248da3eee" alt="not-found" className="w-[400px]" />
      <Link className="flex text-2xl p-5 bg-emerald-400 rounded-lg text-white hover:bg-green-800 justify-center items-center" to='/'>
        <FaHome className="mr-3 "/> Back Home
      </Link>
    </div>
  )
}

export default NotFound
