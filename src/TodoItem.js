function TodoItem(props) {
    return (
        <li>
            <button> Confirm </button>
            <p>{props.text}</p>
            <button> Delete </button>
        </li>
    );
}

export { TodoItem };
