
vue create fcvlfutsal_u9g_u11g_2024
>> Chose Vue2

cd fcvlfutsal_u9g_u11g_2024
vue add vuetify
>> chose vuetify 2
vue add router
>> ? Use history mode for router > yes

yarn upgrade vuetify@2.6.13
yarn add vuex@3.6.2

yarn add axios

yarn add @mdi/js

yarn serve

From src : 
	=> copy asset + components + plugins + sass + views + App.vue + Drawer.vue + *.js
	=> remove router folder
	
=> package.json
==> eslintConfig
===> 
	"rules": {
      "vue/multi-word-component-names": "off"
    }

=> vue.config.js
==> module.exports
===>
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fcvlfutsal_u9g_u11g_2024/dist/'
    : '/',