import React, { useState } from 'react';

const Task = ({ className, taskTitle, onHoverColour }) => {
	const passiveColour = '#ffffff';
	const [colour, setColour] = useState(passiveColour);

    return (
    	<span
    		style={{'cursor': 'pointer', 'color': colour, 'fontSize': '14pt'}}
    		onMouseEnter={() => setColour(onHoverColour)}
    		onMouseLeave={() => setColour(passiveColour)}
    	>
        	{taskTitle}
        </span>
    );
};

export default Task;
