# ReactNative开发--携程APP(二)

## 实现首页的轮播图

**Swiper简介**

**The best Swiper component for React Native**。**Swiper**是目前应用较广泛的移动端网页触摸内容滑动js插件。

Swiper : [GitHub地址](ttps://github.com/leecade/react-native-swiper)

**1.基本属性：**

| Prop         | Default | Type   | Description                           |
| ------------ | ------- | ------ | ------------------------------------- |
| horizontal   | true    | bool   | 如果值为true时，那么滚动的内容将是横向排列的，而不是垂直于列中的。   |
| loop         | true    | bool   | 如果设置为false，那么滑动到最后一张时，再次滑动将不会展示第一张图片。 |
| index        | 0       | number | 初始进入的页面标识为0的页面。                       |
| showsButtons | false   | bool   | 如果设置为true，那么就可以使控制按钮（即：左右两侧的箭头）可见。    |
| autoplay     | false   | bool   | 设置为true，则页面可以自动跳转。                    |

**2.页码属性**

| Prop             | Default          | Type    | Description                      |
| :--------------- | ---------------- | ------- | -------------------------------- |
| showsPagination  | true             | bool    | 默认值为true，在页面下边显示圆点，以标明当前页面位于第几个。 |
| paginationStyle  | {...}            | style   | 设置页面原点的样式，自定义的样式会和默认样式进行合并。      |
| renderPagination |                  |         |                                  |
| dot              | <View>...</View> | element | 可以自定义不是当前圆点的样式                   |
| activeDot        | <View>...</View> | element | 可以自定义当前                          |

**3.自动播放的属性**

| Prop              | Default | Type     | Description       |
| ----------------- | ------- | -------- | ----------------- |
| autoplay          | true    | `bool`   | 设置为true可以使页面自动滑动。 |
| autoplayTimeout   | 2.5     | `number` | 设置每个页面自动滑动停留的时间   |
| autoplayDirection | true    | `bool`   | 圆点的方向允许默认自己控制     |

### 引入Swiper第三方库

进入**项目的根目录**执行下面的指令：

```
npm i react-native-swiper --save  
// 建议安装1.5.5版本比较稳定: npm i react-native-swiper@1.5.5 --save
```

如果报错请执行多次

![](1.png)

### 使用Swiper库，自定义Banner轮播图组件

#### 新建一个Banner组件

封装自己的一个轮播组件Banner，将在这个控件使用Swiper。

![](2.png)

#### 使用Banner组件

在HomePage中使用刚才创建的Banner组件，预先占个位置，效果后面一步一步实现。

![](3.png)

执行效果：

![](4.png)

#### 给Banner传递数据

- 准备数据

这里呢，在App文件夹里创建一个data文件夹，用来存放一些模拟数据，建立了一个homebean的Json数据文件。用于首页数据加载。

![](5.png)

- 导入数据	

在HomePage组件中引入homebean这个json数据文件

```JavaScript
//导入数据
var homebean=require('../../date/homebean.json');
```


![](6.png)

- 把数据传递给Banner组件

获取到homebean数据中的banners集合（轮播图数据），并通过在Banner组件中定义好的属性 **banners** 传递给Banner组件。

```JavaScript
{/*广告轮播图*/}
<Banner banners={homebean.banners}></Banner>
```

![](7.png)

- Banner组件接收数据

回到Banner组件中，获取属性值(**this.props.banners**)接收传递过来的轮播图数据。

```JavaScript
//接收数据
var banners=this.props.banners;
```

![](8.png)

### 引入Swiper第三方库

Banner组件获取完数据，引入Swiper，开始使用Swiper来实现轮播图

![](9.png)

### 简单的布局

在Swiper简单的创建两个View组件(每个组件对应一个轮播图)，预览看下效果，Swiper默认会生成指示器。

![](10.png)

### 添加每个轮播广告图

遍历传递过来的banners轮播图数据，
添加每个轮播广告图。

![](11.png)

获取屏幕的宽度，根据效果图每个轮播广告图的宽为手机的宽度

```JavaScript
//获取手机屏幕的宽
var {width} =Dimensions.get('window');
```

![](12.png)

### 修改轮播图指示器的颜色

通过对Swiper组件属性的了解，改变**dot** 和 **activedot**,来修改轮播图指示器选中和为选中的样式，这里dot和activedot，需要传递一个View组件，并给View设置对应的样式style即可。

![](13.png)

### 修改轮播图指示器的位置

通过设置Swiper属性**paginationStyle** 来修改轮播图的指示器位置，底层是通过绝对定位实现。

![](14.png)

### 循环滚动和自动滚动

通过设置Swiper属性**loop**和**autoplay**开启轮播图循环和自动滚动。

![](15.png)

## 实现中间的内容栏

### 简单布局的实现

![](16.png)

### 定义一个CenterBar组件

![](17.png)

### 使用CenterBar这个组件

![](18.png)



### 传数据到CenterBar组件中

####1.传递数据到CenterBar中

![](19.png)

####2.CenterBar接收数据

![](20.png)

### 实现CenterBar布局

#### 1.布局的搭建

![](21.png)

对应的样式

![](22.png)

#### 2.完善中间和右边布局

![](23.png)

抽重复的代码

![](24.png)

#### 3.完善中、右布局对应的样式

- 添加背景

![](25.png)

- 字体居中和大小

![](26.png)

- 添加边界样式

![](27.png)

#### 4.完善左边内容

- 添加左边的布局结构

![](28.png)

- 完善左边的布局

![](29.png)

- 修改布局样式

![](30.png)

- 修改图片和文字样式

![](31.png)



























