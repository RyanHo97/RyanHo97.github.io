# Rust语言



## 一、安装

https://www.rust-lang.org/zh-CN/learn/get-started

下载 RUSTUP-INIT.EXE（64位）工具

默认安装在C盘

自定义安装路径的方式：

1. 在需要安装的目录下分别建两个文件夹，名为.cargo与.rustup

2. 配置环境变量:**右键此电脑->属性->高级系统设置->环境变量**

   编辑"**Path**"变量，新增"**%RUSTUP_HOME%**"与"**%CARGO_HOME%**"

3. 开始安装Rust

4. 要检查您是否安装了 **Rust** 和 **Cargo**，可以在终端中运行：

```bash
cargo --version
```

 

卸载方式：

```bash
rustup self uninstall
```



### 二、Cargo：Rust 的构建工具和包管理器

您在安装 Rustup 时，也会安装 Rust 构建工具和包管理器的最新稳定版，即 Cargo。Cargo 可以做很多事情：

- `cargo build` 可以构建项目
- `cargo run` 可以运行项目
- `cargo test` 可以测试项目
- `cargo doc` 可以为项目构建文档
- `cargo publish` 可以将库发布到 [crates.io](https://crates.io/)。

要检查您是否安装了 Rust 和 Cargo，可以在终端中运行：

```
cargo --version
```


## 三、Hello, World!

既然安装好了 Rust，是时候来编写第一个 Rust 程序了。当学习一门新语言的时候，使用该语言在屏幕上打印 `Hello, world!` 是一项传统，我们将沿用这一传统！

首先创建一个存放 Rust 代码的目录。Rust 并不关心代码的存放位置，不过对于本书的练习和项目来说，我们建议你在 home 目录中创建 *projects* 目录，并将你的所有项目存放在这里。

打开终端并输入如下命令创建 *projects* 目录，并在 *projects* 目录中为 “Hello, world!” 项目创建一个目录。

对于 Linux、macOS 和 Windows PowerShell，输入：

```console
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
```

对于 Windows CMD，输入：

```bash
> mkdir "%USERPROFILE%\projects"
> cd /d "%USERPROFILE%\projects"
> mkdir hello_world
> cd hello_world
```

