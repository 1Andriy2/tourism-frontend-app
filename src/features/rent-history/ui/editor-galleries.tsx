import { useRef, useState, Fragment } from "react";
import { Box, Flex, Center, Input, Image, Button, useDisclosure } from "@chakra-ui/react";
import { AiFillFileImage } from "react-icons/ai"
import { SplideSlide } from "@splidejs/react-splide";

import { SimpleSplide } from "../..";
import ImageViewer from "./image-viewer";
import { useFile } from "../model/use-file";
import { useViewerAtom } from "../../../entities/viewer/model";
import useFetchFilesQuery from "../model/use-fetch-files-query";
import { fetchFromGallariesByUserId } from "../../../shared/api";
import useUploadFilesToGalleriesMutate from "../model/use-upload-files-to-galleries-mutate";

export interface IFilesData {
    id: string
    name: string
    userId: number
    image: string
}

export default function EditorGalleries({ Id }: any) {
    const refFile = useRef<any>(null)
    const [activeIndexImageViewer, setActiveIndexImageViewer] = useState(-1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { authData: { data } } = useViewerAtom()
    const { images, printImages, changeImageName, onChange, onClear } = useFile()
    const { data: files, isLoading: isFetchFIlesLoading } = useFetchFilesQuery({
        queryKey: ["fetchFiles", data?.id, Id],
        queryFn: async () => await fetchFromGallariesByUserId(data?.id ? data.id : "1", Id)
    })
    const { mutate, isLoading } = useUploadFilesToGalleriesMutate({ onSuccess: () => onClear() })

    function onSelectViewerImage(imageIndex: number) {
        onOpen()
        setActiveIndexImageViewer(imageIndex)
    }

    return (
        <Fragment>
            {files !== undefined && <ImageViewer imagesViewers={files} isOpen={isOpen} onClose={onClose} startImageIndex={activeIndexImageViewer} />}

            <Box position={"relative"} w="100%" mt={2} p={10} outline="1px solid gray" borderRadius={8} cursor={"pointer"} _hover={{ backgroundColor: "gray" }} transition="background 0.34s" onClick={() => refFile.current.click()}>
                <Center><AiFillFileImage size={40} /></Center>
            </Box>

            {printImages && (
                <Flex gap={5} overflow="auto" padding={4.3}>
                    {printImages.map(({ image, name }, index) => (
                        <div key={index}>
                            <Image w={100} h={100} objectFit="cover" src={image} alt={image} />
                            <Input
                                name={`input${index}`}
                                value={name}
                                onChange={(e) => changeImageName(e, index)}
                                placeholder="Your name"
                            />
                        </div>
                    ))}
                </Flex>
            )}
            {images && printImages.length !== 0 && <Flex justifyContent={"right"}><Button type="button" mt={2} colorScheme="whatsapp" isLoading={isLoading} disabled={isLoading} onClick={() => mutate({ userId: data?.id ? data.id : 1, rentId: Id, files: images, names: printImages.map(({ name }) => name) })}>Save {printImages.length}</Button></Flex>}

            <Input
                multiple
                type="file"
                ref={refFile}
                display="none"
                onChange={onChange}
            />

            {!isFetchFIlesLoading && files && files.length !== 0 &&
                <SimpleSplide
                    options={{
                        autoplay: true,
                        speed: 1000,
                        perPage: 1,
                        focus: "center",
                    }}
                >
                    {files.map(({ id, name, image, userId }, i) => (
                        <SplideSlide key={id} onClick={() => onSelectViewerImage(i)}>
                            {name}
                            <Image w="100%" minH={300} maxH={500} objectFit={"contain"} src={image} alt={userId.toString()} />
                        </SplideSlide>
                    ))}
                </SimpleSplide>}
        </Fragment>
    )
}
