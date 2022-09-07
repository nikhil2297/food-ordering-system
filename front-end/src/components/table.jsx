import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const CustomTable = () => {
    
    function createRowData(orderId, paymentId, price, pickupTime, status){
        return {orderId, paymentId, price, pickupTime, status}
    }
    
    const column = ["Order ID", "Payment Mode", "Price", "Pickup Time", "Status"]

    const row = [
        createRowData(7345234, "PayTM", 350, "02:15 PM", "Processing"),
        createRowData(5312654, "COD", 240, "12:15 PM", "Cancelled"),
        createRowData(6521587, "Gpay", 170, "11:25 PM", "On the way"),
        createRowData(7895421, "Debit Card", 570, "12:15 PM", "Delivered"),
        createRowData(9874621, "Google Pay", 785, "10:15 AM", "Delivered"),
        createRowData(4568795, "PhonePe", 1200, "09:30 AM", "Delivered"),
    ]   

    const rowNames = ["orderId", "paymentId", "price", "pickupTime", "status"]

    console.log("Row : ", row)
    console.log("Column : ", column)

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {column.map((text) => {
                            return <TableCell>{text}</TableCell>
                        })}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {row.map((rowData) => {
                        return (<TableRow
                        >
                             {rowNames.map((rowName) => {                                
                                return <TableCell>{rowData[rowName]}</TableCell>
                            })}
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )       
}

export default CustomTable;