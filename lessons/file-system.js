const { errorMonitor } = require('events')
const fs = require('fs')
const path = require('path')

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
const changeAndAddText = async (path, data) => {
  return new Promise((res, rej) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        rej(errorMonitor)
      }
      res()
    })
  )
}

changeAndAddText(path.join(__dirname, 'test.txt'), '123')
  .then(() => changeAndAddText(path.join(__dirname, 'test.txt'), '456'))
  .then(() => changeAndAddText(path.join(__dirname, 'test.txt'), '789'))
  .catch((err) => {
    console.error(err)
  })
