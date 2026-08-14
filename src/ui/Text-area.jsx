

const TextArea = ({ label, state, setState, height = '100px' }) => {
    const areaId = label ? label.toLowerCase().replace(/\s+/g, '-') : 'floatingTextarea';
    return (
        <div className="form-floating mb-2">
            <textarea className="form-control" placeholder={label} value={state}
                onChange={e => setState(e.target.value)} id={areaId} style={{ height: height }}></textarea>
            <label htmlFor={areaId}>{label}</label>
        </div>
    )
}

export default TextArea