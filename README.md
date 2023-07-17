# bjtu-sse-edu

## 安装依赖&启动&打包

```sh
npm install
npm run dev
npm run build
```

## 部署到 github pages

### 第一次部署

```sh
npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages
```

### 后期部署

在Bash窗口中运行:

```sh
bash deploy.sh
```

如果有问题，可以尝试删除dist后重新执行命令