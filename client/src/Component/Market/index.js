import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import MarketForm from "./MarketForm";
import CompanyPage from "./CompanyPage";
import * as MarketApi from "../../Api/MarketApi";
import { Redirect } from "react-router-dom";

const initialData = {
  "Global Quote": {
    Data: "Not found or loading",
  },
};
const initial_comment = [];
const initialChartData = {
  "2020-12-09": {
    "1. open": "2013.0",
    "2. high": "2033.8",
    "3. low": "2000.0",
    "4. close": "2026.65",
    "5. adjusted close": "2026.65",
    "6. volume": "917242",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-08": {
    "1. open": "1963.0",
    "2. high": "2014.2",
    "3. low": "1950.15",
    "4. close": "1993.75",
    "5. adjusted close": "1993.75",
    "6. volume": "683240",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-07": {
    "1. open": "1942.0",
    "2. high": "1965.0",
    "3. low": "1942.0",
    "4. close": "1958.05",
    "5. adjusted close": "1958.05",
    "6. volume": "293809",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-04": {
    "1. open": "1963.0",
    "2. high": "1967.85",
    "3. low": "1940.0",
    "4. close": "1946.55",
    "5. adjusted close": "1946.55",
    "6. volume": "250336",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-03": {
    "1. open": "1970.0",
    "2. high": "1981.1",
    "3. low": "1958.05",
    "4. close": "1963.45",
    "5. adjusted close": "1963.45",
    "6. volume": "1489127",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-02": {
    "1. open": "1962.95",
    "2. high": "1962.95",
    "3. low": "1935.0",
    "4. close": "1957.6",
    "5. adjusted close": "1957.6",
    "6. volume": "220138",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-12-01": {
    "1. open": "1935.25",
    "2. high": "1965.9",
    "3. low": "1931.0",
    "4. close": "1954.3",
    "5. adjusted close": "1954.3",
    "6. volume": "593339",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-27": {
    "1. open": "1941.0",
    "2. high": "1955.85",
    "3. low": "1921.55",
    "4. close": "1929.85",
    "5. adjusted close": "1929.85",
    "6. volume": "523191",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-26": {
    "1. open": "1950.05",
    "2. high": "1964.85",
    "3. low": "1930.4",
    "4. close": "1953.8",
    "5. adjusted close": "1953.8",
    "6. volume": "450855",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-25": {
    "1. open": "1980.0",
    "2. high": "1992.0",
    "3. low": "1942.3",
    "4. close": "1947.75",
    "5. adjusted close": "1947.75",
    "6. volume": "914063",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-24": {
    "1. open": "1962.0",
    "2. high": "1973.6",
    "3. low": "1931.2",
    "4. close": "1965.1",
    "5. adjusted close": "1965.1",
    "6. volume": "750504",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-23": {
    "1. open": "1929.0",
    "2. high": "1970.0",
    "3. low": "1927.0",
    "4. close": "1950.8",
    "5. adjusted close": "1950.8",
    "6. volume": "598632",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-20": {
    "1. open": "1977.8",
    "2. high": "1984.1",
    "3. low": "1894.6",
    "4. close": "1899.2",
    "5. adjusted close": "1899.2",
    "6. volume": "863183",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-19": {
    "1. open": "1986.4",
    "2. high": "2010.0",
    "3. low": "1968.0",
    "4. close": "1972.65",
    "5. adjusted close": "1972.65",
    "6. volume": "802733",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-18": {
    "1. open": "1997.45",
    "2. high": "2006.65",
    "3. low": "1961.0",
    "4. close": "1987.2",
    "5. adjusted close": "1987.2",
    "6. volume": "427982",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-17": {
    "1. open": "2084.0",
    "2. high": "2084.0",
    "3. low": "1985.0",
    "4. close": "1992.9",
    "5. adjusted close": "1992.9",
    "6. volume": "643296",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-13": {
    "1. open": "1990.0",
    "2. high": "2036.65",
    "3. low": "1981.0",
    "4. close": "1996.1",
    "5. adjusted close": "1996.1",
    "6. volume": "1825121",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-12": {
    "1. open": "1985.0",
    "2. high": "2008.35",
    "3. low": "1965.0",
    "4. close": "1979.85",
    "5. adjusted close": "1979.85",
    "6. volume": "711464",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-11": {
    "1. open": "2092.0",
    "2. high": "2095.3501",
    "3. low": "1979.0",
    "4. close": "1996.9",
    "5. adjusted close": "1996.9",
    "6. volume": "811189",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-10": {
    "1. open": "2075.0",
    "2. high": "2090.0",
    "3. low": "2041.8",
    "4. close": "2084.5",
    "5. adjusted close": "2084.5",
    "6. volume": "1068647",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-09": {
    "1. open": "2058.7",
    "2. high": "2070.0",
    "3. low": "2038.9",
    "4. close": "2050.3",
    "5. adjusted close": "2050.3",
    "6. volume": "843691",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-06": {
    "1. open": "1988.0",
    "2. high": "2040.0",
    "3. low": "1977.65",
    "4. close": "2029.0",
    "5. adjusted close": "2029.0",
    "6. volume": "1886873",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-05": {
    "1. open": "1949.0",
    "2. high": "1960.0",
    "3. low": "1931.4",
    "4. close": "1955.1",
    "5. adjusted close": "1955.1",
    "6. volume": "954587",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-04": {
    "1. open": "1840.0",
    "2. high": "1928.85",
    "3. low": "1840.0",
    "4. close": "1913.45",
    "5. adjusted close": "1913.45",
    "6. volume": "1065630",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-03": {
    "1. open": "1888.0",
    "2. high": "1909.5",
    "3. low": "1835.0",
    "4. close": "1849.45",
    "5. adjusted close": "1849.45",
    "6. volume": "1164099",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-11-02": {
    "1. open": "2033.5",
    "2. high": "2033.5",
    "3. low": "1860.0",
    "4. close": "1877.3",
    "5. adjusted close": "1877.3",
    "6. volume": "1444243",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-30": {
    "1. open": "2035.0",
    "2. high": "2064.6499",
    "3. low": "2022.0",
    "4. close": "2054.3501",
    "5. adjusted close": "2054.3501",
    "6. volume": "354434",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-29": {
    "1. open": "1999.4",
    "2. high": "2042.3",
    "3. low": "1990.75",
    "4. close": "2026.55",
    "5. adjusted close": "2026.55",
    "6. volume": "384785",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-28": {
    "1. open": "2044.0",
    "2. high": "2057.8999",
    "3. low": "2006.9",
    "4. close": "2010.7",
    "5. adjusted close": "2010.7",
    "6. volume": "1519047",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-27": {
    "1. open": "2032.0",
    "2. high": "2060.0",
    "3. low": "2005.55",
    "4. close": "2034.2",
    "5. adjusted close": "2034.2",
    "6. volume": "476055",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-26": {
    "1. open": "2101.0",
    "2. high": "2106.0",
    "3. low": "2018.45",
    "4. close": "2028.7",
    "5. adjusted close": "2028.7",
    "6. volume": "560855",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-23": {
    "1. open": "2109.0",
    "2. high": "2134.8",
    "3. low": "2095.6499",
    "4. close": "2112.55",
    "5. adjusted close": "2112.55",
    "6. volume": "618540",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-22": {
    "1. open": "2123.0",
    "2. high": "2133.05",
    "3. low": "2091.5",
    "4. close": "2107.1001",
    "5. adjusted close": "2107.1001",
    "6. volume": "301966",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-21": {
    "1. open": "2171.1001",
    "2. high": "2191.0",
    "3. low": "2098.75",
    "4. close": "2123.25",
    "5. adjusted close": "2123.25",
    "6. volume": "534557",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-20": {
    "1. open": "2183.7",
    "2. high": "2193.7",
    "3. low": "2152.2",
    "4. close": "2155.5",
    "5. adjusted close": "2155.5",
    "6. volume": "364138",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-19": {
    "1. open": "2192.0",
    "2. high": "2228.3999",
    "3. low": "2156.0",
    "4. close": "2175.8",
    "5. adjusted close": "2175.8",
    "6. volume": "352226",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-16": {
    "1. open": "2214.8",
    "2. high": "2232.0",
    "3. low": "2173.05",
    "4. close": "2175.5",
    "5. adjusted close": "2175.5",
    "6. volume": "440109",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-15": {
    "1. open": "2291.0",
    "2. high": "2291.7",
    "3. low": "2195.1001",
    "4. close": "2205.55",
    "5. adjusted close": "2205.55",
    "6. volume": "1514858",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-14": {
    "1. open": "2284.8999",
    "2. high": "2304.2",
    "3. low": "2269.55",
    "4. close": "2287.3501",
    "5. adjusted close": "2287.3501",
    "6. volume": "306815",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-13": {
    "1. open": "2232.2",
    "2. high": "2285.95",
    "3. low": "2228.2",
    "4. close": "2280.25",
    "5. adjusted close": "2280.25",
    "6. volume": "409570",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-12": {
    "1. open": "2233.5",
    "2. high": "2254.8501",
    "3. low": "2226.8501",
    "4. close": "2236.6001",
    "5. adjusted close": "2236.6001",
    "6. volume": "262242",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-09": {
    "1. open": "2237.0",
    "2. high": "2252.6499",
    "3. low": "2217.2",
    "4. close": "2233.7",
    "5. adjusted close": "2233.7",
    "6. volume": "305022",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-08": {
    "1. open": "2261.8",
    "2. high": "2268.0",
    "3. low": "2222.3999",
    "4. close": "2238.8999",
    "5. adjusted close": "2238.8999",
    "6. volume": "419058",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-07": {
    "1. open": "2233.25",
    "2. high": "2309.3999",
    "3. low": "2221.0",
    "4. close": "2257.1499",
    "5. adjusted close": "2257.1499",
    "6. volume": "875121",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-10-06": {
    "1. open": "2228.0",
    "2. high": "2234.0",
    "3. low": "2201.45",
    "4. close": "2210.1499",
    "5. adjusted close": "2210.1499",
    "6. volume": "259771",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-08-31": {
    "1. open": "2172.0",
    "2. high": "2172.0",
    "3. low": "2061.25",
    "4. close": "2078.55",
    "5. adjusted close": "2078.55",
    "6. volume": "770897",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-08-28": {
    "1. open": "2120.0",
    "2. high": "2131.8999",
    "3. low": "2106.2",
    "4. close": "2115.6001",
    "5. adjusted close": "2115.6001",
    "6. volume": "463554",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-08-27": {
    "1. open": "2146.25",
    "2. high": "2148.5",
    "3. low": "2103.75",
    "4. close": "2111.7",
    "5. adjusted close": "2111.7",
    "6. volume": "397191",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-08-26": {
    "1. open": "2087.3999",
    "2. high": "2147.1499",
    "3. low": "2047.25",
    "4. close": "2136.8501",
    "5. adjusted close": "2136.8501",
    "6. volume": "857465",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
  "2020-08-25": {
    "1. open": "2105.0",
    "2. high": "2111.3",
    "3. low": "2078.3",
    "4. close": "2082.0",
    "5. adjusted close": "2082.0",
    "6. volume": "481884",
    "7. dividend amount": "0.0000",
    "8. split coefficient": "1.0",
  },
};

const Market = ({ location, history }) => {
  const [company, setCompany] = useState("");
  const pathName = location.pathname;
  const companyName = pathName.split("/")[2];
  const [data, setData] = useState(initialData);
  // const [Comment, setComment] = useState([]);
  const [chartData, setChartData] = useState(initialChartData);
  const [currentStatus, setCurrentStatus] = useState("daily");
  const [CommentData, setCommentData] = useState(initial_comment);

  useEffect(() => {
    if (companyName) {
      fetchMetaData();
      fetchCommentData();
    }
  }, [companyName]);

  useEffect(() => {
    if (companyName) {
      fetchChartData();
    }
  }, [companyName, currentStatus]);

  const fetchChartData = () => {
    MarketApi.companyChart(companyName, currentStatus)
      .then((data) => {
        const keys = Object.keys(data);
        const report = data[keys[1]];
        setChartData(report);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchMetaData = () => {
    MarketApi.companyInfo(companyName)
      .then((data) => {
        console.log("data here");
        console.log(data);
        if (data["Global Quote"]) {
          setData(data);
        } else {
        }
      })
      .catch((err) => {
        // console.log(err.response);

        alert(err.response.data.msg || "Server error");
        // setTimeout(() => history.push("/market"), 2000);
      });
  };
  const fetchCommentData = () => {
    MarketApi.companyComments(companyName).then((data) => {
      setCommentData(data);
      console.log("data here");
      console.log(data);
    });
  };
  //   useEffect(() => {
  //     if (companyName) {
  //       MarketApi.companyInfo(companyName).then((data) => {
  //         console.log("data here");
  //         console.log(data);
  //         if (data) {
  //           setData(data);
  //         } else {

  //         }
  //       //fetch details of company
  //       // if found then great
  //       //setData(data);
  //       //else
  //       //redirect to /market
  //       //history.push("/market");
  //     })
  //   }
  // },[companyName]);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/market/${company}`);
  };

  const onChange = ({ target }) => {
    setCompany(target.value.toUpperCase());
  };

  const onChangeCurrentStatus = (value) => {
    setCurrentStatus(value);
  };
  console.log(companyName, data);
  return (
    <PageLayout page="market" history={history}>
      <section className="market dark min-vh-100 text-light padTop-5 pb-5">
        <div className="container">
          {data && companyName ? (
            <CompanyPage
              comments={CommentData}
              data={data}
              chartData={chartData}
              status={currentStatus}
              onChangeStatus={onChangeCurrentStatus}
            />
          ) : (
            <MarketForm
              onChange={onChange}
              value={company}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </section>
    </PageLayout>
  );
};

Market.propTypes = {};

export default Market;
