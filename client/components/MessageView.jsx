import React from 'react';

const MessageView = ({
	message,
	currentFolder,
	deleteMessage,
	selectMessage,
	sendMessage,
	starMessage,
	unreadMessage
}) => {
	const {
		id, body, date, from, "reply-to": reply,
		starred, subject, to
	} = message;
	const isTrash = currentFolder === 'Trash';
	const [showReply, setShowReply] = React.useState(false);
	const triggerSendMessage = () => {
		const body = 'TODO: get text from reply textarea';
		sendMessage({ id, body });
		setShowReply(false);
	}
	return (
		<div className="message-view">
			<div className="actions">
				<i className="material-icons" onClick={selectMessage}>arrow_back</i>
				<i className="material-icons" onClick={() => deleteMessage(id)}>delete</i>
				{/* <i className="material-icons" onClick={unreadMessage}>markunread</i> */}
			</div>
			<div>
				<h3>{subject}</h3>
				<div className="email-header">
					<div>
						<h5>{from}</h5>
						{ reply && <div>reply-to {reply}</div> }
						<div>to {to}</div>
					</div>
					<div className="actions">
						<span className="date">{date}</span>
						{ isTrash &&
							<span>
								{ starred
									? <i className="material-icons" onClick={starMessage}>star</i>
									: <i className="material-icons" onClick={starMessage}>star_outline</i>
								}
								<i className="material-icons" onClick={() => setShowReply(true)}>reply</i>
							</span>
						}
					</div>
				</div>
				<div className="body">{body}</div>
			</div>
			{ !showReply &&
				<div>
					<button className="mdl-button mdl-js-button mdl-button--raised"
						onClick={() => setShowReply(true)}
					>
						<i className="material-icons">reply</i>
						<span>Reply</span>
					</button>
					{/*
						<button className="mdl-button mdl-js-button mdl-button--raised"
							onClick={() => setShowReply(true)}
						>
							<i className="material-icons">forward</i>
							<span>Forward</span>
						</button>
					*/}
				</div>
			}
			{ showReply &&
				<div className="reply">
					<div>
						<i className="material-icons">reply</i>
						<span>{ reply || from }</span>
					</div>
					<textarea></textarea>
					<div className="actions">
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
							onClick={triggerSendMessage}
						>
							<i className="material-icons">send</i>
							<span>Send</span>
						</button>
					</div>
				</div>
			}
		</div>
	);
};

export default MessageView;
