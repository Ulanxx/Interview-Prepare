# 第一周学习计划：React 深度强化 + JavaScript 底层

## 周一：React Fiber 架构深度解析

### 上午（2小时）
- [ ] React Fiber 架构概览
  - 学习资料：[React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
  - 重点：理解 Fiber 出现的背景和解决的问题
  - 实践：画出 Fiber 树结构图

### 下午（2小时）
- [ ] Fiber 调度机制详解
  - 学习 requestIdleCallback 原理
  - 分析 React 时间分片实现
  - 动手实现简单的调度器

### 练习任务
1. 实现一个基于 requestIdleCallback 的任务调度器
2. 写一篇文章总结 Fiber 架构的核心思想

## 周二：React Hooks 源码剖析

### 上午（2小时）
- [ ] useState 源码分析
  - 理解 useState 实现原理
  - 分析 useState 的闭包陷阱
  - 手写简化版 useState

### 下午（2小时）
- [ ] useEffect 源码分析
  - 对比 useEffect 和 useLayoutEffect
  - 分析依赖数组的处理机制
  - 实现简化版 useEffect

### 练习任务
1. 手写一个支持基础功能的 useState
2. 实现自定义 Hook：useDebounce

## 周三：JavaScript 原型链专题

### 上午（2小时）
- [ ] 原型链基础巩固
  - 复习原型链继承原理
  - 分析 new 操作符的执行过程
  - 手写 instanceof 实现

### 下午（2小时）
- [ ] 继承方案实战
  - 实现各种继承方式
  - 分析优缺点
  - 结合实际项目选择最佳实践

### 练习任务
1. 手写 new、instanceof、Object.create
2. 实现一个完整的继承方案

## 周四：闭包与内存管理

### 上午（2小时）
- [ ] 闭包深入理解
  - 分析闭包形成的原理
  - 研究闭包在实际项目中的应用
  - 常见闭包陷阱分析

### 下午（2小时）
- [ ] 内存泄漏专题
  - 学习 Chrome DevTools 内存分析
  - 排查内存泄漏的方法
  - 结合小程序场景分析

### 练习任务
1. 编写一个带内存泄漏的示例，并修复它
2. 使用闭包实现数据私有化

## 周五：项目实战与复盘

### 上午（2小时）
- [ ] React 项目架构设计
  - 绘制项目架构图
  - 编写技术方案文档
  - 设计组件划分方案

### 下午（2小时）
- [ ] 性能优化实践
  - 使用 React.memo 优化组件
  - 实现数据缓存方案
  - 编写性能测试用例

### 练习任务
1. 完成项目架构文档
2. 实现一个高性能的列表组件

## 周末：实战项目开发

### 周六：React 调度器实现
- [ ] 上午：需求分析与方案设计
- [ ] 下午：核心功能实现
- [ ] 晚上：单元测试编写

### 周日：面试题特训
- [ ] 上午：React 受控组件与 Web Components 互操作
- [ ] 下午：手写 Promise 相关方法
- [ ] 晚上：整理本周学习总结

## 每日代码仓库
- `/week1/day1-fiber/`: Fiber 架构相关代码
- `/week1/day2-hooks/`: Hooks 实现代码
- `/week1/day3-prototype/`: 原型链相关代码
- `/week1/day4-closure/`: 闭包示例代码
- `/week1/day5-project/`: 项目实战代码
- `/week1/weekend/`: 周末项目代码

## 注意事项
1. 每天的学习任务完成后，在对应的 README.md 中记录学习心得
2. 所有的代码实现都需要包含测试用例
3. 遇到问题及时记录，形成问题库
4. 每天结束时进行复盘，更新进度到可视化面板
