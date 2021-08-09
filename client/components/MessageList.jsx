import React from 'react';

const MessageList = ({ currentFolder="Inbox", foldersRead, selectMessage }) => {
	const messages = foldersRead[currentFolder] || [];

	if(!messages.length){
		return (
			<div className="messages-list">
				{currentFolder}: No messages in this folder
			</div>
		);
	}

	return (
		<div className="messages-list">
			<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				<thead>
					<tr>
						<th className="mdl-data-table__cell--non-numeric">From</th>
						<th className="mdl-data-table__cell--non-numeric">Subject</th>
					</tr>
				</thead>
				<tbody>
					{messages.map(({ "message-id": id, from, subject }) => {
						return (
							<tr onClick={() => selectMessage(id)} key={id}>
								<td className="mdl-data-table__cell--non-numeric">{from}</td>
								<td className="mdl-data-table__cell--non-numeric">{subject}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};

export default MessageList;
