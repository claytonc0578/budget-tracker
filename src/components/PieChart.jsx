import { AppContext } from "./context/BudgetContext"
import { useContext } from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import typeColors from "../assets/typeColors";

export default function PieChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const housingObj = typeColors.find(obj => obj.type === "Housing")
    const subscriptionObj = typeColors.find(obj => obj.type === "Subscription")
    const foodObj = typeColors.find(obj => obj.type === "Food")
    const personalObj = typeColors.find(obj => obj.type === "Personal")

    const { expenses } = useContext(AppContext)

    const counts = expenses.reduce((acc, expense) => {
        const { type } = expense
        acc[type] = acc[type] ? acc[type] + 1 : 1
        return acc
    }, {})

    const labelType = Object.keys(counts)
    const countData = Object.values(counts)

    const data = {
        labels: labelType,
        datasets: [
            {
                data: countData,
                backgroundColor: [
                    housingObj.lightColor, 
                    personalObj.lightColor, 
                    subscriptionObj.lightColor, 
                    foodObj.lightColor, 
                ],
                borderColor: [
                    housingObj.darkColor, 
                    personalObj.darkColor, 
                    subscriptionObj.darkColor, 
                    foodObj.darkColor, 
                ],
                hoverBackgroundColor: [
                    housingObj.darkColor, 
                    personalObj.darkColor, 
                    subscriptionObj.darkColor, 
                    foodObj.darkColor, 
                ],
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display:true,
                position: 'top',
            },
            datalabels: {
                display: true,
                color: "#F5F5F5",
                font: {
                    size: 16,
                }
            }
        }
    }

    return (
        <div className="pie-chart">
            <Doughnut data={data} options={options} />
        </div>
    )
}