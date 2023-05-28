import ORIGINAL_DATA from './world.json'

let REGION_DATA = {}

ORIGINAL_DATA.map((item, index) => {
  REGION_DATA[item.value] = item.label
})

// code转汉字大对象
const CodeToText = {}
// 汉字转code大对象
const TextToCode = {}
const worldObject = REGION_DATA // 省份对象
const regionData = []
let worldData = []

// 计算省
for (const prop in worldObject) {
  regionData.push({
    value: prop, // 省份code值
    label: worldObject[prop] // 省份汉字
  })
  CodeToText[prop] = worldObject[prop]
  TextToCode[worldObject[prop]] = {
    code: prop
  }
}
worldData = regionData

export { worldData, regionData, CodeToText, TextToCode }
