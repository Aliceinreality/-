// components/Select/selectSchool/selectSchool.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propSchoolArray:{
      type:Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectShow:false,//初始option不显示
    nowText:"请选择",//初始内容
    animationData:{}//右边箭头的动画
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
