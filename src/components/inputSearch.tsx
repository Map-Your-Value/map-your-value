import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

    return (
        <div className="flex flex-col w-full max-w-lg items-center space-y-2">
            <div className="flex w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="www.my-web-site.com"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (error) {
                            setError(false);
                            setErrorMessage("");
                        }
                    }}
                    className={`w-full h-16 text-xl p-4 ${error ? 'border-red-500' : ''}`}
                />
                <Button type="button" className="h-16 text-xl px-6" onClick={handleSearchClick}>
                    Search
                </Button>
            </div>
            {error && <span className="text-red-500 text-sm text-left w-full">{errorMessage}</span>}
        </div>
    );
};

export default InputSearch;
