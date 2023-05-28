import ORIGINAL_DATA from './world.json'

// let REGION_DATA = {}

// ORIGINAL_DATA.map((item, index) => {
//   console.log(item)
//   REGION_DATA[item.value] = item.label
// })

// code转汉字大对象
const CodeToText = {}
// 汉字转code大对象
const TextToCode = {}
const worldObject = ORIGINAL_DATA // 对象
const regionData = []
let worldData = []

// 计算
for (const prop in worldObject) {
  regionData.push({
    value: prop, // code值
    label: worldObject[prop] // 汉字
  })
  CodeToText[prop] = worldObject[prop]
  TextToCode[worldObject[prop]] = {
    code: prop
  }
}

worldData = regionData

export { worldData, CodeToText, TextToCode }
