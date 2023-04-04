import './keyDatas.scss'

function KeyDatas (props) {
    const { picto, keyDataCount, keyDataText} = props
    return (
        <div className="keyData_container">
            <img src={picto} alt="Icone de donnée clé" />
                <div>
                    <p>{keyDataCount}</p>
                    <span>{keyDataText}</span>
                </div>
        </div>
    )
}

export default KeyDatas