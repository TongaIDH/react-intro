function TodoCounter(props) {
    return (
        <h1>
            Completaste
            <span> {props.completed} de </span>
            <span> {props.total} TODOs </span>
        </h1>
    );
}

export { TodoCounter };
