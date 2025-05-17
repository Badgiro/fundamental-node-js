
const path = require('path')

console.log(
  'склеить участки пути',
  path.join(__dirname, 'first', 'second', 'third')
)
const fullPath = path.resolve(__dirname, 'join', 'path', 'dirname.js')
console.log(fullPath)
console.log('Парсинг пути', path.parse(fullPath))
console.log('разделить путь', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute(fullPath))
console.log('Название файла', path.basename(fullPath))
console.log('Расширение файла', path.extname(fullPath))

const siteUrl = 'http://localhost:8080/users?id=5223'
const url = new URL(siteUrl)
console.log('URL', url)
