# learn-Ionic

学习`Ionic5`的打怪过程

## 学习分类

- form
  - [x]  input
  - [x]  radio
  - [x] checkbox
  - [x] select
  - [x] datetime
  - [x] range
  - [x] toggle

- media
  - [x] badges
  - [x] cards
  - [x] fabs
  - [x] grid
  - [x] icon
  - [x] list
  - [x] menu
  - [x] navigation
  - [x] slide
  - [x] segment
  - [x] tab

- action

  - [ ] menu
  - [x] alert
  - [ ] popover
  - [x] toast
  - [x] loading
  - [x] reorder
  - [x] back-button
  - [x] toolbar
  - [x] searchbar
  - [x] button
  - [x] modal
  - [ ] action-sheets
  - [ ] gesture

## 运行前置

当然需要你电脑中已经安装`Git`和`Node.js`，如果没有安装过，请自行查找教程。

> 安装全局依赖包

```bash
#Window 和 Linux 上打开命令行工具执行以下命令：
$ npm i -g ionic

#Mac 系统上使用以下命令：
sudo npm i -g ionic
```

提示: `IOS`需要在`Mac Os X.` 和`Xcode`环境下面安装使用。

> 如果你已经安装了以上环境，可以执行以下命令来更新版本

```bash
npm update -g ionic
#或
sudo npm update -g ionic
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

# 安装项目依赖
yarn

# 启动服务 http://localhost:4200
yarn start

# 测试项目案例
yarn test
# or yarn e2e

# 构建网页项目
yarn build

# 测试文件中代码是否符合规范
yarn lint
```
