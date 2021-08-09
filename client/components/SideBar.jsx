import React from 'react';

const SideBar = ({ appName, foldersList, changeFolder, currentFolder="Inbox" }) => {
	return (
		<div className="mdl-layout__drawer">
			<span className="mdl-layout-title">{appName}</span>
			<nav className="mdl-navigation">

			{foldersList.map((name) => {
				let className = "mdl-navigation__link"
				if(name === currentFolder){
					className = `${className} is-selected`;
				}
				return <a className={className}
					onClick={() => changeFolder(name)}
					key={name}
				>{name}</a>
			})}

			</nav>
		</div>
	);
};

export default SideBar;