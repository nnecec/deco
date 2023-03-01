// import React, { useEffect, useState } from 'react'
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

// import { Editor } from '~/components/editor'

// import { getMetadata } from '../utils/image'

// const Home: NextPage = () => {
//   const [image, setImage] = useState()

//   useEffect(() => {
//     if (data?.jpeg) {
//       const b64toBlob = (
//         b64Data: string,
//         contentType = 'image/jpeg',
//         sliceSize = 512,
//       ) => {
//         const byteCharacters = atob(b64Data)
//         const byteArrays = []

//         for (
//           let offset = 0;
//           offset < byteCharacters.length;
//           offset += sliceSize
//         ) {
//           const slice = byteCharacters.slice(offset, offset + sliceSize)

//           const byteNumbers = Array.from({length: slice.length})
//           for (let i = 0; i < slice.length; i++) {
//             byteNumbers[i] = slice.charCodeAt(i)
//           }

//           const byteArray = new Uint8Array(byteNumbers)
//           byteArrays.push(byteArray)
//         }

//         const blob = new Blob(byteArrays, { type: contentType })
//         return blob
//       }
//       const blob = b64toBlob(data.jpeg)
//       const blobUrl = URL.createObjectURL(blob)
//       setImage(blobUrl)
//     }
//   }, [data?.jpeg])

//   const handleSubmit = e => {
//     submit(e.currentTarget)
//   }

//   return (
//     <div>
//       <Editor className="h-screen w-screen">
//         <Editor.Toolbar />
//         <Editor.Picture></Editor.Picture>
//       </Editor>
//     </div>
//   )
// }

// export default Home

// export async function getServerSideProps (context) {}