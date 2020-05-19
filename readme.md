# fontawesome-svg-symbols
fontawesome的symbol版本。

# 使用
引入`fontawesome-svg-symbols.js`文件后即可使用，需要注意的是命名的区别。

```html
// 原来的用法
<i class="far fa-file"></i>

// symbol的用法
<svg class="svgfont">
    <use xlink:href="#far-file"></use>
</svg>
```
例子见项目中的`example.html`


# build
当前使用的`fontawesome`版本为`5.11.2`，若需打包其他的版本，可下载后修改`script.js`文件。
```base
// build
node script
```
