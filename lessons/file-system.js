const fs = require('fs')
const path = require('path')


// const { text } = require('stream/consumers')

// console.log('START')
// fs.mkdir(path.join(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log('Ошибка', err)
//     return
//   }
//   console.log('Папка создана')
// })
// console.log('END')

// fs.rmdir(path.join(__dirname, 'dir'), (err)=> {
//     if (err) {
//         throw err
//     }
// })
// fs.writeFile(
//   path.join(__dirname, 'test.txt'),
//   'это новый добавленный текст',
//   (err) => {
//     if (err) {
//       throw err
//     }
//     console.log('текст записан')
//   }
// )

// fs.appendFile(
//   path.join(__dirname, 'test.txt'),
//   '               этот текст добален в конец',
//   (err) => {
//     if (err) {
//       throw err
//     }
//     console.log('текст добавлен в конец')
//   }
// )

// const writeFileAsync = async (path, data) => {
//   return new Promise((res, rej) =>
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return rej(err.message)
//       }
//       res()
//     })
//   )
// }

// const appendFileAsync = async (path, data) => {
//   return new Promise((res, rej) =>
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return rej(err.message)
//       }
//       res()
//     })
//   )
// }
// const readFileAsync = async (path) => {
//   return new Promise((res, rej) =>
//     fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
//       if (err) {
//         return rej(err.message)
//       }
//       res(data)
//     })
//   )
// }
// const removeFileAsync = async (path) => {
//   return new Promise((res, rej) =>
//     fs.rm(path, (err) => {
//       if (err) {
//         rej(err.message)
//       }
//       res()
//     })
//   )
// }

// // writeFileAsync(path.resolve(__dirname, 'text.txt'), '')
// //   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
// //   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '456'))
// //   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '789'))
// //   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err))
// // removeFileAsync(path.resolve(__dirname, 'text.txt'))

// const text = process.env.TEXT || ''
// console.log(text)
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then((data) =>
//     writeFileAsync(
//       path.resolve(__dirname, 'count.txt'),
//       String(data.split(' ').length)
//     )
//   )
//   .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then(() => console.log('text.txt удален. кол-во слов в count.txt'))
//   .catch((err) => console.log(err))
