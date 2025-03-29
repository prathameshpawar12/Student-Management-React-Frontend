import React from "react";

const Search = ({ search, setSearch }) => {
	return (
		<div id="sr" className="justify-content-center items-center col-sm-2 mb-1">
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					className="form-control"
					type="search"
					role="searchbox"
					placeholder="Search students..."
					value={search}
					onChange={(e) =>
						setSearch(e.target.value)
					}></input>
			</form>
		</div>
	);
};

export default Search;