Node.js 是一个开放源代码、跨平台的、用于服务器端和网络应用的运行环境。
JXcore 是一个支持多线程的 Node.js 发行版本，基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。
但我们这篇文章主要是要教大家介绍 JXcore 的打包功能。

JXcore 安装
下载 JXcore 安装包，并解压，在解压的的目录下提供了 jx 二进制文件命令，接下来我们主要使用这个命令。
步骤1、下载
下载 JXcore 安装包 https://github.com/jxcore/jxcore-release，你需要根据你自己的系统环境来下载安装包。
1、Window 平台下载：Download(Windows x64 (V8))。
2、Linux/OSX 安装命令：
$ curl http://jxcore.com/xil.sh | bash
如果权限不足，可以使用以下命令：
curl http://jxcore.com/xil.sh | sudo bash
以上步骤如果操作正确，使用以下命令，会输出版本号信息：
$ jx --version
v0.10.32


=================================================================================================
windows平台具体操作步骤：

1. 下载地址：https://github.com/jxcore/jxcore-release，找到Release Binaries-->windows-->Windows x64 (V8),单击download下载。（具体版本根据平台下载）

2. 解压包，包含（jx.exe、jx.exe.ver、JXCORE_LICENSE.txt、releaseLogs.txt）

3. 将jx.exe二进制文件命令，移动到需要打包的项目下。
    接下来我们使用 jx 命令打包以上项目，并指定 index.js 为 Node.js 项目的主文件

4. 在cmd命令行中，到该目录下执行： jx package index.js index

    以上命令执行成功，会生成以下两个文件：
        index.jxp 这是一个中间件文件，包含了需要编译的完整项目信息。
        index.jx 这是一个完整包信息的二进制文件，可运行在客户端上。
