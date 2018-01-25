# learn-Ionic

学习Ionic的打怪过程

## 学习分类

- form
  - input
  - radio
  - checkbox
  - select
  - datetime
  - range
  - toggle

- media
  - badges
  - cards
  - fabs
  - grid
  - list
  - menu
  - navigation
  - slide
  - segment
  - tab

- action

  - action-sheets
  - alert
  - button
  - gesture
  - loading
  - modal
  - popover
  - searchbar
  - toast
  - toolbar

## 运行前置

当然需要你电脑中已经安装`Git`和`Node.js`，如果没有安装过，请自行查找教程。

> 安装全局依赖包

```bash
#Window 和 Linux 上打开命令行工具执行以下命令：
$ npm install -g cordova ionic

#Mac 系统上使用以下命令：
sudo npm install -g cordova ionic
```

提示: IOS需要在Mac Os X. 和Xcode环境下面安装使用。

> 如果你已经安装了以上环境，可以执行以下命令来更新版本

```bash
npm update -g cordova ionic
#或
sudo npm update -g cordova ionic
```

> 将本项目克隆到本地

```bash
#克隆项目
git clone https://github.com/mowatermelon/learn-Ionic.git

#进入项目文件夹
cd learn-Ionic
```

## 如何运行

```bash

#启动服务
npm run ionic:serve

#清除缓存文件
npm run clean

#构建网页项目
npm run build

#打包app项目
npm run ionic:build

#测试文件中代码是否符合规范
npm run lint
```
