import { useRouter } from "next/router"
import { useEffect } from "react";

const Guides = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/guides/select-characters')
    }, [])
    return (
        null
    )
}

export default Guides;