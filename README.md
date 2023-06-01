# Element UI 世界国家和地区数据


## 安装

  `npm install qing-element-world-area -S`

## 使用

```js
import { worldData, CodeToText, TextToCode } from 'qing-element-world-area'
```
服务端用法：
```js
const { worldData, CodeToText, TextToCode } = require('qing-element-world-area/dist/app.commonjs')
```

  1. `worldData`是世界国家和地区数据（包含联合国成员国和观察员国，中国含港澳台）
  6. `CodeToText`是个大对象，属性是英文，属性值是汉字
  7. `TextToCode`是个大对象，属性是汉字，属性值是英文


  * 世界国家和地区:
    ```js
    <template>
      <div id="app">
        <el-select
            v-model="currentForm.map_name"
            placeholder="请选择"
            @change="handleChange"
            filterable
            clearable
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              {{ item.label }}
            </el-option>
        </el-select>
      </div>
    </template>

    <script>
      import { worldData } from 'qing-element-world-area'
      export default {
        data () {
          return {
            options: worldData,
            selectedOptions: []
          }
        },

        methods: {
          handleChange (value) {
            console.log(value)
          }
        }
      }
    </script>
    ```
## 开发过程

`npm run dev` 是开发

`npm run build` + `npm run build-commonjs` + `npm run docs` 是准备发布
