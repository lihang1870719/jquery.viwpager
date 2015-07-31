# jquery.viwpager

### 轮播组件
  轮播组件，给一组图片实现轮播效果
### 使用方法:
```
    var originSrc = $('.tabs-content ul li');
    var prevClick = $('.prev');
    var nextClick = $('.next');
    var thumbnailClick = $('.thumbnail li a');
    var options = {
        originSrc: originSrc,
        prevClick: prevClick,
        nextClick: nextClick,
        thumbnailClick: thumbnailClick
    };
    $('.tabs').viwpager(options);
```
### 配置参数

|配置参数|参数类型|作用说明|
|--------|--------|--------|
|preClick|String  |点击向前的类名 |
|nextClick|String|点击向后时的类名|
|thumbnailClick|String|点击指定图片时的元素|
|originSrc|String|图片元素|
