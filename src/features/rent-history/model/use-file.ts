import { useState, useEffect, ChangeEvent } from "react"

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
                        setPrintImages(prev => ([{ image: fileReader.result, name: "" }, ...prev]))
                    }
                }
            }
        }
        return () => {
            // setImages(null)
            setPrintImages([])
        }
    }, [images])

    function changeImageName(e: ChangeEvent<HTMLInputElement>, index: number) {
        setPrintImages(prev => prev.map((placeImage, i) => i === index ? { ...placeImage, name: e.target.value } : placeImage))
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImages(event.target.files)
    }

    const onClear = () => {
        setImages(null)
        setPrintImages([])
    }

    return { images, printImages, changeImageName, onChange, onClear }
}