// import { createToast } from "~/components/common/createToast"
// import { IDeleteForm } from "~/store/delete"
// import { IFollowForm } from "~/store/follow"
// import { ILikeForm } from "~/store/like"
// import { IPostForm } from "~/store/post"
// import { IWriteForm } from "~/store/write"
// import { SERVER_URL } from "./constants"
// 
// export interface IUpdateForm {
//   postId: string;
//   title: string
//   content: string;
// }
// // 글쓰기
// export const writeApi  = async ( payload: IWriteForm) => {
//   let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/post/${payload.categoryId}`,{
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization":`${token}`
//       },
//       body: JSON.stringify({
//           "title": payload.title,
//           "content": payload.content,
//       }),
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   createToast('글쓰기')
//   return { type:'SUCCESS', data: data.data }
// }
// 
// 
// // 포스트 읽기
// export const readPostApi  = async (payload : IPostForm) => {
//   const res : any = await fetch(`${SERVER_URL}/api/post/${payload.postId}`)
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 글쓰기
// export const updateApi  = async ( payload: IUpdateForm) => {
//   let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/post/${payload.postId}`,{
//       method: "PATCH",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization":`${token}`
//       },
//       body: JSON.stringify({
//           "title": payload.title,
//           "content": payload.content,
//       }),
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   createToast('업데이트')
//   return { type:'SUCCESS', data: data.data }
// }
// // 삭제
// export const deleteApi  = async ( payload : IDeleteForm ) => {
//   let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res = await fetch(`${SERVER_URL}/api/post/${payload.postId}`, {
//       method: "DELETE",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   createToast('글 삭제')
//   return { type:'SUCCESS', data: data }
// }
// 
// 
// // 좋아요 읽기
// export const readLikeApi  = async (payload : ILikeForm) => {
//     let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/like/post/${payload.postId}/${payload.userId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 좋아요 토글
// export const readToggleLikeApi  = async (payload : ILikeForm) => {
//     let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/like/post/${payload.postId}/${payload.userId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 좋아요 읽기
// export const readFollowApi = async (payload : IFollowForm) => {
//     let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/follow/${payload.followerId}/${payload.followingId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   console.log(data.data)
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 팔로우 토글
// export const readToggleFollowApi  = async (payload : IFollowForm) => {
//     let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//     token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/follow/${payload.followerId}/${payload.followingId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":`${token}`
//       },
//   })
//   if (res.status != 200){
//       const error = await res.json()
//       return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
