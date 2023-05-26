import { useState, useEffect } from "react"

export function useFile() {
    const [images, setImages] = useState<FileList | null>(null)
    const [printImages, setPrintImages] = useState<any[]>([])

    useEffect(() => {
        if (images) {
            for (let i = 0; i < images.length; i++) {
                const fileReader = new FileReader()
                fileReader.readAsDataURL(images[i])

                fileReader.onload = function () {
                    if (fileReader.result) {
                        setPrintImages(prev => ([fileReader.result, ...prev]))
                    }
                }
            }
        }
        return () => {
            // setImages(null)
            setPrintImages([])
        }
    }, [images])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImages(event.target.files)
    }

    const onClear = () => {
        setImages(null)
        setPrintImages([])
    }

    return { images, printImages, onChange, onClear }
}