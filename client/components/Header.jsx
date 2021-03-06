import React from 'react';

const Header = ({ }) => {
	return (
		<header className="mdl-layout__header">
			<div className="mdl-layout__header-row">
				<div className="mdl-layout-spacer"></div>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
							mdl-textfield--floating-label mdl-textfield--align-right">
					<label className="mdl-button mdl-js-button mdl-button--icon"
						htmlFor="fixed-header-drawer-exp">
					</label>
					<div className="mdl-textfield__expandable-holder">
						<input className="mdl-textfield__input" type="text" name="sample"
							id="fixed-header-drawer-exp"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
