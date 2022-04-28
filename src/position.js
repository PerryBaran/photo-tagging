const getMousePosition = (e) => {
    const area = e.target.getBoundingClientRect();
    const x = e.clientX - area.left;
    const y = e.clientY - area.top;

    return {x: x, y: y}
}

export default getMousePosition;