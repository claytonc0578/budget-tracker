import { faShoppingBag, faHome, faUtensils, faMoneyBill } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import typeColors from "../../assets/typeColors"

export default function TransactionItem(props) {
    let icon
    const colors = typeColors.find(obj => obj.type === props.type)

    switch (props.type) {
      case 'Housing':
        icon = <FontAwesomeIcon icon={faHome} />
        break
      case 'Subscription':
        icon = <FontAwesomeIcon icon={faMoneyBill} />
        break
      case 'Food':
        icon = <FontAwesomeIcon icon={faUtensils} />
        break
      case 'Personal':
        icon = <FontAwesomeIcon icon={faShoppingBag} />
        break
      default:
    }
    
    const styles = {
        backgroundColor: colors.lightColor,
        color: colors.darkColor,
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