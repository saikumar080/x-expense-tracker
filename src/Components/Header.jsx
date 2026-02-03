import React from 'react'
import "./Header.css"
import WalletBalance from './WalletBalance/WalletBalance'
import ExpenseList from './ExpenseForm/ExpenseList'
import CategoryPieChart from './Charts/CatergoryPieChart'
export default function Header() {
  return (
    <div className='header-box'>
        <div className="header-layout">
            <WalletBalance />
            <ExpenseList />
            <CategoryPieChart />
        </div>
    </div>
    
  )
}
