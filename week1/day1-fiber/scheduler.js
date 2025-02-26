/**
 * 简单的任务调度器实现
 */

class Scheduler {
  constructor() {
    this.tasks = [];
    this.isRunning = false;
  }

  // 添加任务
  addTask(task) {
    this.tasks.push(task);
    this.runTasks();
  }

  // 运行任务
  runTasks() {
    if (this.isRunning) return;
    this.isRunning = true;

    requestIdleCallback(this.workLoop.bind(this));
  }

  // 工作循环
  workLoop(deadline) {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && this.tasks.length > 0) {
      this.performTask();
    }

    this.isRunning = false;
    if (this.tasks.length > 0) {
      requestIdleCallback(this.workLoop.bind(this));
    }
  }

  // 执行任务
  performTask() {
    const task = this.tasks.shift();
    task();
  }
}

// 使用示例
const scheduler = new Scheduler();

// 添加一些测试任务
for (let i = 1; i <= 10; i++) {
  scheduler.addTask(() => {
    console.log(`执行任务 ${i}`);
    // 模拟耗时操作
    const start = Date.now();
    while (Date.now() - start < 10) {}
  });
}
