interface Props{
    errorMessage?:string
}

const ErrorField = ({errorMessage}:Props) => {
    return (
        <div className="text-iconRed text-xs mt-[15px]">
            {errorMessage}
        </div>
    );
};

export default ErrorField;