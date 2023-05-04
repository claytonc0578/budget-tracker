import { faShoppingBag, faHome, faUtensils, faMoneyBill } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TransactionItem(props) {
    let bgColor
    let iconColor
    let icon

    switch (props.type) {
      case 'Housing':
        bgColor = '#FCEED4'
        iconColor = '#FCAC12'
        icon = <FontAwesomeIcon icon={faHome} />
        break
      case 'Subscription':
        bgColor = '#EEE5FF'
        iconColor = '#7F3DFF'
        icon = <FontAwesomeIcon icon={faMoneyBill} />
        break
      case 'Food':
        bgColor = '#FDD5D7'
        iconColor = '#FD3C4A'
        icon = <FontAwesomeIcon icon={faUtensils} />
        break
      case 'Personal':
        bgColor = '#BDDCFF'
        iconColor = '#0077FF'
        icon = <FontAwesomeIcon icon={faShoppingBag} />
        break
      default:
        bgColor = 'white'
    }
    
    const styles = {
        backgroundColor: bgColor,
        color: iconColor,
    }

    return (
        <div className="transaction-item">
            <div className="transaction-item-container">
                <div className="transaction-item-icon-container center"
                    style={styles}
                >
                    {icon}
                </div>
                <div className="">
                    <p className="transaction-type">{props.type}</p>
                    <p className="transaction-name">{props.name}</p>
                </div>
            </div>

            <p className="transaction-value">
                -${props.cost}
            </p>

        </div>
    )
}