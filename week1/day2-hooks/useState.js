/**
 * 简化版 useState 实现
 */

let currentComponent = null;
const states = new Map();

function useState(initialState) {
  const component = currentComponent;
  if (!states.has(component)) {
    states.set(component, []);
  }

  const componentStates = states.get(component);
  const index = componentStates.length;

  if (componentStates[index] === undefined) {
    componentStates[index] = typeof initialState === 'function' 
      ? initialState() 
      : initialState;
  }

  const setState = (newState) => {
    const value = typeof newState === 'function' 
      ? newState(componentStates[index]) 
      : newState;
    
    if (value !== componentStates[index]) {
      componentStates[index] = value;
      // 触发重新渲染
      scheduleUpdate();
    }
  };

  return [componentStates[index], setState];
}

// 模拟组件渲染
function Component() {
  currentComponent = Component;
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');

  return {
    count,
    setCount,
    text,
    setText
  };
}

// 测试用例
const component = Component();
console.log(component.count); // 0
console.log(component.text); // 'hello'

component.setCount(1);
component.setText('world');
