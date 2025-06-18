<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('')

const textareaMsg = ref('')

const checked = ref(false)
const checked2 = ref(false)

const radio = ref('1')

const select = ref('1')

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
]


const lazyMsg = ref('')

const trimMsg = ref('')

const numberMsg = ref()

</script>

<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <div>
        message is: {{ msg }}
        <el-input v-model="msg" placeholder="请输入内容" />
      </div>

      <div>-------------------------------------------</div>

      <div>
        <el-input type="textarea" v-model="textareaMsg" placeholder="请输入内容" />
      </div>

      <div>-------------------------------------------</div>
      
      <div>
        <el-checkbox v-model="checked" label="选项1" />
        <el-checkbox v-model="checked2" label="选项2" />
      </div>

      <div>-------------------------------------------</div>

      <div>
        <el-radio-group v-model="radio">
          <el-radio value="1" size="large">Option 1</el-radio>
          <el-radio value="2" size="large">Option 2</el-radio>
        </el-radio-group>
      </div>

      <div>-------------------------------------------</div>

      <div>
        <el-select v-model="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div>-------------------修饰符------------------</div>

      <div>
        <!-- 在 "change" 事件后同步更新而不是 "input" -->
        .lazy: {{lazyMsg}}
        <el-input v-model.lazy="lazyMsg"></el-input>
      </div>

      <div>
        .number: {{numberMsg}}
        <el-input v-model.number="numberMsg"></el-input>
      </div>

      <div>
        .trim: {{trimMsg}}
        <el-input v-model.trim="trimMsg"></el-input>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  width: 300px;
}
</style>
