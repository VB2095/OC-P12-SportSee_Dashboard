import './keyDatas.scss'

/**
 * 
 * @param {} props 
 * @param {string} props.picto - Key data icon
 * @param {string} props.keyDataCount - Key data count (eg. 1000 kcal)
 * @param {string} props.keyDataText - Key data text (eg. Calories) 
 * 
 * @returns 
 */

function KeyDatas (props) {
    const { picto, keyDataCount, keyDataText} = props
    return (
        <div className="keyData_content">
            <img src={picto} alt="Icone de donnée clé" />
            <div>
                <p>{keyDataCount}</p>
                <span>{keyDataText}</span>
            </div>
        </div>
    )
}

export default KeyDatas