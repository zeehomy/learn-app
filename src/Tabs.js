import React, { Component } from 'react';
import './App.scss';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{ id: 1, name: 'Item A', isActive: true},
				{ id: 2, name: 'Item B', isActive: false},
				{ id: 3, name: 'Item C', isActive: false}
			]
		};
	}

	render() {
		const tabs = this.state.tabs;
		return (
			<div className="tabs-panel">
				<div className="buttons">
					{
						tabs.map((item, index) => (
							<div key={item.id} className={item.isActive && 'active'} onClick={() => this.clickTab(index)}>
								{item.name}
							</div>
						))
					}
				</div>
				<span>
					{
						tabs.find((item) => item.isActive).name
					}
				</span>
			</div>
		)
	}

	clickTab(index) {
		let tads = this.state.tabs;
		tads.map((item) => item.isActive = false);
		tads[index].isActive = true;
		this.setState({
			tabs: tads
		});
	}
}

export default Tabs;
