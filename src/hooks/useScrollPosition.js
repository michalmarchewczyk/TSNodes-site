import { useEffect, useState } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = (e) => {
            
            window.requestAnimationFrame(function () {
                setScrollPosition(window.scrollY);
            })
        }
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    
    return scrollPosition
}


export default useScrollPosition
