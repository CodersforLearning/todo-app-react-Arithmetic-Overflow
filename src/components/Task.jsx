import React, { useState } from 'react';

const Task = ({ className, taskTitle }) => {
	const passiveColour = '#ffffff';
	const hoverColour = '#ee1010';

	const [colour, setColour] = useState(passiveColour);

    return (
    	<span
    		style={{'cursor': 'pointer', 'color': colour}}
    		onMouseEnter={() => setColour(hoverColour)}
    		onMouseLeave={() => setColour(passiveColour)}
    	>
        	{taskTitle}
        </span>
    );
};

export default Task;
