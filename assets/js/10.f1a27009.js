(window.webpackJsonp=window.webpackJsonp||[]).push([[10,17,18],{307:function(t,n,e){"use strict";e.r(n);var a={name:"wIcon",props:{name:{type:String,default:"down"}}},o=e(46),s=Object(o.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"in-block"},["down"===this.name?n("i",{staticClass:"ali-icon"},[this._v("")]):n("i",{staticClass:"ali-icon"},[this._v("")])])}),[],!1,null,null,null);n.default=s.exports},309:function(t,n,e){"use strict";e.r(n);var a=e(307),o={props:{codeStr:{type:String,default:""}},components:{WIcon:a.default},data:function(){return{isShow:!1,height:{height:0}}},methods:{showCode:function(){this.isShow?this.height.height="0":this.height.height="auto",this.isShow=!this.isShow}}},s=e(46),l=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("div",{staticClass:"component-wrapper"},[e("div",{staticClass:"component-wrapper-demo"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"code-content",style:t.height},[e("div",{staticClass:"code-content-height"},[e("pre",[e("code",{staticClass:"vue"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),e("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode()}}},[e("w-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow?"down":"up"}}),t._v(" "),e("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow?"显示代码":"隐藏代码"))])],1)])])}),[],!1,null,null,null);n.default=l.exports},461:function(t,n,e){"use strict";e.r(n);var a=e(309),o=e(312),s=e.n(o).a.ITable,l={name:"SlotHeaderAlotTable",components:{VSlot:a.default,ITable:s},data:function(){return{codeStr:"\n<template>\n\t<div>\n\t\t<v-slot :codeStr=\"codeStr\">\n\t\t\t<i-table\n\t\t\t\t:tableData=\"tableData\"\n\t\t\t\t:columns=\"columns\"\n\t\t\t\t:pagination=\"pagination\"\n                @current-change=\"currentChange\"\n\t\t\t>\n                <template #name={scope}>\n                       <span>我是姓名的表头</span>\n                </template>\n                <template #age={scope}>\n                       <span>我是年龄的表头</span>\n                </template>\n            </i-table>\n\t\t</v-slot>\n\t</div>\n</template>\n<script>\nimport VSlot from './VSlot'\nimport { codeStr } from '../code/indexTable'\nimport XWTABLE from 'vue-components-itable'\nconst { ITable } = XWTABLE\nexport default {\n\tname: 'SlotHeaderTable',\n\tcomponents: {\n\t\tVSlot,\n\t\tITable,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tcodeStr: codeStr,\n\t\t\ttableData: [\n\t\t\t\t{\n\t\t\t\t\tname: '李世民',\n\t\t\t\t\tage: '24',\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: '李世民',\n\t\t\t\t\tage: '24',\n\t\t\t\t},\n\t\t\t],\n\t\t\tcolumns: [\n\t\t\t\t{\n\t\t\t\t\ttype: 'index',\n\t\t\t\t\tlabel: '序号',\n\t\t\t\t\twidth: 150,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tprop: 'name',\n\t\t\t\t\tlabel: '姓名',\n                    slot:true,\n                    slotName:\"header\",\n                    alias: \"name\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tprop: 'age',\n\t\t\t\t\tlabel: '年龄',\n                    slot:true,\n                    slotName:\"header\",\n                    alias: \"age\"\n\t\t\t\t},\n\t\t\t],\n\t\t\tpagination: {\n\t\t\t\tcurrentPage: 1,\n\t\t\t\ttotal: 10,\n\t\t\t\tpageSize: 10,\n\t\t\t},\n\t\t}\n\t},\n    methods: {\n        currentChange(){\n\n        }\n    }\n}\n<\/script>\n\n",tableData:[{name:"李世民",age:"24"},{name:"李世民",age:"24"}],columns:[{type:"index",label:"序号",width:150},{prop:"name",label:"姓名",slot:!0,slotName:"header",alias:"name"},{prop:"age",label:"年龄",slot:!0,slotName:"header",alias:"age"}],pagination:{currentPage:1,total:10,pageSize:10}}},methods:{currentChange:function(){}}},i=e(46),c=Object(i.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-slot",{attrs:{codeStr:t.codeStr}},[e("i-table",{attrs:{tableData:t.tableData,columns:t.columns,pagination:t.pagination},on:{"current-change":t.currentChange},scopedSlots:t._u([{key:"name",fn:function(n){n.scope;return[e("span",[t._v("我是姓名的表头")])]}},{key:"age",fn:function(n){n.scope;return[e("span",[t._v("我是年龄的表头")])]}}])})],1)],1)}),[],!1,null,null,null);n.default=c.exports}}]);