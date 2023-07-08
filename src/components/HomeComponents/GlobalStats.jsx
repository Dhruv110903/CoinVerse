import React from 'react'

const GlobalStats = (props) => {
  return (
    <div className="global-status-container">
      <h2 className="global-title title-2">Global Crypto Stats</h2>

      <div className="stats-container">
      <div className="stat-item">
  <p className="stat-title">Total Coins</p>
  <p className="stat-value">
    {props.data && props.data.stats && props.data.stats.totalCoins ? (
      <>{Intl.NumberFormat("en", { notation: "compact" }).format(props.data.stats.totalCoins)}</>
    ) : (
      <>Loading...</>
    )}
  </p>
</div>

<div className="stat-item">
  <p className="stat-title">Total 24h Volume</p>
  <p className="stat-value">
    {props.data && props.data.stats && props.data.stats.total24hVolume ? (
      <>{Intl.NumberFormat("en", { notation: "compact" }).format(props.data.stats.total24hVolume)}</>
    ) : (
      <>N/A</>
    )}
  </p>
</div>

       <div className="stat-item">
  <p className="stat-title">Total Exchanges</p>
  <p className="stat-value">
    {props.data && props.data.stats && props.data.stats.totalExchanges ? (
      <>{Intl.NumberFormat("en", { notation: "compact" }).format(props.data.stats.totalExchanges)}</>
    ) : (
      <>N/A</>
    )}
  </p>
</div>

<div className="stat-item">
  <p className="stat-title">Total Market Cap</p>
  <p className="stat-value">
    {props.data && props.data.stats && props.data.stats.totalMarketCap ? (
      Intl.NumberFormat("en", { notation: "compact" }).format(
        props.data.stats.totalMarketCap
      )
    ) : (
      "N/A"
    )}
  </p>
</div>

{/* <div className="stat-item">
  <p className="stat-title">Total Markets</p>
  <p className="stat-value">
    {props.data && props.data.stats && props.data.stats.totalMarkets ? (
      Intl.NumberFormat("en", { notation: "compact" }).format(
        props.data.stats.totalMarkets
      )
    ) : (
      "N/A"
    )}
  </p>
</div> */}

      </div>
    </div>
  );
}

export default GlobalStats;