**一个H5适配方案**
#####使用方法如下#####
1. 在<head>元素内添加`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`目的在于定义viewport的宽度等于屏幕的宽度
2. 引入flexible.js，在<head>元素内添加 `<script src="fexible.js"> </script>`, 如果HTML中没有添加过`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`，**fexible.js**会在文档中动态添加
3. 编写CSS时元素的width/height、margin、padding等使用rem作为单位，属性的数值 = 设计稿上标注的数值 / 设计稿的宽度
  可以使用sass函数减少px转化为rem的工作量：
  ```
  @function rem($pixels， $design_draft_width：?) {
     @return $pixels / $design_draft_width + rem;
  }
  ```
  将`?`改为设计稿的宽度


  **[更多信息点击这里](http://www.jianshu.com/p/5be0d1d7ede7)。**
