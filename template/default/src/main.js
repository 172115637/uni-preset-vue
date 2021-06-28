import Vue from 'vue'
import App from './App'

import 'utils/lang/date'
import 'utils/lang/number'
import 'utils/lang/object'
import 'utils/lang/date'

import '.env.js'

import 'static/css/common.scss'

Vue.config.productionTip = false
Vue.prototype.ENV=process.uniEnv
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
