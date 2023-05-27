import { Fragment } from "react";
import { Box, Modal, ModalContent, ModalOverlay, ModalCloseButton, Image, Heading } from "@chakra-ui/react";
import { SplideSlide } from "@splidejs/react-splide";

import { SimpleSplide } from "../..";
import { IFilesData } from "./editor-galleries";

export default function ImageViewer({ imagesViewers, isOpen, onClose, startImageIndex }: { imagesViewers: IFilesData[], isOpen: boolean, onClose: () => void, startImageIndex: number }) {
    return (
        <Fragment>
            <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
                <ModalOverlay />

                <ModalContent backgroundColor={"transparent"}>
                    <ModalCloseButton zIndex={88888} />

                    <Box minH={"100vh"} display={"flex"} alignItems={"center"}>
                        <SimpleSplide options={{ type: 'loop', focus: "center", start: startImageIndex, rewind: true, perPage: 1 }}>
                            {imagesViewers.map(({ name, image }, index) => (
                                <SplideSlide key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <Heading textAlign={"center"}>{name}</Heading>
                                        <Image w="100%" maxH={500} src={image} objectFit="contain" alt={name || "1"} />
                                    </div>
                                </SplideSlide>
                            ))}
                        </SimpleSplide>
                    </Box>
                </ModalContent>
            </Modal>
        </Fragment >
    )
}
