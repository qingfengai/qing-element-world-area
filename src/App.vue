<template>
  <div class="area">
    <div>
      <span class="imp">选择国家地区</span>
      <el-cascader
        size="large"
        :options="worldData"
        v-model="selectedOptions1"
        @change="handleChange">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions1}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions1[0]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions1[0]])}}</div>
    </div>
  </div>
</template>

<script>
import {
  worldData,
  CodeToText,
  TextToCode
} from "../dist/app.js";

export default {
  data() {
    return {
      CodeToText,
      TextToCode,
      worldData,
      selectedOptions1: [],
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
    convertTextToCode(provinceText, cityText, regionText) {
      let code = "";
      if (provinceText && this.TextToCode[provinceText]) {
        const province = this.TextToCode[provinceText];
        code += province.code;
      }
      return code;
    }
  },

  mounted() {
   
  }
};
</script>

<style>
.long {
  width: 250px;
}
.area {
  padding-top: 50px;
  margin: 0 auto;
  width: 800px;
}
.three {
  margin-top: 100px;
}
.bind {
  margin-top: 20px;
  line-height: 40px;
  text-indent: 15px;
}
.imp {
  color: #409eff;
}
</style>
