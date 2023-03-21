import { useInView } from '@react-spring/web'

const useAnimateView = (animate: any) => {
    return useInView(() => ({ ...animate }),)
}

export default useAnimateView