
// // 로그인
// export const loginApi = async ( payload : ILoginForm) => {
//   const res = await fetch(`${SERVER_URL}/api/user/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   })
//   if (res.status != 200){
//     const error = await res.json()
//     return { type:'FAILURE', data: error.error }
//   }
//   await localStorage.setItem('token', JSON.stringify(res.headers.get('token')))
//   const data = await res.json()
//   createToast('로그인')
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 회원가입
// export const registerApi = async (payload: IResiterForm ) => {
//   const res = await fetch(`${SERVER_URL}/api/user/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   })
//   if (res.status != 200){
//     const error = await res.json()
//     return { type:'FAILURE', data: error.error }
//   }
//   await localStorage.setItem('token', JSON.stringify(res.headers.get('token')))
//   const data = await res.json()
//   createToast('회원가입')
//   return { type:'SUCCESS', data: data.data }
// }
// 
// // 체크
// export const checkApi  = async () => {
//   let token = ''
//   const storage = await localStorage.getItem('token')
//   if (storage){
//    token = await JSON.parse(storage)
//   }
//   const res : any = await fetch(`${SERVER_URL}/api/user/check`,{
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization":`${token}`
//     },
//   })
//   if (res.status != 200){
//     const error = await res.json()
//     return { type:'FAILURE', data: error.error }
//   }
//   const data = await res.json()
//   return { type:'SUCCESS', data: data.data }
// }
