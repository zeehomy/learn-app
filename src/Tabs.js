import React, { Component } from 'react';
import './App.scss';

// 例子效果没有问题， 缩进好像用了tab，可以像App.js一样统一成空格
class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
      // 尝试将当前选中态使用单纯的state来表示是不是会更简单？
      // 比如 selectIndex, 默认为0
			tabs: [
				{ id: 1, name: 'Item A'},
				{ id: 2, name: 'Item B'},
				{ id: 3, name: 'Item C'}
			],
			selectIndex: 0
		};
	}

	render() {
		const tabs = this.state.tabs;
		const selectIndex = this.state.selectIndex;
		return (
			<div className="tabs-panel">
				<div className="buttons">
					{
						tabs.map((item, index) => (
							<div key={item.id}
								className={index === selectIndex ? 'active' : null}
								onClick={() => this.clickTab(index)}>
								{item.name}
							</div>
						))
					}
				</div>
				<span>
					{
						tabs.find((item, index) => index === selectIndex).name
					}
				</span>
			</div>
		)
	}

	clickTab(index) {
		// let tabs = this.state.tabs;
		// tabs.map((item) => item.isActive = false);
		// tabs[index].isActive = true;
    /*
    上面语句的执行结果没有问题
    一般来说，我们用map方法是使用其返回值的，比如

    tabs = tabs.map(item => {
      return { ...item, isActive: false };
    });

    如果仅仅是循环，使用forEach语义性会更好
    tabs.forEach(item => item.isActive = false);

    对于上面的逻辑，我习惯上会这么写
    const tabs = tabs.map((item, i) => {
      return { ...item, isActive: i === index }
    });
    两个点 1: 用const, 2. 方便的话，不改变原数据，特别作为函数参数的值

    针对于Tabs这个场景，用独立的一个字段代表选中索引会更加方便
    不需要在每个数据项中 记录是否选中， 除非多选场景，否则多个 isActive 是一种“重复”
    而重复在软件开发中需要避免。
		*/
		this.setState({
			selectIndex: index
		});
	}
}

export default Tabs;
