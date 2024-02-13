/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { HStack, Image as ChakraImage, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Hstack_90baa9e4bbbc04d1d3c01a3c36c43904 () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"bg": isTrue((state.router.page.path === "/incio") || (((state.router.page.path === "/") && "Incio") === "Home")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/incio") || (((state.router.page.path === "/") && "Incio") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <ChakraImage src={`/cohete.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Incio`}
</Text>
</HStack>
  )
}

export function Hstack_e150eaf20d1e2912c1c2d1d550d8ccd5 () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"bg": isTrue((state.router.page.path === "/dashboard") || (((state.router.page.path === "/") && "Dashboard") === "Home")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/dashboard") || (((state.router.page.path === "/") && "Dashboard") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <ChakraImage src={`/dashboard.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Dashboard`}
</Text>
</HStack>
  )
}

export function Hstack_084fdefad1c2cfb5464ab5abf944b365 () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"bg": isTrue((state.router.page.path === "/settings") || (((state.router.page.path === "/") && "Settings") === "Home")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/settings") || (((state.router.page.path === "/") && "Settings") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <ChakraImage src={`/dashboard.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Settings`}
</Text>
</HStack>
  )
}

export function Hstack_15b4938a872ba41ba1bc536c99af5581 () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"bg": isTrue((state.router.page.path === "/upload") || (((state.router.page.path === "/") && "Upload") === "Home")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/upload") || (((state.router.page.path === "/") && "Upload") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <ChakraImage src={`/dashboard.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Upload`}
</Text>
</HStack>
  )
}
