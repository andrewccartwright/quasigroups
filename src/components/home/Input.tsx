const Input = (props: {id?: string, defaultValue?: number, className: string}) => {
    return (
        <input id={props.id} className={props.className} defaultValue={props.defaultValue} type="text" required maxLength={1}/>
    )
}

export default Input;