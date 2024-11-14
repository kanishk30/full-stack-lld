function Pagination(props) {
    const { handlePrevFn, handleNextFn, pageNumber } = props;
    return (
        <div className="flex justify-center gap-2 p-4 h-[50px] bg-gray-500 w-full ">
            <div role="button" onClick={handlePrevFn}>
                <i className="fa-solid fa-arrow-left" />
            </div>
            {pageNumber}
            <div role="button" onClick={handleNextFn}>
                <i className="fa-solid fa-arrow-right" />
            </div>
        </div>
    )
}

export default Pagination;