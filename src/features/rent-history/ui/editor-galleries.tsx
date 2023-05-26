import { useRef, Fragment } from "react";
import { Box, Flex, Center, Input, Image, Button } from "@chakra-ui/react";
import { AiFillFileImage } from "react-icons/ai"
import { SplideSlide } from "@splidejs/react-splide";

import { SimpleSplide } from "../..";
import { useFile } from "../model/use-file";
import { useViewerAtom } from "../../../entities/viewer/model";
import useFetchFilesQuery from "../model/use-fetch-files-query";
import useUploadFilesToGalleriesMutate from "../model/use-upload-files-to-galleries-mutate";
import { fetchFromGallariesByUserId } from "../../../shared/api";

export interface IFilesData {
    id: string
    userId: number
    image: string
}

export default function EditorGalleries({ Id }: any) {
    const refFile = useRef<any>(null)
    const { authData: { data } } = useViewerAtom()
    const { images, printImages, onChange, onClear } = useFile()
    const { data: files, isLoading: isFetchFIlesLoading } = useFetchFilesQuery({
        queryKey: ["fetchFiles", data?.id, Id],
        queryFn: async () => await fetchFromGallariesByUserId(data?.id ? data.id : "1", Id)
    })
    const { mutate, isLoading } = useUploadFilesToGalleriesMutate({ onSuccess: () => onClear() })

    return (
        <Fragment>
            <Box position={"relative"} w="100%" mt={2} p={10} outline="1px solid gray" borderRadius={8} cursor={"pointer"} _hover={{ backgroundColor: "gray" }} transition="background 0.34s" onClick={() => refFile.current.click()}>
                <Center><AiFillFileImage size={40} /></Center>
            </Box>

            {printImages && (
                <Flex gap={5} overflow="auto" padding={4.3}>
                    {printImages.map((image, index) => (
                        <Image w={100} h={100} objectFit="cover" key={index} src={image} alt={image} />
                    ))}
                </Flex>
            )}
            {images && printImages.length !== 0 && <Flex justifyContent={"right"}><Button type="button" mt={2} colorScheme="whatsapp" isLoading={isLoading} disabled={isLoading} onClick={() => mutate({ userId: data?.id ? data.id : 1, rentId: Id, files: images })}>Save {printImages.length}</Button></Flex>}

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
                    {files.map(({ id, image, userId }) => (
                        <SplideSlide key={id}>
                            <Image w="100%" minH={300} maxH={500} objectFit={"contain"} src={image} alt={userId.toString()} />
                        </SplideSlide>
                    ))}
                </SimpleSplide>}
        </Fragment>
    )
}
