# NiHaiMaker 个人软件作品集

这是 NiHaiMaker 的个人展示网站，PurrClick 是当前收录的第一款软件。网站使用 Next.js 静态导出，并通过 GitHub Pages 发布。

## 本地运行

需要 Node.js `22.13.0` 或更高版本。

```powershell
npm install
npm run dev
```

本地访问地址默认为 `http://localhost:3000/`。

## 验证

```powershell
npm test
npm run lint
```

`npm run build` 会在 `out` 目录生成可直接部署的静态网站。

## GitHub Pages

仓库包含 `.github/workflows/deploy-pages.yml`。推送到 `main` 后，GitHub Actions 会构建并发布网站。

首次发布时，在仓库的 `Settings → Pages` 中把 `Source` 设置为 `GitHub Actions`。

网站同时兼容：

- 个人主页仓库：`NiHaiMaker.github.io`
- 普通项目仓库：构建时自动加入仓库名称作为路径前缀

PurrClick 安装包继续托管在腾讯云 COS，网站下载按钮直接指向正式版本文件。
