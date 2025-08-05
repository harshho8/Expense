import { checkUser } from "@/lib/checkUser"

const Navbar = () => {
    checkUser();
  return (
    <div>Navbar</div>
  )
}

export default Navbar