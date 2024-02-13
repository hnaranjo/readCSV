/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Hstack_084fdefad1c2cfb5464ab5abf944b365, Hstack_15b4938a872ba41ba1bc536c99af5581, Hstack_90baa9e4bbbc04d1d3c01a3c36c43904, Hstack_e150eaf20d1e2912c1c2d1d550d8ccd5 } from "/utils/stateful_components"
import { Box, Center, Code, Heading, HStack, Image as ChakraImage, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { Event, refs, set_val } from "/utils/state"
import ReactDropzone from "react-dropzone"
import { EventLoopContext, UploadFilesContext } from "/utils/context"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Reactdropzone_f2b044f58e907cd34ab6b8d77776347d () {
  const ref_default = useRef(null); refs['ref_default'] = ref_default;
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_drop_65dafcf47af23567d698a117f4553801 = useCallback(e => setFilesById(filesById => ({...filesById, default: e})), [addEvents, Event, filesById, setFilesById])

  return (
    <ReactDropzone id={`default`} multiple={true} onDrop={on_drop_65dafcf47af23567d698a117f4553801} ref={ref_default}>
  {({ getRootProps, getInputProps }) => (
    <Box sx={{"border": "1px dotted rgb(107,99,246)", "padding": "5em"}} {...getRootProps()}>
    <Input type={`file`} {...getInputProps()}/>
    <Text>
    {`Ubique su archivo aquí`}
  </Text>
  </Box>
  )}
</ReactDropzone>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <Box sx={{"display": ["none", "none", "block"], "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid #F4F3F6"}}>
  <VStack sx={{"height": "100dvh"}}>
  <HStack sx={{"width": "100%", "borderBottom": "1px solid #F4F3F6", "padding": "1em"}}>
  <ChakraImage src={`/icon.svg`} sx={{"height": "2em"}}/>
  <Spacer/>
  <Link as={NextLink} href={`https://github.com/reflex-dev/reflex`}>
  <Center sx={{"boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "bg": "transparent", "borderRadius": "0.375rem", "_hover": {"bg": "#F5EFFE"}}}>
  <ChakraImage src={`/cohete.svg`} sx={{"height": "3em", "padding": "0.5em"}}/>
</Center>
</Link>
</HStack>
  <VStack alignItems={`flex-start`} sx={{"width": "100%", "overflowY": "auto", "padding": "1em"}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  <Hstack_90baa9e4bbbc04d1d3c01a3c36c43904/>
</Link>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  <Hstack_e150eaf20d1e2912c1c2d1d550d8ccd5/>
</Link>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  <Hstack_084fdefad1c2cfb5464ab5abf944b365/>
</Link>
  <Link as={NextLink} href={`/upload`} sx={{"width": "100%"}}>
  <Hstack_15b4938a872ba41ba1bc536c99af5581/>
</Link>
</VStack>
  <Spacer/>
  <HStack sx={{"width": "100%", "borderTop": "1px solid #F4F3F6", "padding": "1em"}}>
  <Spacer/>
  <Link as={NextLink} href={`https://reflex.dev/docs/getting-started/introduction/`}>
  <Text>
  {`Docs`}
</Text>
</Link>
  <Link as={NextLink} href={`https://reflex.dev/blog/`}>
  <Text>
  {`Blog`}
</Text>
</Link>
</HStack>
</VStack>
</Box>
  <Box sx={{"paddingTop": "5em", "paddingX": ["auto", "2em"], "flex": "1"}}>
  <Box sx={{"alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <VStack>
  <Heading sx={{"fontSize": "3em"}}>
  {`Subir archivos`}
</Heading>
  <Text>
  {`Bienvenido a la aplicación!`}
</Text>
  <Text>
  {`You can edit this page in `}
  <Code>
  {`{your_app}/pages/upload.py`}
</Code>
</Text>
  <Reactdropzone_f2b044f58e907cd34ab6b8d77776347d/>
</VStack>
</Box>
</Box>
  <Box sx={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <Menu>
  <MenuButton sx={{"width": "3em", "height": "3em", "backgroundColor": "white", "border": "1px solid #F4F3F6", "borderRadius": "0.375rem"}}>
  <HamburgerIcon sx={{"size": "4em", "color": "black"}}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  {`Incio`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  {`Dashboard`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  {`Settings`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/upload`} sx={{"width": "100%"}}>
  {`Upload`}
</Link>
</MenuItem>
  <MenuDivider/>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`https://github.com/reflex-dev`} sx={{"width": "100%"}}>
  {`About`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`mailto:founders@=reflex.dev`} sx={{"width": "100%"}}>
  {`Contact`}
</Link>
</MenuItem>
</MenuList>
</Menu>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Upload`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
