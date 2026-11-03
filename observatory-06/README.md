# OBSERVATORY 06

一个电影氛围、极简主义取向的个人网站初版。

## 本地运行

直接双击 `index.html` 即可预览，无需安装 Python 或 Node.js。

如果浏览器没有自动打开，请右键 `index.html`，选择“打开方式” → Microsoft Edge。

如果之后希望使用静态服务器，也可以在 `observatory-06` 目录启动：

```text
python -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 添加内容

- 修改 `src/data.js` 中的 `portals` 与 `notes` 数组即可更新首页入口和精选内容。
- 新文章、图片说明和长期记录可放入 `content/`。
- 当前图片卡片使用 CSS 占位视觉，替换为真实图片时，可在 `index.html` 或数据结构中加入图片路径。

## 设计方向

暗色、留白、低对比度灰阶、细线结构和克制动效，强调安静的摄影感与个人档案感。
