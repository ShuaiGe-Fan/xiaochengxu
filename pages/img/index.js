// index.js

Component({
  data: {
    motto: 'Hello World',
  },
  methods: {
    navigateToNewPage(e){
      console.log('点我了',e)
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  },
})
