import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/users.actions'

const Home = async() => {

  const loggedIn = await getLoggedInUser();
  console.log(loggedIn)

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn?.name || 'guest'}
          subtext="Access and manage your account effectively"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.60}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 125.50},{currentBalance: 500.45}]}
      />
    </section>
  )
}

export default Home