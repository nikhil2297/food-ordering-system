import { Box, Container, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Container className="dashboard-root-container">
      <Container className="overview-container">
        <Paper className="order-pending-container" elevation={0}>
          <div className="data">
            <span className="count">30</span>
            <span className="label">Pending</span>
          </div>
        </Paper>
        <Paper className="order-delivered-container" elevation={0}>
          <div className="data">
            <span className="count">40</span>
            <span className="label">Delivered</span>
          </div>
        </Paper>
        <Paper className="total-order-container" elevation={0}>
          <div className="data">
            <span className="count">240</span>
            <span className="label">Total Orders</span>
          </div>
        </Paper>
        <Paper className="total-sales-container" elevation={0}>
          <div className="data">
            <span className="count">$ 12,437</span>
            <span className="label">Total Sales</span>
          </div>
        </Paper>
      </Container>
      <Container className="sales-report-container">
        <Paper className="today-sales-container">
          <span className="label-today">Today</span>
          <div className="amount-earned-container">
            <span className="amount">$ 12,437</span>
            <span className="profit-earned">32%</span>
          </div>
          <span className="text">Compared to last day</span>
        </Paper>
        <Paper className="weekly-sales-container">
        <span className="label-week">This Week</span>
          <div className="amount-earned-container">
            <span className="amount">$ 924,37</span>
            <span className="profit-earned">32%</span>
          </div>
          <span className="text">Compared to last week</span>
        </Paper>
        <Paper className="monthly-sales-container">
        <span className="label-month">This Month</span>
          <div className="amount-earned-container">
            <span className="amount">$ 6,547,32</span>
            <span className="profit-earned">32%</span>
          </div>
          <span className="text">Compared to last month</span>
        </Paper>
      </Container>
    </Container>
  );
};

export default Dashboard;
