import { faShoppingBag, faHome, faUtensils, faMoneyBill } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import typeColors from "../assets/typeColors"
import { Link, useLocation } from "react-router-dom"

export default function TransactionItem(props) {
    const location = useLocation()

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
        <Link to="/transaction"
            state= {{
                prevId: props.id,
                prevName: props.name,
                prevCost: props.cost,
                prevType: props.type,
            }}
            
            className={`transaction-item
            ${location.pathname === "/transactions" ?
                "wide" : ""}`}
        >
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

        </Link>
    )
}