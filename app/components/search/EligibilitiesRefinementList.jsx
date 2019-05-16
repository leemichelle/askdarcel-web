import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch/connectors';

class EligibilitiesRefinementList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		refine: PropTypes.func.isRequired,
		currentRefinement: PropTypes.array.isRequired
	};
	constructor(props) {
		super(props);
		this.changeRefinement = this.changeRefinement.bind(this);
		this.setChecks = this.setChecks.bind(this);
		this.eligibilitiesMapping = {
			"Seniors (55+ years old)": ["Seniors (55+ years old)"],
			"Veterans": ["Veterans"],
			"Families": ["Families"],
			"Transitional Aged Youth": ["Transitional Aged Youth (18-25)"],
			"Reentry": ["Reentry"],
			"Immigrants": ["Immigrants"]
		};
		const checks = this.setChecks();
		this.state = {
			isChecked: checks
		}
	}

	setChecks() {
		const { currentRefinement } = this.props;
		const mapKeys = Object.keys(this.eligibilitiesMapping);
		const checks = [];
		for (var i=0; i<mapKeys.length; i++) {
			let allValuesRefined = this.eligibilitiesMapping[mapKeys[i]].every((val) => currentRefinement.includes(val));
			const key = mapKeys[i];
			checks[key] = allValuesRefined;
		}
		return checks;
	}

	changeRefinement(key, event) {
		event.preventDefault();
		const { refine } = this.props;
		const { items } = this.props;
		for (var i=0; i<items.length; i++) {
			var item = items[i];
			if (this.eligibilitiesMapping[key].includes(item.label)) {
				refine(item.value);
			}
		}
	};

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.currentRefinement !== prevProps.currentRefinement) {
			const checks = this.setChecks();
			this.setState({isChecked:checks});
		}
	}

	render() {
		const { currentRefinement } = this.props;
		const { isChecked } = this.state;
		const mapKeys = Object.keys(this.eligibilitiesMapping);
		return (
			<div className="refinement-wrapper">
				<label className="refinement-title">Eligibilities</label>
				<ul className="refinement-ul">
					{mapKeys.map(key => (
						// for each map key, display it as a filtering option
						// for onClick of each option, call refine on the values of the key
						<li key={key} className={"refine-li " + (isChecked[key] ? 'active' : '')}>
							<label>
								<input
									type="checkbox"
									className="refine-checkbox"
									onChange={this.changeRefinement.bind(this, key)}
									checked={isChecked[key]}
								/>
								{key}
							</label>
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default connectRefinementList(EligibilitiesRefinementList);