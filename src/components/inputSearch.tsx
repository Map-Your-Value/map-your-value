import React, { useState } from "react";

interface InputSearchProps {
    onSearch: () => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearchClick = () => {
        const urlPattern = new RegExp(
            "^(https?:\\/\\/|www\\.)" +
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // optional port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // optional query string
            "(\\#[-a-z\\d_]*)?$", "i" // optional fragment locator
        );

        if (inputValue.trim() === "") {
            setError(true);
            setErrorMessage("Please enter your website");
        } else if (!urlPattern.test(inputValue)) {
            setError(true);
            setErrorMessage("Please enter a valid website");
        } else {
            setError(false);
            setErrorMessage("");
            onSearch();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="flex flex-col items-center text-center justify-center">
            <h1 className="text-5xl text-center">I am looking for competitors</h1>
            <div className="flex w-full justify-center space-x-2 mt-10">
                <div className={`flex items-center w-4/5 bg-gray rounded-full text-grayText px-4 py-2 ${error ? 'border border-red' : 'focus-within:border focus-within:border-grayText'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="gray"
                         fill="none" className="flex-shrink-0">
                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Enter URL"
                        className={`bg-gray ml-4 flex-grow focus:outline-none`}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (error) {
                                setError(false);
                                setErrorMessage("");
                            }
                        }}
                        onKeyDown={handleKeyDown}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        color="gray"
                        fill="none"
                        className="cursor-pointer"
                        onClick={handleSearchClick}>
                        <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor"
                              strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            {error && <span className="text-red text-sm w-full">{errorMessage}</span>}
        </div>
    );
};

export default InputSearch;
