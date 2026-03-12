"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {

const [visible, setVisible] = useState(false)

useEffect(() => {

const toggleVisibility = () => {
if (window.scrollY > 300) {
setVisible(true)
} else {
setVisible(false)
}
}

window.addEventListener("scroll", toggleVisibility)

return () => window.removeEventListener("scroll", toggleVisibility)

}, [])

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
})
}

return (

<button
onClick={scrollToTop}
className={`fixed bottom-20 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg transition ${
visible ? "opacity-100" : "opacity-0"
}`}
>

↑

</button>

)

}