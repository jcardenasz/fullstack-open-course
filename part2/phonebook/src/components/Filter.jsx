export const Filter = (props) => {
    return (
        <div>
        <form onSubmit={props.addFilter}>
        <p>Filter shown with</p>
        <input
            value={props.search}
            onChange={props.handleSearchChange}
        />
        </form>
        </div>
    )
}