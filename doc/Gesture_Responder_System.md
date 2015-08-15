# 手势响应系统
(在 ResponderEventPlugin.js 中实现)
## TouchableHightlight
对响应系统的抽象封装，更便捷的处理触控事件。
##响应生存周期
> 视图一开始是否响应触控
``` js
View.props.onStartShouldSetResponder: (evt) => true
```
> 当触控在视图上移动，是否响应触控
``` js
View.props.onMoveShouldSetResponder: (evt) => true
```

-------
> 触控响应处理
```js
View.props.onResponderGrant: (evt) => {}
```
> 其他控件正在响应触控，而且并未释放
```js
view.props.onResponderReject: (evt) => {}
```

------
> 用户正在移动手指
```js
View.props.onResponderMove: (evt) => {}
```
> 点击
```js
View.props.onResponderRelease: (evt) => {}
```
> 其他控件请求响应，是否释放响应器
```js
View.props.onResponderTerminationRequest: (evt) => true
```
> View 释放响应器
```js
View.props.onRespenderTerminate: (evt) => {}
```


----
evt 属性
- changedTouches (数组)
- identifier
- locationX
- locationY
- pageX
- PageY
- target
- timestamp
- touches

触控捕获
```js
View.props.onStartShouldSetResponderCapture: (evt) => true,
View.props.onMoveShouldSetResponderCapture: (evt) => true,
```

## PanResponder
