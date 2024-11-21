import React, { useId } from "react";

interface InputBoxProps {
    label: string;
    amount: number | string; // Allow numbers and string representations
    onAmountChange?: (amount: number) => void;
    onCurrencyChange?: (currency: string) => void;
    currencyOptions?: string[];
    selectCurrency?: string;
    amountDisable?: boolean;
    currencyDisable?: boolean;
    className?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="text"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label
                    htmlFor={`${amountInputId}-currency`}
                    className="text-black/40 mb-2 w-full"
                >
                    Currency Type
                </label>
                <select
                    id={`${amountInputId}-currency`}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
