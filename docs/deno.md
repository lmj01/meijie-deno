# Deno

deno的目录需要定义一个路径变量DENO_DIR，这样deno执行时，下载的依赖库放置的DENO_DIR目录下，否则就是系统默认的缓存位置。

从源码编译rust后可测试
./target/debug/deno run cli/tests/002_hello.ts

## 用法
deno run welcome.ts
// 需要网络文件要设置权限
deno run --allow-net welcome.ts 

## 测试

自带测试模块，不需要第三方工具，对工作目录中所有以_test或.test或结尾且后缀为js,ts,jsx,tsx的文件
执行就可以进行测试了
deno test 

