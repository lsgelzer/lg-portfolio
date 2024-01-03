import Image from "next/image"
const Header = (props) =>{
    return(
        <nav class="bg-gray-800 p-1 m-2 rounded-full flex justify-between">
            <div class="min-w-3.5">
                <Image/>
            </div>
            <ul class="flex space-x-4 ml-auto" >
                <li class="rounded-full text-sm text-white px-4 py-2 uppercase">
                <a href="#home" class="block">Home</a>
                </li>
                <li class="rounded-full text-sm text-white px-4 py-2 uppercase">
                <a href="#about" class="block">About</a>
                </li>
                <li class="rounded-full text-sm text-white px-4 py-2 uppercase">
                <a href="#services" class="block">Services</a>
                </li>
                <li class="rounded-full text-sm text-white px-4 py-2 uppercase">
                <a href="#contact" class="block">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header