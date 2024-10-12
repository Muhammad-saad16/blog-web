import Link from "next/link"

export default function Header() {
    return(
        
        <div className="header">
            <div className="logo">
            <Link href={"/"}>
         <h2>Saad</h2>
            </Link></div>
        
        <ul className="header-button">
            <Link href= {"/"}>
            <li>Home</li>
            </Link>
            <Link href= {"/about"}>
            <li>About</li>
            </Link>
            <Link href= {"/blogs"}>
            <li>Blogs</li>
            </Link>
            <Link href= {"/contact"}>
            <li>Contact</li>
            </Link>
          
        </ul>
    </div>

    )
}