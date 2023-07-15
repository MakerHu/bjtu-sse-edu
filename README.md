# bjtu-sse-edu

## 安装依赖&启动&打包

```sh
npm install
npm run dev
npm run build
```

## 部署到 github pages

```sh
npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages
```
